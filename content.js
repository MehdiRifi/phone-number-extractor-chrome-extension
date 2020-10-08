var result;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request) {
    // extract phone numbers
    case "extract":
      let re = /\+(?:\(?\d{2,4}\)?)?\s?\(?0?\)?(?:\s?-?\d{1,3}){4}/gim;
      result = document.documentElement.innerText.match(re);
      sendResponse(result);
      break;
    case "export":
      sendResponse(result);
      break;
  }
});
