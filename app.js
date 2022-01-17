// const bookTitle = document.querySelector('#title');
// const bookAuthor = document.querySelector('#author');
// const bookStatus = document.querySelector('#status');
// const submitBook = document.querySelector('.submit');
// const tableContainer = document.querySelector('.book-table-container');
// const tableBody = 

const {target} = e;

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
    constructor(title, author, status) {
      this.title = title;
      this.author = author;
      this.status = status;
    }
}

function clickHandler(){
    document.addEventListener('click', (e) => {
        
        const tr = target.parentNode.parentNode.rowIndex - 1;

        if (target.id === 'submit-book'){
            addNewBook(e);
        } else if (target.classList.contains('fa-trash-alt')){
            myLibrary.splice(tr, 1);
        } else if (target.classList.contains('fa-check')) {
            target.classList.remove('fa-check');
            target.classList.add('fa-times');
            myLibrary[tr].status = false;
        } else if (target.classList.contains('fa-times')) {
            target.classList.remove('fa-times');
            target.classList.add('fa-check');
            myLibrary[tr].status = true;
        }
        displayLibrary();
    });
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

function addNewBook(e){
    e.preventDefault();
    const form = document.querySelector('form');
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const checkbox = document.querySelector('input[name="checkbox"]');

    if (titleInput.value !== '' && authorInput.value !== ''){
        if (checkbox.checked){
            addBookToLibrary(titleInput.value, authorInput.value, true);
        } else {
            addBookToLibrary(titleInput.value, authorInput.value, false)
        }
        form.reset();
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
