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
 *  - document.getElementsByClassName() -> returns HTML collection
 *  - document.getElementsByTagName() -> returns HTML collection
 *  - document.querySelectorAll() -> returns NodeList
 */

/*

// getElementsByClassName() - yields HTMLcollection
const items = document.getElementsByClassName('collection-item');

console.log(items);
// console.log(items[0]);

items[0].style.color = "lightblue";
items[3].textContent = "Thing 1";

//target the unordered list. then target elements with class name 'collection-item'
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

*/

//getElementByTagName
/*
let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[0].style.color = 'teal';
li[3].textContent = 'I\'m a list item!';

//HTML collections are NOT ARRAYS
// li.reverse(); // returns an error
// console.log(li);

//HTML collections need to be converted
li = Array.from(li);
// li.reverse();
li.forEach(function(li, index){
    li.textContent = `Sup! ${index}`
    console.log(li.innerText);
});
*/

// querySelectorAll - Returns NodeLists which behave more like Arrays
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
   item.textContent = `${index}: Hello!`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
//ES6 ForLoop
liOdd.forEach(function(li, index){
    li.style.background = 'lightgrey';
})
//Legacy JS forLoop
for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'tomato';
}


console.log(items);
