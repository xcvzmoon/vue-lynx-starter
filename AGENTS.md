# AGENTS.md

You are an expert in TypeScript, Rspeedy, and Vue Lynx application development. You write maintainable, performant, and accessible code.

## Read in Advance

- Vue Lynx: [llms.txt](https://vue.lynxjs.org/llms.txt), **REQUIRED**.
  While dealing with a Vue Lynx task, an agent **MUST** read this doc because it is an entry point of all available docs about Vue Lynx.

## Commands

- `bun run dev` - Start the dev server
- `bun run build` - Build the app for production
- `bun run preview` - Preview the production build locally
- `bun exec rspeedy inspect` - Inspect the Rspeedy config and Rspack config of the project.

## Related Docs

- Rsbuild: <https://rsbuild.rs/llms.txt>
- Rspack: <https://rspack.rs/llms.txt>

## Code conventions

- Use `import type` for type-only imports (enforced by oxlint's `typescript/consistent-type-imports`)
- **`no-console`**: only `warn`/`error`/`info` allowed
- **`no-non-null-assertion`** is a warning — avoid `!`; type-aware rules also catch most unsafe patterns

## Editing Guidance

- Make the smallest correct change.
- Do not polish unrelated code.
- Do not remove correct comments or documentation.
- Do not rename broad parts of the codebase unless required.
- Do not expand a change into a repo-wide refactor unless necessary.
- Prefer leaving correct existing code in place.
- When touching production-sensitive code, prioritize reliability over clever abstractions.

## Formatting And Style

- Match the surrounding file's formatting instead of hand-styling custom layouts.
- Prefer `function name()` for named functions and helpers.
- Do not prefer `const fn = () => {}` for normal top-level helpers.
- Exception: callbacks should stay as arrows, for example `items.map((item) => item.id)`.
- If only one or two properties is needed from iterated item and will not conflict other variables, prefer destructuring.
- Prefer functions over classes.
- Existing classes that are already correct can stay; do not rewrite them for style only.
- Keep diffs small and focused.

## Types And Naming

- Prefer `type` over `interface`.
- Avoid `any`; prefer `unknown` and narrow it explicitly but avoid creating isRecord function.
- Add explicit return types to exported functions and non-trivial helpers.
- Use string literal unions for small state enums like `'ok' | 'error'`.
- Keep generics minimal and purposeful.
- Reuse existing helper types before inventing new ones.
- Use descriptive names.
- Do not abbreviate iterable items; prefer `item`, `entry`, `record`, `status`.
- Avoid one-letter names except for conventional indexes.

## Validation, Errors, And Responses

- Use Valibot for environment parsing, form validation, and request validation.
- Prefer `camelCaseSchema` over `PascalCaseSchema` in generating schemas.
- Prefer composable `v.pipe()` schemas with built-in actions and reusable transform helpers instead of manual parsing or ad-hoc validation logic.
- Validate once at the boundary, not repeatedly in inner layers.
- Never throw raw strings.
- Catch infrastructure errors where graceful degradation is expected.
- Clean up temporary resources in `finally` blocks.
- Include stable error codes in config validation and app-level failures.

## Agents

- Disable co-author and never commit nor push.
- Do not preserve backward compatibility. Remove obsolete paths instead of adding compatibility layers, fallbacks, or migrations.
- Choose the simplest implementation that fully meets the current requirements. Avoid speculative abstractions, configuration, and indirection.
- Grow the system in layers. Start from the smallest version that works end to end, and add each new capability on top of a product that already works. Never trade a working product for unfinished complexity.
- Keep components modular and concerns clearly separated.
- Prefer established, well-maintained libraries when they reduce overall complexity or improve reliability. Do not reimplement common functionality without a clear reason.
- Lean on the dependencies already in the project before writing your own implementation or adding packages. Do not assume a library lacks a capability without checking its documentation and types.
- Make architectural decisions for the long term. Do not accept a stopgap that only works for now and is meant to be replaced later.
- If you need a paragraph-long comment to justify why the workaround is OK, the code is wrong so fix the code.
- Always use the unslop skill `/unslop` when generating texts as well as in adding jsdocs/tsdocs or just comments.
