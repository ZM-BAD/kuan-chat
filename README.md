# kuan-chat 🖥️

[中文说明](./README_zh.md)

Force AI chat interfaces into full-width mode. Reclaim your screen space.

AI conversations are high-density information areas. The default left/right whitespace wastes a significant amount of screen real estate. These Tampermonkey scripts override CSS `max-width` constraints to make the content fill the entire browser width.

## Demo

### DeepSeek

![DeepSeek](screenshots/deepseek.webp)

### Gemini

![Gemini](screenshots/gemini.webp)

## Supported Platforms & Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click the install link for the platform you need:

| Platform | Script | Install |
| :---: | :---: | :---: |
| ChatGPT<br>`chatgpt.com` | `chatgpt-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/chatgpt-fullwidth.user.js) |
| DeepSeek<br>`chat.deepseek.com` | `deepseek-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/deepseek-fullwidth.user.js) |
| Kimi<br>`kimi.com` | `kimi-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/kimi-fullwidth.user.js) |
| Qianwen (CN)<br>`qianwen.com` | `qianwen-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qianwen-fullwidth.user.js) |
| Qwen AI (Global)<br>`chat.qwen.ai` | `qwenai-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qwenai-fullwidth.user.js) |
| Doubao<br>`doubao.com` | `doubao-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/doubao-fullwidth.user.js) |
| Gemini<br>`gemini.google.com` | `gemini-fullwidth.user.js` | [Install](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/gemini-fullwidth.user.js) |

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
