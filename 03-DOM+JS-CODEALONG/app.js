/**
 * DOM SELECTORS
 * 
 * Single Element Selectors: grabs 1st item it finds with specified attribute
 * Yields nodeList or HTMLCollection
 * 
 *  - document.getElementById()
 *  - document.querySelector()
 * 
 * Multiple Element Selectos: grabs all items with the specified class
 * 
 *  - getElementsByClassName()
 */


// getElementsByClassName() - yields HTMLcollection
const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

items[0].style.color = "lightblue";
items[3].textContent = "Thing 1";

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);