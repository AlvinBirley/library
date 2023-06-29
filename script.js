document.getElementById('new').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

/* creating an object */

/* let library = new Object(); */

/* adding properties (key and value) to the object */

/*library.author = "Tolkien";
library.title = "Lord of the Rings";
library.number = 1050;
library.completed = "Yes";

console.log(library.title); */

/* shorthand property creation*/

/*let librarytwo = {
author: "Tolkien",
title: "Lord of the Rings",
number: 1015,
complete: "Yes"
}*/

/*console.log(librarytwo.number)*/

/* object constructor example*/

/* object blueprint */

/*ARRAY OF OBJECTS*/

let Gatsby = new Book("Fitzgerald", "The Great Gatsby", 250, "Yes" );
let WarandPeace = Book ("Tolstoy", "War and Peace", 1200, "No" );
let TomSawyer = Book ("Twain", "Tom Sawyer", 340, "Yes" );


let myLibrary = [
    {
    Author: "Tolstoy",
    Title: "War and Peace",
    Number: 1200,
    Completed: "Yes"
    },
,
    {   Author: "Nut",
        Title: "Avacado",
        Number: 3434,
        Completed: "No"

        }

];

/*OBJECT CONSTRUCTOR*/
function Book (author, title, number, completed){
    this.author = author;
    this.title = title;
    this.number = number;
    this.completed = completed;
}

function addBooktoLibray() {


}
/*looping over objects*/

/* use Oject.keys to get the keys of a property*/
let properties = Object.values(Gatsby)
/* an array has been logged*/
console.log(properties)

for(let prop of properties){
    console.log(prop)
}

/*storing both keys and values into a variable with Oject.entries*/


/* this is how you will take data from your objects and put them into the individual cards in the inerface*/
/* use this for of loop with the border and rows div to put the into the individual cards in the inerface*/

const iterator = myLibrary.values();


const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
e.preventDefault();
const fd = new FormData(form);
const obj = Object.fromEntries(fd);
myLibrary.push(obj);
console.log(obj)
console.log(myLibrary.includes(obj));
for (const value of iterator) {
    console.log(value);
  }

  let last = myLibrary.slice(2);
  console.log(last);
  /*document.getElementById("book-here").innerHTML = JSON.stringify(Object.entries(last));*/
  let hello = Object.entries(last)
  let jason = JSON.stringify(hello)
  console.log(hello);
  let unquoted = jason.replace(/"/g, '');
  
  let unquoted2 = unquoted.replace(/{/g, '');
  console.log(unquoted2);
  let unquoted3 = unquoted2.replace(/]/g, '');
  console.log(unquoted3);
  let unquoted4 = unquoted3.replace(/,/g, '');
  console.log(unquoted4);
  let unquoted5 = unquoted4.replace(/}/g, '');
  console.log(unquoted5);
  let unquoted6 = unquoted5.replace(/,/g, '');
  console.log(unquoted6);
  let unquoted7 = unquoted6.slice(3)
  let unquoted8 = unquoted7.replace("Title", "</br>Title");
  let unquoted9 = unquoted8.replace("Pages", "</br>Pages");
  let unquoted10 = unquoted9.replace("Completed?", "</br>Completed?");


  document.getElementById("book-here").innerHTML = unquoted10;
  
  /*document.getElementById("book-here").innerHTML = JSON.stringify(Object.entries(last));*/
console.log(myLibrary.length);
console.log(myLibrary[0].Title);
console.log(Object.keys(myLibrary)[1]);

document.querySelector('.bg-modal').style.display = 'none';
})