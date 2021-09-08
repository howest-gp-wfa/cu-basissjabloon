"use strict";

var inpName, btnConfirm, divResponse;

window.addEventListener("load", initialize); 

function initialize() {

  //Get elements in the DOM
  inpName = document.getElementById("name-input");
  divResponse = document.getElementById("response");
  btnConfirm = document.querySelector("#confirm-button");

  //Add eventlisteners to the elements we want
  btnConfirm.addEventListener("click", displayFeedback);

}

function displayFeedback() {

  const name;
  name = inpName.value;
  console.log(name);
  
  divResponse.className = "feedback";
  divResponse.textContent = `Welkom, ${name}`;

  inpName.value = "";

}