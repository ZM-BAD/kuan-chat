# kuan-chat 🖥️

[English](./README.md)

强制 AI 对话界面全宽显示，夺回你的屏幕空间。

AI 对话属于高密度信息区域，默认的左右留白会浪费大量屏幕空间。这些 Tampermonkey 脚本通过覆盖 CSS `max-width` 限制，让内容区撑满浏览器。

## 支持平台 & 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击对应平台的一键安装链接：

| 平台 | 脚本文件 | 安装 |
| :---: | :---: | :---: |
| ChatGPT | `chatgpt-fullwidth.user.js` | [安装](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/chatgpt-fullwidth.user.js) |
| DeepSeek | `deepseek-fullwidth.user.js` | [安装](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/deepseek-fullwidth.user.js) |
| Kimi | `kimi-fullwidth.user.js` | [安装](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/kimi-fullwidth.user.js) |
| 千问（国内版） | `qianwen-fullwidth.user.js` | [安装](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qianwen-fullwidth.user.js) |
| Qwen AI（国际版） | `qwenai-fullwidth.user.js` | [安装](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qwenai-fullwidth.user.js) |
| 豆包 | `doubao-fullwidth.user.js` | [安装](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/doubao-fullwidth.user.js) |
| Gemini | `gemini-fullwidth.user.js` | [安装](https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/gemini-fullwidth.user.js) |

## 效果展示

### ChatGPT

https://github.com/user-attachments/assets/3492a979-0fec-41ab-a997-09de6b422548

### DeepSeek

https://github.com/user-attachments/assets/9ed6606b-b84e-4756-a791-2e580e4a3545

### Kimi

https://github.com/user-attachments/assets/2410c290-9c77-4f2e-946d-f2e54e17b10b

### 千问（国内版）

https://github.com/user-attachments/assets/d33fc558-fda6-4ece-b832-b2c3bf9d76cf

### Qwen AI（国际版）

https://github.com/user-attachments/assets/b10cef65-19bb-4233-b0a0-0d3b5e00ae13

### 豆包

https://github.com/user-attachments/assets/6cc9cb4a-425b-468e-a685-6e41497df0c8

### Gemini

https://github.com/user-attachments/assets/3fb800c4-316f-4c3e-a684-a2e0201f4a6a

或手动安装：复制脚本文件内容到 Tampermonkey 新建脚本中。

## 开发

```bash
npm install             # 安装依赖
npm run lint            # ESLint 检查
npm run format          # Prettier 格式化
npm run format:check    # Prettier 格式检查
npm run check:metadata  # 校验 userscript 元数据
```

Pre-commit hook（husky + lint-staged）会在提交时自动运行 ESLint 和 Prettier。

## 兼容性

已在 Chrome 148 + Tampermonkey 5.5.0 上验证通过。

## 许可证

[MIT](LICENSE)
