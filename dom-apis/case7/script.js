var tableBody = document.querySelector("#repo-table");
var fetchButton = document.querySelector("#fetch-button");


function getApis(){
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
    window.fetch(requestUrl)
    .then(function(data){
        return data.json();
    })
    .then(function(resp){
        for(var i = 0; i < resp.length; i ++){
            var tableRowEl = document.createElement("tr");
            var tablecolEl = document.createElement("td");
            var link = document.createElement("a");
            link.textContent = resp[i].html_url;
            link.href = resp[i].html_url;
            tablecolEl.appendChild(link);
            tableRowEl.appendChild(tablecolEl);
            tableBody.appendChild(tableRowEl);
        }
    })
}

fetchButton.addEventListener("click", getApis)