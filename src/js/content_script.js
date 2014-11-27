chrome.runtime.sendMessage({
  url: window.location.href
});

chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function () {
  });
  port.postMessage('from content');
});
