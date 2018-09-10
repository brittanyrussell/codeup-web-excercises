const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



console.log(users.filter(user => user.languages.length >= 3));

console.log(users.map(user => user.email));

const totalExperience = users.reduce((accumulation, user) => {
    return accumulation + user.yearsOfExperience;
}, 0);

console.log(totalExperience);
console.log(totalExperience / users.length);


console.log(users.reduce((longest, user) => {
    if (user.email.length > longest.length) return user.email;
    else return longest;
    }, ""
));


console.log(users.reduce((message, user, i) => {
    if (i < users.length-1)
    return `${message} ${user.name},`;
    else return `${message} and ${user.name}.`;
}, "Your instructors are: "));






