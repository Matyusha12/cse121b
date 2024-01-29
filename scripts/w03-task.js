/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

function add(number1, number2) {
    return number1 + number2;
  }
  
/* Function Definition - Add Numbers */

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  


/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
// Using a function declaration or expression
const divide = (number1, number2) => number1 / number2;

function divideNumbers() {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('#getTotalDue').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let discount = document.querySelector('#membership').checked ? 0.2 : 0;
    let total = subtotal - (subtotal * discount);
    document.querySelector('#total').textContent = `Total: $${total.toFixed(2)}`;
  });
  

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */

document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1).join(', ');


/* Output Evens Only Array */

document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

/* Output Sum of Org. Array */

let sum = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = `Sum: ${sum}`;

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');

/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = `Sum: ${sumOfMultiplied}`;
