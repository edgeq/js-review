//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor - Prototypes will do all the heavy lifting
function UI() {}
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    //create tr
    const row = document.createElement('tr');
    // append book to tr
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a></td>
        `;
    list.appendChild(row);
};
UI.prototype.showAlert = function(msg, err) {
    const container = document.querySelector('.container');
    //create the element
    const alert = document.createElement('div');
    const form = document.getElementById('book-form');
    // add class to element
    alert.className = `alert ${err}`;
    // set the element to display msg
    alert.appendChild(document.createTextNode(msg));

    container.insertBefore(alert, form);

    // TIMOUT
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 2000);


};
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        // Delegate to parent since their are multiple X targets
        target.parentElement.parentElement.remove();
        this.showAlert('Book removed', 'success');
    }
};
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};
//Event Listeners
const submit = document.getElementById('book-form');

submit.addEventListener('submit', function(e) {
    e.preventDefault();
    // GET form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    // Instantiate a new book with form values
    const book = new Book(title, author, isbn);
    // Instantiate UI object
    const ui = new UI();
    // VALIDATE
    if (title === '' || author === '' || isbn === '') {
        //ERROR ALERT
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);
        ui.showAlert('Book Added', 'success');
        //clear fields
        ui.clearFields();
    }
});

// event listener for delete
const tbody = document.getElementById('book-list');
tbody.addEventListener('click', function(e) {
    e.preventDefault();

    const ui = new UI();
    ui.deleteBook(e.target);
    //show alert


});