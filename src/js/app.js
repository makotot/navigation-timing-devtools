document.querySelector('#js-trigger').addEventListener('click', function () {
  chrome.runtime.sendMessage({
    type: 'init',
    data: {
      prop: 'app'
    }
  });
});
