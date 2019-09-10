function wait(time) {
    return new Promise((resolve, reject) => {
        if (typeof time === "number") {
            setTimeout(() => {
                resolve();
            }, time);
        } else {
            reject();
        }
    })
}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

fetch("https://swapi.co/api/people/1/").then((response) => {
    return response.json().then((skywalker) => {
        console.log(skywalker);
    })
});

let lastPush;
let url;

function getGit(username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization':`token ${githubKey}`}}).then((response) => {
        return response.json().then((userStuff) => {
            lastPush = userStuff.filter(function (userStuff) {
                return (userStuff.type === "PushEvent" && userStuff.actor.login === username);
            })
        }).then(function () {
            url = lastPush[0].payload.commits[0].url;
            lastCommitDate(url);
        })
    })
};

function lastCommitDate(commitUrl) {
    fetch(commitUrl).then((response) => {
        return response.json().then(imClose => {
            return (imClose.commit.author.date.substr(5, 2) + "/" + imClose.commit.author.date.substr(8, 2) + "/" + imClose.commit.author.date.substr(0, 4));
        })
    })
}

getGit("BranceA");