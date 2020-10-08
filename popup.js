document.addEventListener(
  "DOMContentLoaded",
  function () {
    //extract numbers
    document
      .querySelector("#extract-btn")
      .addEventListener("click", onclick, true);
    function onclick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "extract", displayMatches);
      });
    }
    function displayMatches(matches, msg) {
      const div = document.querySelector("#numbers");
      if (matches != undefined) {
          founded = matches;
         

        div.innerHTML +=
          '<span class="badge badge-pill badge-primary"> Found: ' +
          matches.length +
          "</span>"
        matches.forEach((element) => {
          div.innerHTML += '<p style="text-color:red"> ' + element + " </p>";
        });
      } else {
        div.innerHTML = "<h4>Found: 0 </h4>";
      }
    }
    //export founded
    document.querySelector("#export-btn").addEventListener(
      "click",
      function () {
        chrome.tabs.query({ currentWindow: true, active: true }, function (
          tabs
        ) {
          chrome.tabs.sendMessage(tabs[0].id, "export", exportCsv);
        });
      },
      true
    );
    function exportCsv(matches) {
      // create dom element
      var a = document.createElement("a");
      let content = "";
      // construct the file content
      matches.forEach((item) => {
        content += item + "\r\n";
      });
      // create blob object
      var file = new Blob([content], {
        type: "data:text/csv;charset=utf-8",
      });
      // download file
      a.href = URL.createObjectURL(file);
      a.download = "extracted.csv";
      a.click();
    }
  },
  false
);
