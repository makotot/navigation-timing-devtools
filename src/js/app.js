//function cbFunc (content) {
//  document.querySelector('#js-msg').innerHTML = content.url;
//}

//chrome.runtime.getBackgrundPage(function (bg) {
//  bg.getCurrentContent(cbFunc);
//});

//cbFunc({url: 'http://github.com'});

//var bgConnect = chrome.runtime.connect({
//  name: 'panel'
//});
//
////bgConnect.onMessage.addListener(function (msg) {
////  cbFunc({url: msg});
////});
//
//bgConnect.postMessage({
//  name: 'init',
//  tabId: chrome.devtools.inspectedWindow.tabId
//});
