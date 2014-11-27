var bgConnect = chrome.runtime.connect({
  name: 'panel'
});

bgConnect.postMessage({
  name: 'init',
  tabId: chrome.devtools.inspectedWindow.tabId
});

bgConnect.onMessage.addListener(function (msg) {
  document.querySelector('#js-msg').innerHTML = msg;
});


chrome.devtools.panels.create('navigation timing devtools', null, '../panel.html', function (panel) {
  panel.onShown.addListener(function setPanel (panelW) {
    panel.onShown.removeListener(setPanel);
  });
});
