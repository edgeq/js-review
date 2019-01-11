/**
 * REPLACING + REMOVING DOM ELEMENTS
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

console.log(cardAction);
 

 