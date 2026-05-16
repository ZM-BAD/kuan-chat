// ==UserScript==
// @name         Kimi Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.3
// @description  让 Kimi 聊天内容区域填满整个页面宽度
// @author       ZM-BAD
// @match        https://www.kimi.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kimi.com
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/kimi-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/kimi-fullwidth.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  function injectStyles() {
    // 检查是否已经注入过
    if (document.getElementById('kimi-full-width-styles')) {
      console.log('Kimi Full Width: styles already exist');
      return;
    }

    // 检查 head 是否存在
    if (!document.head) {
      console.log('Kimi Full Width: head not ready, retrying...');
      setTimeout(injectStyles, 100);
      return;
    }

    const style = document.createElement('style');
    style.id = 'kimi-full-width-styles';
    style.textContent = `
            /* 让聊天内容列表填满容器宽度 */
            .chat-content-list {
                max-width: 100% !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                width: 100% !important;
                padding-left: 24px !important;
                padding-right: 24px !important;
            }

            /* 让输入框区域填满容器宽度 */
            .chat-editor {
                max-width: 100% !important;
                width: 100% !important;
            }

            .chat-input {
                max-width: 100% !important;
                width: 100% !important;
            }
        `;
    document.head.appendChild(style);
    console.log('Kimi Full Width: styles injected successfully');
  }

  // 多种方式确保注入
  // 1. 立即尝试
  injectStyles();

  // 2. DOMContentLoaded 后尝试
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(injectStyles, 100);
  });

  // 3. 页面完全加载后尝试
  window.addEventListener('load', function () {
    setTimeout(injectStyles, 500);
  });

  // 4. 延时后再试一次（处理 SPA 路由）
  setTimeout(injectStyles, 1000);
  setTimeout(injectStyles, 2000);
})();
