/** 
 * CALLBACKS - Functions that are passed in as a parameter to another function and runs inside the invoked function //#endregion
 * 
 *  - SYNCHRONUS callbacks:
 *      - forEach(function(){}) is a function that calls a function.
 *      - stops the flow of the script
 *  - ASYNCHRONOUS
 *      - setTimeout(function(){}, time) 
 *      - once trigerred, happens regardelss of control flow
 *      - things can happen while this runs
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

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
/** 
 * SYNC: It takes less time to getPosts() than it does to createPost()
 *  - createPosts times out after 2 seconds
 *  - getPosts times out adter 1 second
 *  - DOM renders existing posts *BEFORE* newly created posts
 * 
 */

// createPost({ title: 'Another functionally created post', body: 'this is  a post created by a calling a function ' });

// getPosts();

function createPost(post, someOtherFunction) {
    setTimeout(function() {
        posts.push(post);
        //someOtherFunction will need to be passed in and invoked after posts.push(post)
        someOtherFunction();
    }, 2000);
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
    title: 'Another functionally created post',
    body: 'this is  a post created by a calling a function '
}, getPosts);