// src/content.ts
/// <reference types="chrome"/>
console.log("Content script loaded");

// Gửi message tới background script
chrome.runtime.sendMessage({ type: "CONTENT_LOADED" });

// Lắng nghe message từ background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "BACKGROUND_ACTION") {
    console.log("Received message from background:", message);
    sendResponse({ success: true });
  }
});
