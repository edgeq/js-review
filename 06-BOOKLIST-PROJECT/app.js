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
        `
    list.appendChild(row);
}
UI.prototype.clearFields = function() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
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
    // Add book to list
    ui.addBookToList(book);
    //clear fields
    ui.clearFields();


})