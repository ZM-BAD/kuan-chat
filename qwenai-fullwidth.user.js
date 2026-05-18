// ==UserScript==
// @name         Qwen AI Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.0
// @description  Remove excess whitespace from Qwen AI chat pages and expand content to full width
// @author       ZM-BAD
// @match        https://chat.qwen.ai/*
// @icon         https://assets.alicdn.com/g/qwenweb/qwen-chat-fe/0.2.50/favicon.png
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qwenai-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qwenai-fullwidth.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const PADDING = '24px';

  function inject() {
    if (document.getElementById('qwenai-fullwidth-style')) return;

    const style = document.createElement('style');
    style.id = 'qwenai-fullwidth-style';
    style.textContent = `
      .qwen-chat-message {
        max-width: 100% !important;
        margin-left: 0px !important;
        margin-right: 0px !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }
      .message-input-wrapper {
        max-width: 100% !important;
        margin-left: 0px !important;
        margin-right: 0px !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }

  function forceLayout() {
    document.querySelectorAll('.qwen-chat-message').forEach(function (el) {
      el.style.setProperty('max-width', '100%', 'important');
      el.style.setProperty('margin-left', '0px', 'important');
      el.style.setProperty('margin-right', '0px', 'important');
      el.style.setProperty('padding-left', PADDING, 'important');
      el.style.setProperty('padding-right', PADDING, 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });
    document.querySelectorAll('.message-input-wrapper').forEach(function (el) {
      el.style.setProperty('max-width', '100%', 'important');
      el.style.setProperty('margin-left', '0px', 'important');
      el.style.setProperty('margin-right', '0px', 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });
  }

  inject();
  forceLayout();

  new MutationObserver(function () {
    inject();
    forceLayout();
  }).observe(document.body, { childList: true, subtree: true });

  console.log('[Qwen AI Full Width] v1.0 loaded');
})();
