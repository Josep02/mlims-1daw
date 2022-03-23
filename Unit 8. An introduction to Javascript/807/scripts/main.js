"use strict";

function main() {

    let book1 = {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishedIn: 2008,
        alreadyRead: true
    };

    let book2 = {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        publishedIn: 2002,
        alreadyRead: false
    };


    document.getElementById("book1").innerHTML=
        book1.title + " by " + book1.author;

    document.getElementById("book2").innerHTML=
        book2.title + " by " + book2.author;

/*
    for (var i = 0; book1.lengh; i ++)
    
    if (book1.alreadyRead = false) {
        document.getElementById("book1").innerHTML =
        "You still need to read" + book2.title + " by " + book2.author;
    }



    if (book1.alreadyRead=false)
            "You still need to read" + book2.title + " by " + book2.author;
*/
}

document.addEventListener('DOMContentLoaded', main);