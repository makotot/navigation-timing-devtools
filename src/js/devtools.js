var bgConnect = chrome.runtime.connect({
  name: 'panel'
});

bgConnect.postMessage({
  name: 'init',
  tabId: chrome.devtools.inspectedWindow.tabId
});

var msgList = [];

bgConnect.onMessage.addListener(function (msg) {
  msgList.push(msg);
//  document.querySelector('#js-msg').innerHTML = msg;
});


chrome.devtools.panels.create('navigation timing devtools', null, '../panel.html', function (panel) {
  panel.onShown.addListener(function setPanel (panelWin) {
    panel.onShown.removeListener(setPanel);

    var msg;

    while (msg = msgList.shift()) {
      panelWin.initPanel(msg);
    }
  });
});
