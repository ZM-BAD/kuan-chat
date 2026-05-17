# kuan-chat 🖥️

[中文说明](./README_zh.md)

Force AI chat interfaces into full-width mode. Reclaim your screen space.

AI conversations are high-density information areas. The default left/right whitespace wastes a significant amount of screen real estate. These Tampermonkey scripts override CSS `max-width` constraints to make the content fill the entire browser width.

## Supported Platforms & Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click the install link for the platform you need:

| Platform | Script | Install | Demo |
| :---: | :---: | :---: | :---: |
| ChatGPT | `chatgpt-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/chatgpt-fullwidth.user.js) | https://github.com/user-attachments/assets/3492a979-0fec-41ab-a997-09de6b422548 |
| DeepSeek | `deepseek-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/deepseek-fullwidth.user.js) | https://github.com/user-attachments/assets/9ed6606b-b84e-4756-a791-2e580e4a3545 |
| Kimi | `kimi-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/kimi-fullwidth.user.js) | https://github.com/user-attachments/assets/2410c290-9c77-4f2e-946d-f2e54e17b10b |
| Qianwen (CN) | `qianwen-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qianwen-fullwidth.user.js) | https://github.com/user-attachments/assets/d33fc558-fda6-4ece-b832-b2c3bf9d76cf |
| Qwen AI (Global) | `qwenai-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qwenai-fullwidth.user.js) | https://github.com/user-attachments/assets/b10cef65-19bb-4233-b0a0-0d3b5e00ae13 |
| Doubao | `doubao-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/doubao-fullwidth.user.js) | https://github.com/user-attachments/assets/6cc9cb4a-425b-468e-a685-6e41497df0c8 |
| Gemini | `gemini-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/gemini-fullwidth.user.js) | https://github.com/user-attachments/assets/3fb800c4-316f-4c3e-a684-a2e0201f4a6a |

Or manually: copy the script content into a new Tampermonkey script.

## Development

```bash
npm install             # Install dependencies
npm run lint            # ESLint check
npm run format          # Prettier formatting
npm run format:check    # Prettier dry-run
npm run check:metadata  # Validate userscript headers
```

Pre-commit hooks (husky + lint-staged) auto-run ESLint and Prettier on commit.

## Compatibility

Verified on Chrome 148 + Tampermonkey 5.5.0.

## License

[MIT](LICENSE)
