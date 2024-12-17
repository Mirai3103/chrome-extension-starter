// src/content.ts
/// <reference types="chrome"/>
document.addEventListener("DOMContentLoaded", () => {
  console.log("Popup loaded");

  // Thêm event listener cho button
  const button = document.getElementById("actionButton");
  button?.addEventListener("click", () => {
    // Gửi message tới background script
    chrome.runtime.sendMessage({
      type: "POPUP_ACTION",
      data: "Action from popup",
    });
  });
});
