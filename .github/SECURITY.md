# Security Policy

This repository is a Vue Lynx application and build configuration. We treat security reports as high priority and ask that you report them privately rather than through a public issue.

## Supported Versions

Security fixes are made against the latest commit on `main`. If you're running a fork or an older commit, update to the current `main` before relying on any advisory being applicable to your deployment.

## Reporting a Vulnerability

**Do not open a public issue for a security vulnerability.** Report it privately through [GitHub Security Advisories](https://github.com/xcvzmoon/vue-lynx-starter/security/advisories/new). This opens a private channel between you and the maintainers where the report, discussion, and eventual fix stay hidden from the public until a coordinated disclosure is ready.

A useful report includes:

- The component involved (`src`, build tooling, or CI configuration)
- Steps to reproduce, or a proof of concept
- The impact you believe the issue has, and any conditions required to trigger it
- Any suggested remediation, if you have one

### What to expect

- **Acknowledgment**: within 3 business days of your report.
- **Initial assessment**: within 5 business days, including a severity estimate and whether we can reproduce it.
- **Resolution timeline**: communicated once the issue is triaged, and scaled to severity. We'll keep you updated as the fix progresses.
- **Credit**: with your permission, we'll credit you in the published advisory once a fix ships.

We ask that you give us a reasonable window to investigate and patch an issue before any public disclosure, and that you avoid accessing, modifying, or exfiltrating data beyond what's necessary to demonstrate the vulnerability.

## Scope

In scope:

- Anything that could expose environment configuration or other secrets to a client
- Unsafe build or dependency configuration
- Dependency vulnerabilities with a realistic exploitation path in this codebase

Out of scope:

- Vulnerabilities in an upstream dependency's own code with no realistic exploitation path through this repository (report those to the upstream project directly)
- Denial of service through sheer traffic volume against a deployer's own infrastructure
- Issues that require an already-compromised database or `.env` file
- Misconfiguration in a downstream project built from this starter, rather than in this repository itself
- Social engineering against maintainers or contributors

## Disclosure Policy

We follow coordinated disclosure: once a fix is available, we publish a GitHub Security Advisory describing the issue, its impact, and the affected commit range. This project does not currently run a paid bug bounty program.
