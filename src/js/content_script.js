window.addEventListener('load', function () {
  chrome.runtime.sendMessage({
    type: 'init',
    data: {
      prop: 'value'
    }
  });
});
