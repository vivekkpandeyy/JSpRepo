let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `
        <div class="book-card">
            <h3>Book #${index + 1}: ${book.name}</h3>
            <p><strong>Author:</strong> ${book.authorName}</p>
            <p><strong>Description:</strong> ${book.bookDescription}</p>
            <p><strong>Pages:</strong> ${book.pagesNumber}</p>
            <div class="book-actions">
                <button class="btn edit-btn" onclick="editbook(${index})">Edit</button>
                <button class="btn delete-btn" onclick="deletebook(${index})">Delete</button>
            </div>
        </div>
    `);
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1);
    showbooks();
}

function deletebook(index) {
    if (confirm('Are you sure you want to delete this book?')) {
        books.splice(index, 1);
        showbooks();
    }
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}