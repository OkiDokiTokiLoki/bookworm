const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#status');
const submitBook = document.querySelector('.submit');
const tableContainer = document.querySelector('.book-table-container');
const tableBody = document.querySelector('#book-table-body');

let library = [];
let newBook;

submitBook.addEventListener('click', addBookToLibrary());

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addBookToLibrary(){
    e.preventDefault();
    newBook = new Book(title, author, readStatus);
    library.push(newBook);
    render();
    form.reset();
}

function render() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => tableBody.removeChild(book));
   
    for (let i=0; i<library.length; i++){
        createBook(library[i]);
    }
}
