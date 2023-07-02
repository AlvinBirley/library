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

let remove = document.createElement('BUTTON');
remove.classList.add("remove-class");
remove.innerHTML = "Remove";
const myButton = document.getElementsByClassName('remove-class');


const newDiv = document.createElement("div");
newDiv.classList.add("border");



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
const subFooter = document.createElement("div");
const subFootertwo= document.createElement("div");
subFootertwo.classList.add("book-id");
newDivfooter.appendChild(subFooter);
newDivfooter.appendChild(subFootertwo);
let remove = document.createElement('BUTTON');
remove.classList.add("remove-class");
remove.innerHTML = "Remove";



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

    newDiv.appendChild(remove);



   newDivcenter.appendChild(para);
   newDivcenter.appendChild(paraTwo);
   newDivcenter.appendChild(paraThree);
   newDivcenter.appendChild(paraFour);

   let solution = resultTwo.pages

   subFootertwo.innerHTML = `Book Id#:${resultTwo.pages}`


  }


getValues();





function setup() {
    let author = document.getElementById('inputValuename').value;
    let resultTwo = myLibrary.find(item => item.author === author );
    let solution = resultTwo.pages
    var els = document.getElementsByClassName("remove-class");
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function (e) {
            e.preventDefault();
            myLibrary.splice(myLibrary.findIndex(({pages}) => pages == solution), 1);
            e.target.closest('div').remove();
    
        });
    }
}
setup();



document.querySelector('.bg-modal').style.display = 'none';



})

