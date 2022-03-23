let book1 = {
    title: 'Harry Potter 1',
    author: 'JK Rowling',
    publishedIn: 1997,
    alreadyRead: true,
    cover: 'hp1.jpg'
};
let book2 = {
    title: 'Harry Potter 2',
    author: 'JK Rowling',
    publishedIn: 1998,
    alreadyRead: false,
    cover: 'hp2.jpg'
};
let book3 = {
    title: 'Harry Potter 3',
    author: 'JK Rowling',
    publishedIn: 1999,
    alreadyRead: false,
};

let books = [book1, book2, book3];

function main() {

    function showBook() {
            document.getElementById("books").innerHTML = `${books[0].title} by ${books[0].author}`;
    }
    showBook();

    function createButton(id, text) {
        let button = document.createElement('button');
        button.setAttribute("id", id);
        button.innerHTML = text;
        return button;
    }

    //Function to create nuttons and add them to html
    function createButtons(element) {
        let previousButton = documjent.createElement('button');
        previousButton.setAttribute("id", "retrocederLibro");
        previousButton.innerHTML = "Libro anterior";
        element.apend(previousButton);
    }
}

document.addEventListener('DOMContentLoaded', main);