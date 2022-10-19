let library = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    library.push(book);
}
function displayBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    for (let i = 0; i < library.length; i++){
        let book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `<h3>${library[i].title}</h3>
        <p>Author: ${library[i].author}</p>
        <p>Pages: ${library[i].pages}</p>
        <p>Read: ${library[i].read}</p>
        <button class="remove" onclick="removeBook(${i})">Remove</button>
        <button class="read" onclick="changeRead(${i})">Change Read</button>
        `;
        bookList.appendChild(book);

    }

}
function removeBook(index) {
    library.splice(index, 1);
    displayBooks();

}
function changeRead(index) {
    if (library[index].read == "Yes") {
        library[index].read == "No";
    } else {
        library[index].read == "Yes";

    }
    displayBooks();
}
function addBook() {
    let title = document.getElementById("title").value;
    let author = document.get
}
