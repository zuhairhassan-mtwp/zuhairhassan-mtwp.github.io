//mode is to decide what opperation is done on the two numbers//
let mode = 'none';
//get each button and creates events for them//
let addButton = document.getElementById('addition');
addButton.addEventListener('click', (event) => {
  mode = 'add';
});

let subtractButton = document.getElementById('subtraction');
subtractButton.addEventListener('click', (event) => {
  mode = 'subtract';
});

let multButton = document.getElementById('multiplication');
multButton.addEventListener('click', (event) => {
  mode = 'multiply';
});

let divideButton = document.getElementById('division');
divideButton.addEventListener('click', (event) => {
  mode = 'division';
});

let rangeButton = document.getElementById('set-ranges');
rangeButton.addEventListener('click', createRandNums);
//const r1Button = document.getElementById('r1-submit');
//r1Button.addEventListener('click', (event) => {
//  let first = r1Button.previousElementSibling.previousElementSibling.value;
//  let second = r1Button.previousElementSibling.value;
//  let newVal = Math.ceil(Math.random() * (second - first) + first);
//  let destination = r1Button.parentElement.previousElementSibling;
//  destination.value = newVal;
//  if(mode == 'division'){
//    while(is_prime(destination.value) == true){
//      destination.value = Math.ceil(Math.random() * (second - first) + first); 
//    }
//  }
//});

//const r2Button = document.getElementById('r2-submit');
//r2Button.addEventListener('click', (event) => {
//  let first = r2Button.previousElementSibling.previousElementSibling.value;
//  let second = r2Button.previousElementSibling.value;
//  let newVal = Math.ceil(Math.random() * (second - first) + first);
//  let destination = r2Button.parentElement.previousElementSibling;
//  destination.value = newVal;
//  let rand1 = document.getElementById("first-number").value;
//  if(rand1 != ""){
//    if(mode == 'subtract'){
//      while(rand1 < newVal){
//        newVal = Math.ceil(Math.random() * (second - first) + first);
//        destination.value = newVal;
//      }
//    }
//    if(mode == 'division'){
//      while(rand1 % destination.value != 0){
//        destination.value = Math.ceil(Math.random() * (second - first) + first); 
//        }
//      }
//    }
//  });

function createRandNums(){
  //code for first randNum
  let r1First = document.getElementById("r1-start").value;
  let r1Second = document.getElementById("r1-end").value;
  let r1newVal = Math.ceil(Math.random() * (r1Second - r1First) + r1First);
  let r1destination = document.getElementById("first-number");
  r1destination.value = r1newVal;
  if(mode == 'division'){
    while(is_prime(r1destination.value) == true){
      r1destination.value = Math.ceil(Math.random() * (r1Second - r1First) + r1First); 
    }
  }
  //code for second randNum  
  let first = document.getElementById("r2-start").value;
  let second = document.getElementById("r2-end").value;
  let newVal = Math.ceil(Math.random() * (second - first) + first);
  let destination = document.getElementById("last-number");
  destination.value = newVal;
  let rand1 = document.getElementById("first-number").value;
  if(rand1 != ""){
    if(mode == 'subtract'){
      while(rand1 < newVal){
        newVal = Math.ceil(Math.random() * (second - first) + first);
        destination.value = newVal;
      }
    }
    if(mode == 'division'){
      while(rand1 % destination.value != 0){
        destination.value = Math.ceil(Math.random() * (second - first) + first); 
        }
      }
    }
}

let totalAttempted = 0;
let totalCorrect = 0;
let attemptedElement = document.getElementById('total');
let correctElement = document.getElementById('correct');
attemptedElement.innerText += ` ${totalAttempted}`
correctElement.innerText += ` ${totalCorrect}`;

let submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
  let input = parseInt(document.getElementById('answer').value, 10);
  let firstNumber = parseInt(document.getElementById('first-number').value, 10);
  let secondNumber = parseInt(document.getElementById('last-number').value, 10);
  if(mode == 'add'){
    if(input == firstNumber + secondNumber){
      totalCorrect += 1;
    }
  }
  if(mode == 'subtract'){
    if(input == firstNumber - secondNumber){
      totalCorrect += 1;
    }
  }
  if(mode == 'multiply'){
    if(input == firstNumber * secondNumber){
      totalCorrect += 1;
    }
  }
  if(mode == 'division'){
    if(input == firstNumber / secondNumber){
      totalCorrect += 1;
    }
  }
  totalAttempted += 1;
  attemptedElement.innerText = `Total Attempted: ${totalAttempted}`;
  correctElement.innerText = `Total Correct: ${totalCorrect}`;
  createRandNums();
  let submit = document.getElementById('answer');
  submit.value = '';
});

function is_prime(n)
{
  if(n===1){
    return false;
  }
  else if(n===2){
    return true;
  }
  else{
    for(let x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;
  }
}
