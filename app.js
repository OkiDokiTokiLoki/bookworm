const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#status');
const submitBook = document.querySelector('.submit');
const tableContainer = document.querySelector('.book-table-container');
const tableBody = 

let myLibrary = [];

// submitBook.addEventListener('click', addBookToLibrary());

// function Book(title, author, readTheBook){
//     this.title = title
//     this.author = author
//     this.readTheBook = readTheBook
//     this.info = () => {
//         return `${title}, ${author}, ${readTheBook}`
//     }
// }

// const book1 = new Book('Harry Potter', 'JK Rowling', 'yes');
// const book2 = new Book('GOT', 'GRRM', 'no');
// console.log(`book 1: ${book1.info()}  || book 2: ${book2.info()}`)

class Book {
    constructor(title, author, readStatus) {
      this.title = title;
      this.author = author;
      this.readStatus = readStatus;
    }
}

function addBookToLibrary(){
    //e.preventDefault();
    const newBook = new Book(title, author, readStatus);
    myLibrary.push(newBook);
    displayLibrary();


    // console.log(library);
    // // render();
    // form.reset();
}

function displayLibrary(){
    const libraryList = document.querySelector('#book-table-body');
    libraryList.textContent = '';

    for (let i = 0; i < myLibrary.length; i += 1){
        const bookRow = document.createElement('tr');
        bookRow.classList.add('book-info');
        libraryList.appendChild(bookRow);

        const bookTitle = document.createElement('td');
        bookTitle.textContent = myLibrary[i].title;
        bookRow.appendChild(bookTitle);

        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = myLibrary[i].author;
        bookRow.appendChild(bookAuthor);

        const bookStatus = document.createElement('td');
        const statusSymbol = document.createElement('i');
        if (myLibrary[i].status === false){
            statusSymbol.classList.add('fas', 'fa-times');
        } else {
            statusSymbol.classList.add('fas', 'fa-check');
        }
        bookStatus.appendChild(statusSymbol);
        bookRow.appendChild(bookStatus);

        const bookDelete = document.createElement('td');
        const deleteSymbol = document.createElement('i');
        deleteSymbol.classList.add('fas', 'fa-trash-alt');
        bookDelete.appendChild(deleteSymbol);
        bookRow.appendChild(bookDelete);
    }
}

// function render() {
//     const books = document.querySelectorAll('.book');
//     books.forEach(book => tableBody.removeChild(book));
   
//     for (let i=0; i<library.length; i++){
//         createBook(library[i]);
//     }
// }

// readBtn.addEventListener('click', () => { 
//     item.read = !item.read; 
//     render();
// }); 
