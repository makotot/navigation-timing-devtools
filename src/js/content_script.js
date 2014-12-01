console.log('content script');
chrome.runtime.sendMessage({
  url: window.location.href,
  timing: window.performance.timing,
  hoge: 'hoge'
}, function (res) {
  console.log(res);
});

chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function () {
  });
  port.postMessage(window.location.href);
});
