chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {
    let re = /\+\(?212\)?\s?[0]?[6|5]\s?[0-9{1,3}\-?|\s?]+/img
    var matches=document.documentElement.innerText.match(re)
    console.log(matches)
    sendResponse(matches)
})