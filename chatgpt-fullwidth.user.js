// ==UserScript==
// @name         ChatGPT Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.0
// @description  Remove excess whitespace from ChatGPT chat pages and expand content to full width
// @author       ZM-BAD
// @match        https://chatgpt.com/*
// @icon         https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/chatgpt-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/chatgpt-fullwidth.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const PADDING = '24px';

  function inject() {
    if (document.getElementById('chatgpt-fullwidth-style')) return;

    const style = document.createElement('style');
    style.id = 'chatgpt-fullwidth-style';
    style.textContent = `
      :root {
        --thread-content-max-width: 100% !important;
      }
      .max-w-\\(--thread-content-max-width\\) {
        max-width: 100% !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }
    `;
    (document.head || document.documentElement).appendChild(style);
  }

  function forceLayout() {
    document
      .querySelectorAll('[class*="max-w-(--thread-content-max-width)"]')
      .forEach(function (el) {
        el.style.setProperty('max-width', '100%', 'important');
        el.style.setProperty('padding-left', PADDING, 'important');
        el.style.setProperty('padding-right', PADDING, 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
      });
  }

  inject();

  if (document.body) {
    forceLayout();
  }

  new MutationObserver(function () {
    inject();
    forceLayout();
  }).observe(document.documentElement, { childList: true, subtree: true });

  console.log('[ChatGPT Full Width] v1.0 loaded');
})();
