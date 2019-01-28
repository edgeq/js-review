const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

btn1.addEventListener('click', getText);
btn2.addEventListener('click', getJson);
btn3.addEventListener('click', getApi);

function getText() {
    fetch('text.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            // console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);

        });
}

function getJson() {
    fetch('posts.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.table(data);
            let output = '';
            data.forEach(function(data) {
                output += `<li>${data.title}: ${data.body}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}

function getApi() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.table(data);
            let output = '';
            data.forEach(function(thumb) {
                output += `<img src="${thumb.thumbnailUrl}" alt="${thumb.title}">`;
            });
            document.getElementById('output').innerHTML = output;

        });
}