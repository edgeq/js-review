/**
 * DOM SELECTORS
 * 
 * Single Element Selectors: grabs 1st item it finds with specified attribute
 * Yields nodeList or HTMLCollection
 *   -document.getElementById()
 *   -document.querySelector()
 * 
 * Multiple Element Selectos: grabs all items with the specified class
 */

//document.getElementByID

// let id;
// id = document.getElementById('task-form')
// console.log(id);
console.log(document.getElementById('task-title'));

//Get things from element
console.log(document.getElementById('task-title').id);

//Store element in variable
const taskTitle = document.getElementById('task-title');

// CHANGE STYLE
taskTitle.style.background = '#909090';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

//Change Content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My List';
taskTitle.innerHTML = '<span style="color:aquamarine">My List</span>';

//QUERY SELECTOR
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('#task-title'));

console.log(document.querySelector('li'));

document.querySelector('li').style.color = 'red';
//you can nest stuff
document.querySelector('li a').style.color = 'lightblue';
document.querySelector('li:nth-child(4)').style.background = '#4a4a4a';
document.querySelector('li:nth-child(4)').textContent = 'Cross me off';
document.querySelector('li:nth-child(4)').style.color = 'white';