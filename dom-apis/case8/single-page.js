var repoNameEl = document.querySelector('#repo-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');

alert("hello")


function displayIssues(data){
if(data.length === 0){
    issueContainerEl.textContent =  "this repo has no issues"
    return;
}
for (var i =0 ; i < data.length; i ++){
    var issueEl = document.createElement('a');
    issueEl.classList="flex-row list-item justify-space-between align-center";
    issueEl.setAttribute("href", data[i].html_url);
    issueEl.setAttribute('target', '_blank');

    var titleEl = document.createElement("span");
    titleEl.textContent = data[i].title;
    issueEl.append(titleEl);

    var typeEl = document.createElement("span");
    if (data[i].pull_request) {
        typeEl.textContent = '(Pull request)';
      } else {
        typeEl.textContent = '(Issue)';
}
issueEl.appendChild(typeEl);
issueContainerEl.appendChild(issueEl);

}
}




function getIssues(repo){
    var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';
  fetch(apiUrl)
  .then(function(res){
      if(res.ok){
          res.json().then(function(data){
              displayIssues(data)
          })
      }
      else{
          document.location.replace = "./index.html"
      }
  })
}




function getRepoName(){
    var queryString = document.location.search;
    console.log(queryString)  //?repo=sharonealex/algorithms-js
    var repoName = queryString.split("=")[1];
    if(repoName){
        repoNameEl.textContent = repoName;
        getIssues(repoName);
    }
}



getRepoName();