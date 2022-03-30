//Bookstore Gallery

"use strict";

let index = 0;

function next() {
    index++;
    updateButtons();
    refreshBook();
}

function updateButtons() {
    let buttonPrev = document.querySelector('#prev');
    let buttonNext = document.querySelector('#next');

    if (index == (books.length - 1)) {
        buttonNext.disabled = true;
    } else
        buttonNext.disabled = false;

    if (index == 0) {
        buttonPrev.disabled = true;
    }
    else
        buttonPrev.disabled = false;
}

function previous() {
    index--;
    updateButtons();
    refreshBook();
}

function refreshBook() {

    let title = document.querySelector('h2'); 
    title.innerHTML = books[index].title;

    let author = document.querySelector('h3');
    author.innerHTML = books[index].author;

    let cover = document.querySelector('img');
    
    cover.src = 'media/' + books[index].cover;
    cover.alt = `${books[index].title}`;
}

function main() {
    let buttonPrev = document.querySelector('#prev');
    let buttonNext = document.querySelector('#next');

    buttonNext.addEventListener('click', next);
    buttonPrev.addEventListener('click', previous);

    refreshBook();
}

document.addEventListener("DOMContentLoaded", main);