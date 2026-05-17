// ==UserScript==
// @name         Qianwen Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.0
// @description  Remove excess whitespace from Qianwen chat pages and expand content to full width
// @author       ZM-BAD
// @match        https://www.qianwen.com/*
// @icon         https://img.alicdn.com/imgextra/i4/O1CN01uar8u91DHWktnF2fl_!!6000000000191-2-tps-110-110.png
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qianwen-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/qianwen-fullwidth.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const PADDING = '24px';

  function inject() {
    if (document.getElementById('qwen-fullwidth-style')) return;

    const style = document.createElement('style');
    style.id = 'qwen-fullwidth-style';
    style.textContent = `
      #pc-center-wrapper {
        max-width: 100% !important;
        width: 100% !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }
      [class*="inputMotionCarrier"] {
        max-width: 100% !important;
        width: 100% !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }
      [class*="inputOutWrap"] {
        max-width: 100% !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }

  function forceLayout() {
    const center = document.getElementById('pc-center-wrapper');
    if (center) {
      center.style.setProperty('max-width', '100%', 'important');
      center.style.setProperty('width', '100%', 'important');
      center.style.setProperty('padding-left', PADDING, 'important');
      center.style.setProperty('padding-right', PADDING, 'important');
      center.style.setProperty('box-sizing', 'border-box', 'important');
    }

    document
      .querySelectorAll('[class*="inputMotionCarrier"]')
      .forEach(function (el) {
        el.style.setProperty('max-width', '100%', 'important');
        el.style.setProperty('width', '100%', 'important');
        el.style.setProperty('padding-left', PADDING, 'important');
        el.style.setProperty('padding-right', PADDING, 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
      });

    document.querySelectorAll('[class*="inputOutWrap"]').forEach(function (el) {
      el.style.setProperty('max-width', '100%', 'important');
      el.style.setProperty('width', '100%', 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });
  }

  inject();
  forceLayout();

  new MutationObserver(function () {
    inject();
    forceLayout();
  }).observe(document.body, { childList: true, subtree: true });

  console.log('[Qianwen Full Width] v1.0 loaded');
})();
