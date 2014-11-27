//function getCurrentContent (cb) {
//  chrome.runtime.onMessage.addListener(function (msg) {
//    cb(msg);
//  });
//}

//chrome.runtime.onConnect.addListener(function (port) {
//  port.onMessage.addListener(function (request) {
//  });
//  port.postMessage('from bg');
//});



var connections = {};

chrome.runtime.onConnect.addListener(function (port) {
  var extensionListener = function (msg, sender, sendResponse) {
    console.log(msg, sender)
    if (msg.name === 'init') {
      connections[msg.tabId] = port;
      return;
    }
  };

  port.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(function (port) {
    port.onMessage.removeListener(extensionListener);

    var tabs = Object.keys(connections);

    for (var i = 0, max = tabs.length; i < max; i++) {
      if (connections[tabs[i]] === port) {
        delete connections[tabs[i]];
        break;
      }
    }
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender)
  if (sender.tab) {
    var tabId = sender.tab.id;

    if (tabId in connections) {
      connections[tabId].postMessage(request);
    } else {
      console.log('not exist in connections list');
    }
  } else {
    console.log('sender tab not defined')
  }

  return true;
});
