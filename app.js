let myLibrary = [];

class Book{
    constructor(title, author, status){
        return {title, author, status}
    }
}

function clickHandler(){
    document.addEventListener('click', (e) => {
        const {target} = e;
        const tr = target.parentNode.parentNode.rowIndex - 1;  // see bookRow below

        if (target.id === 'submit-book'){
            addNewBook(e);
        } else if (target.classList.contains('delete-icon')){
            myLibrary.splice(tr, 1);
        } else if (target.classList.contains('check-icon')) {
            target.classList.remove('check-icon');
            target.classList.add('times-icon');
            myLibrary[tr].status = false;
        } else if (target.classList.contains('times-icon')) {
            target.classList.remove('times-icon');
            target.classList.add('check-icon');
            myLibrary[tr].status = true;
        } 
        displayLibrary();
    });
}

const themeChange = document.querySelector('#themeChange');
themeChange.onclick = () => {
    const body = document.body;

    if (body.classList.contains('dark')){
        body.classList.replace('dark', 'light');
    }
    else if (body.classList.contains('light')){
        body.classList.replace('light', 'dark');
    }
    else {
        body.classList.add('light');
    }
};


function themeChanger(){
    body.classList.add('light');

    if (body.classList.contains('light')){
        body.classList.remove('light')
    };
}

function displayLibrary(){
    const libraryList = document.querySelector('#book-table-body');
    libraryList.textContent = '';

    for (let i = 0; i < myLibrary.length; i += 1){
        const bookRow = document.createElement('tr');  // see tr above
        libraryList.appendChild(bookRow);

        const bookTitle = document.createElement('td');
        bookTitle.classList.add('table-title');
        bookTitle.textContent = myLibrary[i].title;
        bookRow.appendChild(bookTitle);

        const bookAuthor = document.createElement('td');
        bookAuthor.classList.add('table-author');
        bookAuthor.textContent = myLibrary[i].author;
        bookRow.appendChild(bookAuthor);

        const bookStatus = document.createElement('td');
        bookStatus.classList.add('table-control');
        const statusSymbol = document.createElement('img');
        if (myLibrary[i].status === false){
            statusSymbol.classList.add('icon', 'times-icon');
        } else {
            statusSymbol.classList.add('icon', 'check-icon');
        }
        bookStatus.appendChild(statusSymbol);
        bookRow.appendChild(bookStatus);

        const bookDelete = document.createElement('td');
        bookDelete.classList.add('table-control');
        const deleteSymbol = document.createElement('img');
        deleteSymbol.classList.add('icon', 'delete-icon');
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

function addBookToLibrary(title, author, status){
    const newBook = new Book(title, author, status);
    myLibrary.push(newBook);
    displayLibrary();
}

displayLibrary();
clickHandler();