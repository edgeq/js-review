/** 
 * 
 * PROMISES - AN ALTERNATIVE TO CALLBACKS
 * 
 * return new Promise(function(resolve, reject){})
 *  //resolve: what to do when we're done doing
 *  //reject: error if something goes wrong
 * 
 */

const posts = [{
    "title": "Post One",
    "id": 392,
    "joke": "After returning from World War 2 unscrathed, Bob Dole was congratulated by Chuck Norris with a handshake. The rest is history.",
    "categories": []
}, {
    "title": "Post Two",
    "id": 467,
    "joke": "Chuck Norris can delete the Recycling Bin.",
    "categories": [
        "nerdy"
    ]
}, {
    "title": "Post Three",
    "id": 28,
    "joke": "Chuck Norris is not hung like a horse. Horses are hung like Chuck Norris.",
    "categories": []
}, {
    "title": "Post Four",
    "id": 473,
    "joke": "Chuck Norris can overflow your stack just by looking at it.",
    "categories": [
        "nerdy"
    ]
}, {
    "title": "Post Five",
    "id": 232,
    "joke": "Chuck Norris uses a night light. Not because Chuck Norris is afraid of the dark, but the dark is afraid of Chuck Norris.",
    "categories": []
}];


function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            let err;
            if (!err) {
                err = false;
                resolve();
            } else {
                err = true;
                reject('Error: Something went wrong');
            }
        }, 2000);

    })
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
// createPost takes in an object argument, and someOtherFunction - in this case, getPosts.
createPost({
        title: 'A promise-based post',
        body: 'This post is created using createPost, then getPosts is called after the scope resolves. If there is an error, .catch()logs an error '
    })
    .then(getPosts)
    .catch(function(err) {
        console.log(err);

    });