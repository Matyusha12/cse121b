/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Natalia Iakovleva",
    photo: "images/photo.png", 
    favoriteFoods: ['Salad', 'Pasta', 'Potatoes', 'Pizza', 'Eggs', 'Bananas', 'Vegetables'],
    hobbies: ['Coding', 'Travel', 'Sport'],
    placesLived: []
};
  
/* Populate Profile Object with placesLive objects */

    myProfile.placesLived.push(
        {
          place: 'Moscow, Russia',
          length: '6 years'
        },
        {
          place: 'Logan, UT',
          length: '2 years'
        }
    );
  
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    const placesLivedElement = document.querySelector('#places-lived');
    placesLivedElement.appendChild(dt);
    placesLivedElement.appendChild(dd);
});
