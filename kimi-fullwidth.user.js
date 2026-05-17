// ==UserScript==
// @name         Kimi Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.3
// @description  Expand Kimi chat content area to full page width
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
    // Check if styles already injected
    if (document.getElementById('kimi-full-width-styles')) {
      console.log('Kimi Full Width: styles already exist');
      return;
    }

    // Check if head exists
    if (!document.head) {
      console.log('Kimi Full Width: head not ready, retrying...');
      setTimeout(injectStyles, 100);
      return;
    }

    const style = document.createElement('style');
    style.id = 'kimi-full-width-styles';
    style.textContent = `
            /* Expand chat content list to full container width */
            .chat-content-list {
                max-width: 100% !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                width: 100% !important;
                padding-left: 24px !important;
                padding-right: 24px !important;
            }

            /* Expand input area to full container width */
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

  // Ensure injection through multiple strategies
  // 1. Immediate attempt
  injectStyles();

  // 2. After DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(injectStyles, 100);
  });

  // 3. After page fully loaded
  window.addEventListener('load', function () {
    setTimeout(injectStyles, 500);
  });

  // 4. Delayed retry for SPA routing
  setTimeout(injectStyles, 1000);
  setTimeout(injectStyles, 2000);
})();
