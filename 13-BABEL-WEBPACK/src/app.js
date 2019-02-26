import { http } from './easyhttp';
import { ui } from './ui';

//GET posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);
// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);
//Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);
// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);
// Listen for cancel on edit state
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err))
}

function submitPost() {
  // declare  DOM variables
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;
  // turn DOM variables into a data structure
  // ommitting values in key:value pairs mease that key will be key...
  const data = {
    title,
    body
    }

    // validate input
  if(title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    if(id === ''){
      // Create post
      //Create Post by passing in data structure to intended location... all the hard work happens in easyhttp.js
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post Added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err))
    }else{
      // Update Post
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Post Updated', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch(err => console.log(err))
    }


  }


}

function deletePost(e){
  e.preventDefault();
  // Event Propogation
  if(e.target.parentElement.classList.contains('delete')){
    const id =  e.target.parentElement.dataset.id;
    if(confirm('are you sure?')){
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post Removed', 'alert alert-success');
        getPosts();
      })
      .catch(err => console.log(err));
    }
    console.log(id);
  }
}

function enableEdit(e){
  e.preventDefault();
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }
    // Fill form with current post
    ui.fillForm(data);
  }

}
// cancels edit state
function cancelEdit(e){
  e.preventDefault();
  if(e.target.classList.contains('post-cancel')){
    ui.changeFormState('add');
  }

}