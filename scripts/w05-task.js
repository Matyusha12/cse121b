/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        
        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        
        article.appendChild(h3);
        article.appendChild(img);
        
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */

const sortBy = (filter) => {
    let filteredTemples;
    switch (filter) {
        case "utah":
            filteredTemples = templeList.filter(temple => temple.location.includes("Utah"));
            break;
        case "nonutah":
            filteredTemples = templeList.filter(temple => !temple.location.includes("Utah"));
            break;
        case "older":
            filteredTemples = templeList.filter(temple => {
                const dedicationDate = new Date(temple.dedicated.replace(/,/g, ''));
                return dedicationDate < new Date(1950, 0, 1);
            });
            break;
        case "all":
            filteredTemples = templeList; 
            break;
        default:
            filteredTemples = []; 
            break;
    }
    return filteredTemples;
};

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", (event) => {
    const selectedFilter = event.target.value;
    const sortedTemples = sortBy(selectedFilter);
    reset();
    displayTemples(sortedTemples);
});