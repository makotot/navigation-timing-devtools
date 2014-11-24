var background = chrome.extension.getBackgroundPage();
console.log(background.timing);

function writeContent (msg) {
  document.querySelector('#js-msg').innerHTML = msg;
}

(function () {
  document.querySelector('#js-trigger').addEventListener('click', function () {
    chrome.extension.sendMessage({
      content: 'foooo'
    });
  });

  window.addEventListener('load', function () {
    chrome.extension.sendMessage({
      content: 'load'
    });
  });

})();

