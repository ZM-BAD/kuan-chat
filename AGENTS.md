# kuan-chat

Tampermonkey userscripts that force AI chat interfaces into full-width mode by overriding CSS `max-width` constraints.

## Project Structure

```
*.user.js                  # 7 userscripts, one per platform
scripts/check-metadata.mjs  # Validates userscript headers
eslint.config.js            # ESLint config (uses eslint-plugin-userscripts)
.prettierrc                 # Prettier config
```

## Commands

```bash
npm run lint            # ESLint check
npm run format          # Prettier formatting
npm run format:check    # Prettier dry-run
npm run check:metadata  # Validate userscript headers
```

Pre-commit hooks (husky + lint-staged) auto-run ESLint and Prettier on commit.

## Adding a New Platform

1. Copy an existing `*.user.js` file and rename it (e.g. `claude-fullwidth.user.js`)
2. Update the userscript metadata header: `@name`, `@description`, `@match`, `@namespace`
3. Adjust the CSS selectors inside the script to target the new platform's DOM structure
4. Upload a demo video via GitHub web editor (drag-drop) to get a `user-attachments` URL, then update both `README.md` and `README_zh.md`
5. Run `npm run check:metadata` to validate the header

## Conventions

- One userscript file per platform, named `<platform>-fullwidth.user.js`
- All scripts follow the same pattern: inject a `<style>` element with `max-width: none !important` and related overrides
- Metadata headers must include: `@name`, `@namespace`, `@version`, `@description`, `@match`, `@grant`
- No `@grant` special permissions needed (scripts only inject CSS)
- Commit messages follow conventional commits format

## CI

GitHub Actions runs lint + format check + metadata validation on push/PR.

## Compatibility

Verified on Chrome 148 + Tampermonkey 5.5.0.
