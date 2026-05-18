// ==UserScript==
// @name         Doubao Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.0
// @description  Remove excess whitespace from Doubao chat pages and expand content to full width
// @author       ZM-BAD
// @match        https://www.doubao.com/*
// @icon         https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/chat/favicon.png
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/doubao-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/doubao-fullwidth.user.js
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
