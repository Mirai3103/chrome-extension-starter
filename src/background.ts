console.log("Background script loaded");

// Lắng nghe message từ content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "CONTENT_LOADED") {
    console.log("Content script loaded in tab:", sender.tab?.id);

    // Gửi message ngược lại content script
    chrome.tabs.sendMessage(sender.tab?.id || 0, {
      type: "BACKGROUND_ACTION",
      data: "Hello from background!",
    });
  }
});
