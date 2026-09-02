/// <reference types="node" />

import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as v from 'valibot';

const releaseTypeSchema = v.picklist(['patch', 'minor', 'major']);
type ReleaseType = v.InferOutput<typeof releaseTypeSchema>;

const versionSchema = v.pipe(
  v.string(),
  v.regex(/^\d+\.\d+\.\d+$/, 'Invalid semantic version'),
  v.transform((version) => {
    const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
    if (!match) throw new Error('unreachable: regex already validated shape');
    const [, major, minor, patch] = match;
    return { major: Number(major), minor: Number(minor), patch: Number(patch) };
  }),
);
type Version = v.InferOutput<typeof versionSchema>;

function executeCommand(cmd: string[]): void {
  const result = spawnSync(cmd[0], cmd.slice(1), { cwd: projectRoot, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`command failed: ${cmd.join(' ')}`);
}

function computeNextVersion(version: Version, type: ReleaseType): string {
  const { major, minor, patch } = version;
  if (type === 'patch') return `${major}.${minor}.${patch + 1}`;
  if (type === 'minor') return `${major}.${minor + 1}.0`;
  if (major === 0) return minor === 0 ? `${major}.${minor + 1}.0` : '1.0.0';
  return `${major + 1}.0.0`;
}

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const changelogen = resolve(projectRoot, 'node_modules/changelogen/dist/cli.mjs');
const releaseType = v.parse(releaseTypeSchema, process.argv[2]);
const packageJsonFile = await readFile(resolve(projectRoot, 'package.json'), 'utf8');
const packageJsonSchema = v.object({ version: versionSchema });
const packageJson = v.parse(packageJsonSchema, JSON.parse(packageJsonFile));
const nextVersion = computeNextVersion(packageJson.version, releaseType);
const tag = `v${nextVersion}`;

executeCommand([process.execPath, changelogen, '-r', nextVersion, '--bump']);
executeCommand(['git', 'add', 'package.json', 'CHANGELOG.md']);
executeCommand(['git', 'commit', '-m', `chore(release): ${tag}`]);
executeCommand(['git', 'tag', '-a', tag, '-m', tag]);
executeCommand(['git', 'push', '--follow-tags']);
