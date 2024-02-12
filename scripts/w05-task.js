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
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
getTemples();

const filterTemples = () => {
    reset();
    const filter = document.querySelector('#filtered').value;
    
    let filteredTemples;
    switch (filter) {
        case "utah":
            filteredTemples = templeList.filter(temple => temple.location.toLowerCase().includes("utah"));
            break;
        case "nonutah":
            filteredTemples = templeList.filter(temple => !temple.location.toLowerCase().includes("utah"));
            break;
        case "older":
            filteredTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case "all":
            filteredTemples = templeList; 
            break;
        default:
            filteredTemples = []; 
    }
    displayTemples(filteredTemples);
};

/* Event Listener */
document.addEventListener('DOMContentLoaded', () => {
    getTemples(); 
    document.querySelector("#filtered").addEventListener("change", () => filterTemples(templeList));
});
