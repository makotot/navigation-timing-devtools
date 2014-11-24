var panelWindow;
var port = chrome.extension.connect({
  name: 'message'
});

chrome.devtools.panels.create('navigation timing devtools', '', '../panel.html', function (panel) {

  port.onMessage.addListener(function (msg) {
  });

  panel.onShown.addListener(function setPanel (panelW) {
    panel.onShown.removeListener(setPanel);
    panelWindow = panelW;

    panelWindow.writeContent('devtools');
  });
});
