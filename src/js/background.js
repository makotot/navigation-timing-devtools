chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
  switch (req.type) {
    case 'init':
      console.log(req);
    break;
  }

  return true;
});
