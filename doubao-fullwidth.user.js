// ==UserScript==
// @name         Doubao Chat Full Width
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  移除豆包对话页面多余留白，让内容区域填满页面宽度
// @author       You
// @match        https://www.doubao.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=doubao.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  function inject() {
    if (document.getElementById('doubao-fullwidth-style')) return;

    const style = document.createElement('style');
    style.id = 'doubao-fullwidth-style';
    style.textContent = `
      :root {
        --content-max-width: 100% !important;
      }
      .max-w-\\(--content-max-width\\),
      .max-w-\\[var\\(--content-max-width\\)\\] {
        max-width: 100% !important;
        padding-left: 24px !important;
        padding-right: 24px !important;
        box-sizing: border-box !important;
      }
      [class*="suggest-message-list-wrapper"] {
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
    `;
    (document.head || document.documentElement).appendChild(style);
  }

  inject();

  new MutationObserver(function () {
    inject();
  }).observe(document.documentElement, { childList: true, subtree: true });

  console.log('[Doubao Full Width] v1.0 loaded');
})();
