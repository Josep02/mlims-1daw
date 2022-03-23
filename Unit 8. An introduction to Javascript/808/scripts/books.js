"use strict"

// Fuction to show the books in list
function showbooks(divBooks) {
  let ul = document.createElement('ul');
  divBooks.append(ul);  

  for (let i = 0; i < books.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `${books[i].title} by ${books[i].author}`;
    ul.append(li);
  }
}
function createButton(id, text) {

  let button = document.createElement('button');
  button.setAttribute("id", id);
  button.innerHTML = text;
  return button;
}
//Fuction to create buttons and add them to html

function createButtons(element) {
  let buttonOrdenateCreateFirst = document.createElement('button');
  buttonOrdenateCreateFirst.setAttribute("id", "ordenarPrimero");
  buttonOrdenateCreateFirst.innerHTML = "Ordenar de primero a ultimo";
  element.append(buttonOrdenateCreateFirst);

  let buttonOrdenateCreateLast = document.createElement('button');
  buttonOrdenateCreateLast.setAttribute("id", "ordenarUltimo");
  buttonOrdenateCreateLast.innerHTML = "Ordenar de ultimo a primero";
  element.append(buttonOrdenateCreateLast);

  let buttonOrdenateAlfabetic = document.createElement('button');
  buttonOrdenateAlfabetic.setAttribute("id", "ordenarAlfabeticamente");
  buttonOrdenateAlfabetic.innerHTML = "Ordenar por alfabeto";
  element.append(buttonOrdenateAlfabetic);
}

//Fuction to ordenate reverse alfabetic Array 
function sortAlphabetically() {  
  books.sort(function (a, b) {
    if (a.title > b.title)
      return 1
    else
      return -1
  });
}
//Fuction to order as entered in Array 
function sortByCreation() {  
  books.sort();
}
//Fuction to reverse order as entered in Array 
function sortByCreationReversed() {
  books.reverse();  
}

function refreshBooks(e) {  
  console.log(e);
  let divBooks = document.querySelector("#books");
  let ul = divBooks.querySelector("ul");
  divBooks.removeChild(ul);

  showbooks(divBooks);
}
function main() {
  let divBooks = document.querySelector("#books");  

  let p = document.createElement('p');
  p.innerHTML = "Show the number of books: " + books.length;
  p.innerHTML = `Show the number of books: ${books.length}`;
  divBooks.append(p);

  let btnSortByCreation = createButton("sort-by-creation", "Sort by creation");
  let btnSortByCreationReversed = createButton("sort-by-creation-reversed", "Sort by creation reversed");
  let btnSortAlphabetically = createButton("sort-alphabetically-creation", "Sort alphabetically");

  btnSortAlphabetically.addEventListener('click', sortAlphabetically);
  btnSortAlphabetically.addEventListener('click', refreshBooks);

  btnSortByCreation.addEventListener('click', sortByCreation);
  btnSortByCreation.addEventListener('click', refreshBooks);
  
  btnSortByCreationReversed.addEventListener('click', sortByCreationReversed);
  btnSortByCreationReversed.addEventListener('click', refreshBooks);

  divBooks.append(btnSortByCreation);
  divBooks.append(btnSortByCreationReversed);
  divBooks.append(btnSortAlphabetically);

  let btnAddBegin = document.querySelector("#btn-add-begin");
  let btnAddEnd = document.querySelector("#btn-add-end");
  let btnRemoveFirst = document.querySelector("#btn-remove-first");
  let btnRemoveLast = document.querySelector("#btn-remove-last");

  btnAddBegin.addEventListener('click', addBegin);
  btnAddEnd.addEventListener('click', addEnd);
  btnRemoveFirst.addEventListener('click', removeFirst);
  btnRemoveLast.addEventListener('click', removeLast);
  
  showbooks(divBooks);

}

function addBegin(e) {
   let inputTitle= document.querySelector("input[name='title']");
   let inputAuthor=document.querySelector("input[name='author']");     

   let title = inputTitle.value;
   let author = inputAuthor.value;

   books.unshift({ 
      title: title,
      author: author
    });
    
    refreshBooks();
   
}

function addEnd(e) {
  let inputTitle= document.querySelector("input[name='title']");
  let inputAuthor=document.querySelector("input[name='author']");     

  let title = inputTitle.value;
  let author = inputAuthor.value;

  books.push({ 
     title: title,
     author: author
   });
   
   refreshBooks();
  
}

function removeFirst() {
  let book = `${books[0].title} by ${books[0].author}`;
  if (confirm(book + " will be deleted. Are you sure?") == true) {
    books.shift();
  }
  
  refreshBooks();
}

function removeLast() {
  books.pop();
  refreshBooks();
}



// index.html

document.addEventListener("DOMContentLoaded", main);