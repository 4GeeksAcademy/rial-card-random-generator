import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload 
let generateCard = document.getElementById("generateButton");
generateCard.onclick = function () {
  console.log("Hello Rigo from the console!");
  let numberBody = document.getElementById("numberBody");
  let numberList = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexList = Math.floor(Math.random() * numberList.length);
  numberBody.textContent = numberList[indexList];
  console.log(numberList[indexList]);


  let paloHeader = document.getElementById("paloHeader");
  let paloFooter = document.getElementById("paloFooter");
  let paloList = ["♦", "♥", "♠", "♣"];
  let indexPalo = Math.floor(Math.random() * paloList.length);
  paloHeader.textContent = paloList[indexPalo];
  paloFooter.textContent = paloList[indexPalo];
  if (paloList[indexPalo] === "♦" || paloList[indexPalo] === "♥") {
    paloHeader.style.color = "red";
    paloFooter.style.color = "red";
  } else {
    paloHeader.style.color = "black";
    paloFooter.style.color = "black";
  }
  
  };