/**
 * Traversing the DOM - parents and children
 */

 let val;
 const list = document.querySelector('ul.collection');
 const listItem = document.querySelector('li.collection-item:first-child');

// console.log(list);
// console.log(listItem);

// Get child node
val = list.childNodes; // returns nodeList
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;
/**
 * NODE TYPES
 *  1 - Element
 *  2 - Attribute (deprecated)
 *  3 - Text node
 *  8 - Comment
 *  10 - Doctype
 */

val = list.children; //more targeted. returns HTMLcollection
val = list.children[4];
val = list.children[0].textContent = 'hello';

// you can be really specific and add ids and classes.
list.children[3].children[0].id = 'test-id';
list.children[3].children[0].classList.add('test-class');

val = list.children[3].children[0];

val = list.firstChild; //returns first line break as text
val = list.lastChild; //returns first line break as text
val = list.firstElementChild;
val = list.lastElementChild;

// Count Child elements
val = list.childElementCount;

//PARENTS
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//SIBLINGS
    // next sibling
val = listItem.nextSibling; // returns first line break as text
listItem.nextElementSibling.textContent = 'traversed!'
val = listItem.nextElementSibling.nextElementSibling; //third

    // prev sibling
val = listItem.previousElementSibling;
val = listItem.previousSibling;

val = listItem.previousElementSibling; // null - there is no previous element to the first 

 console.log(val);