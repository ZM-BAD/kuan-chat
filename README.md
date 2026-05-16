# kuan-chat

强制 AI 对话界面全宽显示 / Force AI chats into full-width mode. Reclaim your screen space.

## 为什么

AI 对话属于高密度信息区域，默认的左右留白会浪费大量屏幕空间。这些 Tampermonkey 脚本通过覆盖 CSS `max-width` 限制，让内容区撑满浏览器。

## 支持平台

| 平台 | 脚本 | 域名 |
|------|------|------|
| ChatGPT | `chatgpt-fullwidth.user.js` | `chatgpt.com` |
| DeepSeek | `deepseek-fullwidth.user.js` | `chat.deepseek.com` |
| Kimi | `kimi-fullwidth.user.js` | `kimi.com` |
| 千问（国内版） | `qianwen-fullwidth.user.js` | `qianwen.com` |
| Qwen AI（国际版） | `qwenai-fullwidth.user.js` | `chat.qwen.ai` |
| 豆包 | `doubao-fullwidth.user.js` | `doubao.com` |
| Gemini | `gemini-fullwidth.user.js` | `gemini.google.com` |

## 效果对比

<!-- TODO: 添加各平台的效果对比截图 -->

**Before:**
<!-- screenshot placeholder -->

**After:**
<!-- screenshot placeholder -->

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击下方对应平台的安装链接（自动跳转 Tampermonkey 安装页面）：

<!-- TODO: 添加各脚本的直接安装链接，格式：https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/{filename} -->

或手动安装：复制脚本文件内容到 Tampermonkey 新建脚本中。

## 开发

```bash
npm install        # 安装依赖
npm run lint       # ESLint 检查
npm run format     # Prettier 格式化
npm run check:metadata  # 校验 userscript 元数据完整性
```

Pre-commit hook 会在提交时自动运行 ESLint 和 Prettier。

## License

[MIT](LICENSE)
