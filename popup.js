document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#extract-btn').addEventListener('click', onclick, true)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,'find',displayMatches)
        })
    }
    function displayMatches(matches) {
        const div = document.querySelector('#numbers')
        const error = document.querySelector("#error")
        div.innerHTML = ''
        error.classList = 'alert alert-danger d-none'
        if (matches != undefined) {
            matches.forEach(element => {
                div.innerHTML += '<p style="text-color:red"> ' + element + ' </p>'
            });
        } else {
            const error = document.querySelector("#error")
            error.classList ='alert alert-danger'
        }
   
    }
}, false)