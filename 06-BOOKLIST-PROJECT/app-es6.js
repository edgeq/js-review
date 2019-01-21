class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    addBookToList(book) {
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
    }
    showAlert(msg, err) {
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

    }
    deleteBook(target) {
        if (target.className === 'delete') {
            // Delegate to parent since their are multiple X targets
            target.parentElement.parentElement.remove();
            this.showAlert('Book removed', 'success');
        }
    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
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
    console.log(ui);

    // VALIDATE
    if (title === '' || author === '' || isbn === '') {
        //ERROR ALERT
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);
        // Add to local storage
        Store.addBook(book);
        ui.showAlert('Book Added', 'success');
        //clear fields
        ui.clearFields();
    }
});

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI();

            ui.addBookToList(book);
        });
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
        console.log(isbn);

    }
}
//DOM LOAD
document.addEventListener('DOMContentLoaded', Store.displayBooks);
// event listener for delete
const tbody = document.getElementById('book-list');
tbody.addEventListener('click', function(e) {
    e.preventDefault();

    const ui = new UI();
    ui.deleteBook(e.target);
    //remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);


});