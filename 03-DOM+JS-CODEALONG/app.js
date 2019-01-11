/**
 *  LOCAL AND SESSION STORAGE  - browser-based persistence of data
 *    - LOCAL STORAGE persists so long as you don't clear browser cache/history
 *    - SESSION STORAGE persists so long as the session is open / browser doesn't close 
 * 
 *  - .getItem()
 *  - .setItem()
 *  - .removeItem()
 *  - .clear()
 * 
 *  - Saving to local storage requires key:value pairs. 
 *    - Must be a string. 
 *    - JSON.stringify() will turn arrays and objects into strings
 *    - JSON.parse() will turn strings into JSON
 */

 // SET LOCAL+SESSION STORAGE ITEM

 //set Items
//  localStorage.setItem('name', 'edge');
//  localStorage.setItem('age', 'too old');
// //  sessionStorage.setItem('name', 'Dani');
// // localStorage.removeItem('name');

// // get Items
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear items
// localStorage.clear();

// console.log(name, age);

//Add form values to local storage
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = document.getElementById('task').value;
  
  let tasks; 

  // check if there's something in localStorage
  if(localStorage.getItem('tasks') === null) {
    //if not, set tasks to an empty array
    tasks = [];
  } else { // if there is something there
    // get the string in localStorage
    // set tasks to an array from existing item 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  //post-if-statement:
  // push task from submit to tasks array
  tasks.push(task);
  
  // reset localStorage tasks
  // pass in array converted to string
  localStorage.setItem('tasks', JSON.stringify(tasks));
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => console.log(task));
console.log(tasks);



