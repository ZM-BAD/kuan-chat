// ==UserScript==
// @name         Gemini Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.1
// @description  Remove excess whitespace from Gemini chat pages and expand content to full width
// @author       ZM-BAD
// @match        https://gemini.google.com/*
// @icon         https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/gemini-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/gemini-fullwidth.user.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const PADDING = '24px';

  function inject() {
    if (document.getElementById('gemini-fullwidth-style')) return;

    const style = document.createElement('style');
    style.id = 'gemini-fullwidth-style';
    style.textContent = `
      .input-area-container {
        max-width: 100% !important;
        margin-left: 0px !important;
        margin-right: 0px !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }
      .assistant-messages-primary-container {
        width: 100% !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }
      .zero-state-block-container {
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
      .conversation-container {
        max-width: 100% !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }
      user-query {
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
      hallucination-disclaimer {
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }

  function forceLayout() {
    document.querySelectorAll('.input-area-container').forEach(function (el) {
      el.style.setProperty('max-width', '100%', 'important');
      el.style.setProperty('margin-left', '0px', 'important');
      el.style.setProperty('margin-right', '0px', 'important');
      el.style.setProperty('padding-left', PADDING, 'important');
      el.style.setProperty('padding-right', PADDING, 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });
    document
      .querySelectorAll('.assistant-messages-primary-container')
      .forEach(function (el) {
        el.style.setProperty('width', '100%', 'important');
        el.style.setProperty('padding-left', PADDING, 'important');
        el.style.setProperty('padding-right', PADDING, 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
      });
    document
      .querySelectorAll('.zero-state-block-container')
      .forEach(function (el) {
        el.style.setProperty('max-width', '100%', 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
      });
    document.querySelectorAll('.conversation-container').forEach(function (el) {
      el.style.setProperty('max-width', '100%', 'important');
      el.style.setProperty('padding-left', PADDING, 'important');
      el.style.setProperty('padding-right', PADDING, 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });
    document.querySelectorAll('user-query').forEach(function (el) {
      el.style.setProperty('max-width', '100%', 'important');
      el.style.setProperty('box-sizing', 'border-box', 'important');
    });
    document
      .querySelectorAll('hallucination-disclaimer')
      .forEach(function (el) {
        el.style.setProperty('max-width', '100%', 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
      });
  }

  inject();
  forceLayout();

  new MutationObserver(function () {
    inject();
    forceLayout();
  }).observe(document.body, { childList: true, subtree: true });

  console.log('[Gemini Full Width] v1.1 loaded');
})();
