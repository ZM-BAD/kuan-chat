// ==UserScript==
// @name         Gemini Chat Full Width
// @namespace    https://github.com/ZM-BAD/kuan-chat
// @version      1.2
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

  function injectStyles() {
    if (document.getElementById('gemini-fullwidth-style')) return;

    if (!document.head) {
      setTimeout(injectStyles, 100);
      return;
    }

    const style = document.createElement('style');
    style.id = 'gemini-fullwidth-style';
    style.textContent = `
      /* Expand the conversation column. Gemini's current layout already lets
         .conversation-container grow, but this keeps older layouts working. */
      .conversation-container {
        max-width: 100% !important;
        width: 100% !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }

      /* This is the rule that actually keeps answers narrow. Every direct
         child of the answer markdown (paragraphs, headings, lists, tables...)
         is capped and centered with:
           .enable-extended-and-xl-grid & > :not(#_) {
             max-width: 708px; margin-inline: auto;
           }
         Widening .conversation-container alone does nothing because the cap
         lives one level lower, on the markdown blocks themselves. */
      .markdown > * {
        max-width: none !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      /* Assistant header, footer and action rows use the same 708px centered
         cap as the markdown blocks. */
      .response-container-header,
      .response-container-footer,
      .response-footer,
      thinking-overlay,
      message-actions,
      model-response-disclaimers {
        max-width: none !important;
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      /* User message row: keep the bubble itself right-aligned, but let the
         row span the full content width. */
      user-query {
        max-width: 100% !important;
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      /* Tables are centered a second time with padding-inline on .table-content
         and .table-footer - remove that inset so the table can use the width. */
      .table-block .table-content,
      .table-block .table-footer {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      /* Input box */
      .input-area-container {
        max-width: 100% !important;
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: ${PADDING} !important;
        padding-right: ${PADDING} !important;
        box-sizing: border-box !important;
      }

      /* New-chat / zero state */
      .zero-state-container {
        max-width: 100% !important;
      }
    `;
    document.head.appendChild(style);
  }

  injectStyles();

  // Gemini is an SPA and may render the stylesheet host late; retry a few
  // times like the other scripts in this repo.
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(injectStyles, 100);
  });
  window.addEventListener('load', function () {
    setTimeout(injectStyles, 500);
  });
  setTimeout(injectStyles, 1000);
  setTimeout(injectStyles, 2000);
})();
