var result;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request) {
    // extract phone numbers
    case "extract":
      let re = /\+\d{1,4}\s?\(?\d{1,2}\)?(?:\s?\-?\d{1,3}){3,5}/gim;
      result = document.documentElement.innerText.match(re);
      sendResponse(result);
      break;
    case "export":
      sendResponse(result);
      break;
  }
});
