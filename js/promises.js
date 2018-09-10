function wait(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
         resolve();
        }, num);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


let url = "https://api.github.com/repos/brittanyrussell/codeup-web-exercises/events";

fetch(url).then(response => {
    response.json().then(commits => {
        console.log(commits[0]);
    });
});

fetch(url, {headers: {'Authorization': 'bb87a281431739091f6f05a197f6576a093f536e'}});
