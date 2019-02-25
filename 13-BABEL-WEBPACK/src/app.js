import { http } from './easyhttp';
import { ui } from './ui';

//GET posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);
// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err))
}

function submitPost() {
  // declare  DOM variables
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  // turn DOM variables into a data structure
  // ommitting values in key:value pairs mease that key will be key...
  const data = {
    title,
    body
    }

  //Create Post by passing in data structure to intended location... all the hard work happens in easyhttp.js
  http.post('http://localhost:3000/posts', data)
  .then(data => {
    ui.showAlert('Post Added', 'alert alert-success');
    ui.clearFields();
    getPosts();
  })
  .catch(err => console.log(err))

}
