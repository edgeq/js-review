/**
 * REPLACING + REMOVING DOM ELEMENTS
 *  - document.createElement('')
 *  - document.createTectNode('')
 *  - document.replaceChild(newThing, oldThing)
 *  - document.remove();
 *  - document.removeChild(targetChild)
 * 
 *  - classList.add('')
 *  - classList.remove('')
 *  - getAttribute('')
 *  - setAttribute('attrName', 'attrVal')
 *  - hasAttribute('')
 *  - removeAttribute('');
 */

// REPLACE ELEMENT
// create the element
const newHeading = document.createElement('h2');
// add a title
newHeading.id = 'task-title';
// appeend text inside element
newHeading.appendChild(document.createTextNode('Task List 02'));

// get old heading
const oldHeading = document.getElementById('task-title');
// target old heading's parent element
const cardAction = oldHeading.parentElement;
// replace 
cardAction.replaceChild(newHeading, oldHeading); //1st arg = what you want to insert, 2ndarg - what to replace

// REMOVE ELEMENT
const li = document.querySelectorAll('li');
const list = document.querySelector('ul');

//REMOVE LIST ITEM
li[0].textContent = 'hello';
li[0].remove(); //removed specific <li>

li[4].textContent = 'remove me';
list.removeChild(li[4]); //removed child of <ul>

// CLASSES 
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[1];

link.classList.add('test');
link.classList.remove('test');

val = link;

// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.getAttribute('href');
val = link.hasAttribute('title');
link.setAttribute('title', 'google');
val = link;

link.removeAttribute('title');
console.log(val);