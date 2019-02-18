
// book class: represents a book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}


// UI class: handle ui tasks

class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '1234'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '5678'
            }
        ];

        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>x</a></td>

        `;

        list.appendChild(row);
    }
}

// Store Class: handles storage

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add book

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instatiate book
    const book = new Book(title, author, isbn)
    console.log(book)
});

