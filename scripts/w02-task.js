/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Natalia Iakovleva"
const currentYear = new Date().getFullYear();
const profilePicture = 'images/photo.png';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

let favFoods = ['Salad', 'Pasta', 'Potatoes','Piza','Eggs','Bananas','Vegetables']; 
foodElement.textContent = favFoods.join(', ');
const newFoodItem = ['Sushi', 'Tacos', 'Chocolate','Salsa','Apples','Mango'];
favFoods.push(newFoodItem);
foodElement.innerHTML += `<br>${newFoodItem}`;
favFoods.shift(); 
favFoods.pop(); 
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;













