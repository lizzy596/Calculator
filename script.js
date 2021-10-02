const clear = document.querySelector('.clear');
const erase = document.querySelector('.delete');
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');


let displayArray = [];
let firstNumber = 0;
let secondNumber = 0;
let opCounter = 0;
let workIt = [];






function operate(operator, a, b) {
  if(operator == 'add') {
    return a + b;
  } else if(operator == 'subtract') {
    return a - b;
  } else if(operator == 'multiply') {
    return a * b;
  } else if(operator == 'divide') {
      if(b == 0) {
        return `Shame!`;
      } else {
        return a / b;
      }
    
  }
}




function handleNumbers(e) {
  const numberClicked = e.target;
  const clickedValue = numberClicked.getAttribute('value');
  if(displayArray.length <= 8) {
    displayArray.push(clickedValue);
    display.innerHTML = displayArray.join('');
  } else {
    return;
  }
}
  
  



function handleOperators(e) {
  let opClicked = e.target;
  let opClickedValue = opClicked.value;
  let answer = 0;
  if(workIt.length == 0) {
    firstNumber = Number(display.innerHTML);
    workIt.push(firstNumber);
    workIt.push(opClickedValue);
    displayArray = [];
    
  } else if(workIt.length == 2) {
    secondNumber = Number(display.innerHTML);
    workIt.push(secondNumber);
    display.innerHTML = operate(workIt[1], workIt[0],workIt[2]);
    displayArray = [];
    workIt = [];
    workIt.push(Number(display.innerHTML));
    workIt.push(opClickedValue);
    
  } 
}


function clearDisplay() {
  display.innerHTML = '';
  displayArray = [];
  workIt = [];
  
  
}

function deleteDisplay() {
  displayArray.pop(displayArray[displayArray.length - 1]);
  display.innerHTML = displayArray.join('');
}

function computeNumbers() {
  workIt.push(Number(display.innerHTML))
  if(workIt.length == 3) {
    display.innerHTML = operate(workIt[1], workIt[0],workIt[2]);
    displayArray = [];
    workIt = [];
  } else {
    return;
  }
}



   
   
   
   
   





numberButtons.forEach(button => button.addEventListener('click', handleNumbers));

operatorButtons.forEach(button => button.addEventListener('click', handleOperators));

equals.addEventListener('click', computeNumbers);

clear.addEventListener('click', clearDisplay);

erase.addEventListener('click', deleteDisplay);


























