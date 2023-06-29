document.getElementById('new').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.bg-modal').style.display = 'none';
});


let Gatsby = new Book("Fitzgerald", "The Great Gatsby", 250, "Yes" );
let WarandPeace = Book ("Tolstoy", "War and Peace", 1200, "No" );
let TomSawyer = Book ("Twain", "Tom Sawyer", 340, "Yes" );


let myLibrary = [

];

/*OBJECT CONSTRUCTOR*/
function Book (author, title, number, completed){
    this.author = author;
    this.title = title;
    this.number = number;
    this.completed = completed;
}

function book() {


}

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
e.preventDefault();

const grabCase = document.getElementById("case");
const newDiv = document.createElement("div");
newDiv.classList.add("border");
grabCase.appendChild(newDiv);


document.querySelector('.bg-modal').style.display = 'none';
})