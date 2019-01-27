const http = new easyHTTP;

// GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, res) {
//     if (err) {
//         console.log(err);

//     }
//     console.log(res);

// });

// GET SINGLE POST
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//     if (err) {
//         console.log(err);

//     }
//     console.table(post);

// });

//CREATE DATA
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};
//url, data, and callback
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }

// });
//UPDATE POST
// http.put('https://jsonplaceholder.typicode.com/posts/36', data, function(err, post) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log(post);

//     }
// })

//DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if (err) {
        console.log(err);

    }
    console.log(response);

});