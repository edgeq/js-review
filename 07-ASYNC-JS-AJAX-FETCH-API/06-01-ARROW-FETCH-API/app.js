const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

btn1.addEventListener('click', getText);
btn2.addEventListener('click', getJson);
btn3.addEventListener('click', getApi);

function getText() {
    fetch('text.txt')
        .then(res => res.text())
        .then(data => document.getElementById('output').innerHTML = data)
        .catch(err => console.log(err));
}

function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.table(data);
            let output = '';
            data.forEach(post => {
                output += `<li>${post.title}: ${post.body}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

function getApi() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
        .then(res => res.json())
        .then(data => {
            console.table(data);
            let output = '';
            data.forEach(thumb => {
                output += `<img src="${thumb.thumbnailUrl}" alt="${thumb.title}">`;
            });
            document.getElementById('output').innerHTML = output;

        });
}