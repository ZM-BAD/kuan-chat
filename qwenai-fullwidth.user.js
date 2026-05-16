// ==UserScript==
// @name         Qwen AI Chat Full Width
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  移除 Qwen AI 国际版对话页面多余留白，让内容区域填满页面宽度
// @author       You
// @match        https://chat.qwen.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qwen.ai
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
