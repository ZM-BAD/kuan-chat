// ==UserScript==
// @name         DeepSeek Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      5.0
// @description  Remove excess whitespace from DeepSeek chat pages with proper margins
// @author       ZM-BAD
// @match        https://chat.deepseek.com/*
// @icon         https://fe-static.deepseek.com/chat/favicon.svg
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/deepseek-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/deepseek-fullwidth.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const PADDING_LEFT = '24px';
  const PADDING_RIGHT = '56px';

  function inject() {
    if (document.getElementById('ds-fullwidth-style')) return;

    const style = document.createElement('style');
    style.id = 'ds-fullwidth-style';
    style.textContent = `
      :root {
        --message-list-max-width: 100% !important;
      }
      .ds-virtual-list-items {
        padding-left: ${PADDING_LEFT} !important;
        padding-right: ${PADDING_RIGHT} !important;
        margin-left: 0px !important;
        margin-right: 0px !important;
        box-sizing: border-box !important;
      }
      .ds-message {
        width: 100% !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }

  function forceLayout() {
    document.querySelectorAll('.ds-virtual-list-items').forEach(function (el) {
      el.style.setProperty('padding-left', PADDING_LEFT, 'important');
      el.style.setProperty('padding-right', PADDING_RIGHT, 'important');
      el.style.setProperty('margin-left', '0px', 'important');
      el.style.setProperty('margin-right', '0px', 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });
    document.querySelectorAll('.ds-message').forEach(function (el) {
      el.style.setProperty('width', '100%', 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });

    // Widen input area: find sticky container inside ds-virtual-list
    document.querySelectorAll('.ds-virtual-list').forEach(function (vlist) {
      Array.from(vlist.children).forEach(function (child) {
        var s = getComputedStyle(child);
        if (s.position === 'sticky' && child.querySelector('textarea')) {
          child.style.setProperty('width', '100%', 'important');
          child.style.setProperty('max-width', '100%', 'important');
          child.style.setProperty('margin-left', '0px', 'important');
          child.style.setProperty('margin-right', '0px', 'important');
          child.style.setProperty('padding-left', PADDING_LEFT, 'important');
          child.style.setProperty('padding-right', PADDING_RIGHT, 'important');
          child.style.setProperty('box-sizing', 'border-box', 'important');
        }
      });
    });
  }

  inject();
  forceLayout();

  new MutationObserver(function () {
    inject();
    forceLayout();
  }).observe(document.body, { childList: true, subtree: true });

  console.log('[DeepSeek Full Width] v5.0 loaded');
})();
