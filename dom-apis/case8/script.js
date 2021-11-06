var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var reposContainerEl = document.querySelector("#repo-container");
var nameSearchButtonEl = document.querySelector("#userSearch");
var topicSearchButtonEl = document.querySelector("#topicButtons")



function displayRepos(data, searchData) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            var repoName = data[i].full_name;
            var repoLink = document.createElement("a");
            repoLink.textContent = repoName;
            repoLink.setAttribute("href", data[i].html_url);
            var numIssues = data["open_issues_count"];
            var spanEl;
            if (numIssues) {
                spanEl = document.createElement("span");
                spanEl.innerHTML = "<i class='fas fa-times status-icon icon-danger'></i>" + numIssues + 'issue(s)'
            }
            var listEl = document.createElement("li");
            listEl.appendChild(repoLink);
            //  listEl.appendChild(spanEl)
            reposContainerEl.appendChild(listEl);

        }
    } else {
        reposContainerEl.textContent = "no repositories found"
    }
}

function getUserRepos(user) {
    var requestUrl = 'https://api.github.com/users/' + user + '/repos';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayRepos(data, user)
        })


}


function formSubmitHandler() {
    event.preventDefault();
    var username = nameInputEl.value.trim();
    if (username) {
        getUserRepos(username);
        nameInputEl.value = '';
        reposContainerEl.textContent = '';
    } else {
        alert("enter valid user name")
    }
}

function getFeaturedRepos(language) {
    var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';
    fetch(apiUrl)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            displayRepos(data.items, language)
        })

}

function searchTopicHandler() {
    var topic = event.target.getAttribute('data-language');
    if (topic) {
        getFeaturedRepos(topic);

        reposContainerEl.textContent = '';
    }
}

userFormEl.addEventListener("submit", formSubmitHandler);
topicSearchButtonEl.addEventListener("click", searchTopicHandler);


/**
 * Async journey
 * user click ---> formSubmitHandler() ---> getUserRepos(username) ---> displayRepos(array, searchTerm);
 * button click ---> buttonTopicHanlder()  ---> getSearchTopic(language) ---> displayRepose(array, searchTerm);
 */