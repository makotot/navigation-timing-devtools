var timing = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  return true;
});

chrome.extension.onConnect.addListener(function (port) {
  chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    port.postMessage(message);
    sendResponse(message);
  });
});
