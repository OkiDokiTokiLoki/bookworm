const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#status');
const tableContainer = document.querySelector('.book-table-container');
const tableBody = document.querySelector('#book-table-body');

let library = [];

function Book(title, author, readStatus) {

    this.title = title;
    this.author = author;
    this.readStatus = readStatus;

}