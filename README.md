# Vue Lynx Starter

[![CI](https://github.com/xcvzmoon/vue-lynx-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/xcvzmoon/vue-lynx-starter/actions/workflows/ci.yml)
[![Release](https://github.com/xcvzmoon/vue-lynx-starter/actions/workflows/release.yml/badge.svg)](https://github.com/xcvzmoon/vue-lynx-starter/actions/workflows/release.yml)

A minimal Vue Lynx application built with Vue 3 and Rspeedy. The starter currently renders a Hello World screen in Lynx and Web environments.

## Requirements

- Node.js 24 or newer
- Bun 1.4.0 or newer
- LynxExplorer for previewing the native Lynx bundle

## Getting started

Install dependencies with the committed lockfile:

```bash
bun ci
```

Start the development server:

```bash
bun run dev
```

Scan the QR code printed in the terminal with LynxExplorer. Edit [`src/App.vue`](src/App.vue) to change the screen.

## Commands

```bash
bun run dev               # Start the development server
bun run build             # Build Lynx and Web bundles
bun run preview           # Preview the production build
bun run check             # Check formatting and lint
bun exec rspeedy inspect  # Inspect the Rspeedy and Rspack configuration
```

Production bundles are written to `dist/`.

## Releasing

Create a versioned release with one of the supported release types:

```bash
bun run release patch
bun run release minor
bun run release major
```

The release script updates the changelog, creates a Git commit and annotated tag, then pushes both to the repository. The Release workflow creates the corresponding GitHub release.

## IDE setup

The project supports [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar), including Vue and Lynx-specific diagnostics for `.vue` files.
