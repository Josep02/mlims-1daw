function main() {

  for (let i = 0; i < books.length; i++) {
    let newParaph = document.createElement('p');
    if (libros[i].alredyRead === true) {
      newParaph.innerHTML = "You have read " + libros[i].title + " by " + libros[i].autor;
    }
    else
      newParaph.innerHTML = "You didn't read " + libros[i].title + " by " + libros[i].autor;
    divlistabooks.appendChild(newParaph);
  }
}

document.addEventListener('DOMContentLoaded', main);