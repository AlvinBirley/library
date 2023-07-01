document.getElementById('new').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.bg-modal').style.display = 'none';
});


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

function Object(author, title, pages, completed) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.completed = completed;
  }

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
e.preventDefault();
let divCount = document.getElementsByClassName("border").length;
const grabCase = document.getElementById("case");
const newDiv = document.createElement("div");
newDiv.classList.add("border");
grabCase.appendChild(newDiv);
const newDivheader = document.createElement("div");
newDivheader.classList.add("header-border");
newDiv.appendChild(newDivheader);
const newDivcenter = document.createElement("div");
newDivcenter.classList.add("border-center");

const newDivfooter = document.createElement("div");
newDivfooter.classList.add("border-footer");
newDiv.appendChild(newDivcenter);
newDiv.appendChild(newDivfooter);



newDivheader.textContent = `Book ${divCount + 1}`;

function getValues (){ 
    let author = document.getElementById('inputValuename').value;
    let title = document.getElementById('inputValueage').value;
    let pages = document.getElementById('inputValuepages').value;
    let completed = document.getElementById('inputValuescompleted').value;
  
    let newObject = new Object(author, title, pages, completed);
  
  
    console.log(newObject);

    function addToarray(){
        myLibrary.push(newObject);
    }
    addToarray();
    console.log(myLibrary.length);
    lastObject = myLibrary.slice(-1);
    const para = document.createElement("p");
    const paraTwo = document.createElement("p");
    const paraThree = document.createElement("p");
    const paraFour = document.createElement("p");
    
    let result = myLibrary.find(item => item.title === title );
    let resultTwo = myLibrary.find(item => item.author === author );
    let resultThree = myLibrary.find(item => item.completed === completed );
    let resultFour = myLibrary.find(item => item.pages === pages);

    
    console.log(result.author);
    console.log(resultTwo.title)
    console.log(resultThree.pages)
    console.log(resultFour.pages)
    
    para.innerText = `Author: ${result.author}`
    paraTwo.innerText = `Title: ${resultTwo.title}`
    paraThree.innerText = `Pages: ${resultThree.pages}`
    paraFour.innerText = `Completed: ${resultFour.completed}`

   newDivcenter.appendChild(para);
   newDivcenter.appendChild(paraTwo);
   newDivcenter.appendChild(paraThree);
   newDivcenter.appendChild(paraFour);



  }


getValues();






document.querySelector('.bg-modal').style.display = 'none';
})