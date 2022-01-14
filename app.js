const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#status');
const submitBook = document.querySelector('.submit');
const tableContainer = document.querySelector('.book-table-container');
const tableBody = document.querySelector('#book-table-body');

let library = [];

submitBook.addEventListener('click', addBookToLibrary());

function Book(title, author, readTheBook){
    this.title = title
    this.author = author
    this.readTheBook = readTheBook
    this.info = () => {
        return `${title}, ${author}, ${readTheBook}`
    }
}

// const book1 = new Book('Harry Potter', 'JK Rowling', 'yes');
// const book2 = new Book('GOT', 'GRRM', 'no');
// console.log(`book 1: ${book1.info()}  || book 2: ${book2.info()}`)

function addBookToLibrary(){
    //e.preventDefault();
    let newBook = new Book(title, author, readTheBook);
    library.push(newBook);
    console.log(library);
    // render();
    form.reset();
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
