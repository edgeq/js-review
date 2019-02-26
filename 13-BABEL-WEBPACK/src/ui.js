class UI {
  constructor(){
    this.posts = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }

  showPosts(posts){
    console.log(posts);
    let output = '';
    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>

        </div>
      </div>
      `;
    });
    this.posts.innerHTML = output;
  }
  showAlert(message, className){
    this.clearAlert();
    //create div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.postsContainer');
    const posts = document.querySelector('#posts');
    container.insertBefore(div, posts);
    //Timeout
    setTimeout(() => this.clearAlert(), 2000);
  }
  // Timeout to clear alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // Empty form fields
  clearFields(){
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
  // Fill Form to Edit
  fillForm(data){
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }
  // Clear Hidden Id  value
  clearIdInput() {
    this.idInput.value = '';
  }
  changeFormState(type){
    if(type === 'edit'){
      //change color && change text
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      // create a cancel button to exit state
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      //insert button into DOM
      const cardForm = document.querySelector('.card-form');
      const formEnd = document.querySelector('.form-end');
      // InSert button
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      // remove cancel button if there
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove();
      }
      // Clear ID from hidden field
      this.clearIdInput();
      this.clearFields();
    }
  }
}

export const ui = new UI();