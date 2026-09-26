// ==UserScript==
// @name         Kimi Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.5
// @description  Expand Kimi chat content area to full page width
// @author       ZM-BAD
// @match        https://www.kimi.com/*
// @icon         https://statics.moonshot.cn/kimi-web-seo/favicon.ico
// @updateURL    https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/kimi-fullwidth.user.js
// @downloadURL  https://raw.githubusercontent.com/ZM-BAD/kuan-chat/main/kimi-fullwidth.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  function injectStyles() {
    if (document.getElementById('kimi-full-width-styles')) {
      console.log('Kimi Full Width: styles already exist');
      return;
    }

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
                /* Kimi applies box-sizing: content-box with 16px horizontal padding
                   here, so width:100% only fills the content box and the padding
                   overflows (~32px), letting text spill past the right border.
                   border-box includes the padding within the width. */
                box-sizing: border-box !important;
            }

            /* The input's width cap is NOT on .chat-editor (which is already
               width:100%) but on its parent .chat-editor-wrap:
                   .chat-editor-wrap { max-width: var(--chat-input-max-width, 768px) }
               Styling .chat-editor therefore cannot widen anything - the parent
               still clamps it to 768px. Override the cap where it actually
               lives, exactly like .chat-content-list above. Width only. */
            .chat-editor-wrap {
                max-width: 100% !important;
            }

            /* Other parts of the input cluster are NOT children of
               .chat-editor-wrap, so the rule above leaves them behind at 768px.
               Kimi sizes them from this one variable instead:
                   .home-input-options  { max-width: calc(var(--chat-input-max-width) - 40px); margin-top: -36px }
                   .publisher-shortcut  { max-width: calc(var(--chat-input-max-width) - 40px) }
               They are visually joined to the input (the options bar tucks under
               its bottom edge), so widening the input without them tears the
               cluster apart. Override the variable where Kimi defines it - on
               the home layout only, which chat pages don't have. */
            .home-page-layout {
                --chat-input-max-width: 100% !important;
            }

            /* Positioning anchor for the "scroll to bottom" button (.to-bottom). It
               defaults to the same 800px centered column as .chat-content-list, so
               once the message list is widened the button floats off the right
               edge. Stretching this anchor to full width makes the button's
               right:0 re-align with the content's right edge. */
            .bottom-action-container {
                left: 0 !important;
                right: 0 !important;
                width: auto !important;
                max-width: 100% !important;
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
