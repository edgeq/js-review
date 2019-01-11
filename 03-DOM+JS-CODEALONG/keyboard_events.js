/**
 *  KEYBOARD INPUTS + EVENTS 
 */

 const form = document.querySelector('form#task-form');
 const taskInput = document.getElementById('task');
 const heading = document.querySelector('h5');
 const select = document.querySelector('select');

 form.addEventListener('submit', runEvent);

//  function runEvent(e){
//      e.preventDefault();
//      console.log(`Event Type: ${e.type}`);
//      console.log(taskInput.value);
//      taskInput.value = '';
//  }

//KEY EVENTS
// taskInput.addEventListener('keydown', runEvent) // 
// taskInput.addEventListener('keypress', runEvent) // 
// taskInput.addEventListener('keyup', runEvent) // use keyup for responsive typing
// taskInput.addEventListener('focus', runEvent) // 
// taskInput.addEventListener('blur', runEvent) //      
// taskInput.addEventListener('cut', runEvent) //      
// taskInput.addEventListener('paste', runEvent) //      
// taskInput.addEventListener('copy', runEvent) //      
// taskInput.addEventListener('input', runEvent) // anything in the event listening element
 select.addEventListener('change', runEvent) // comment materialize cdn in index.html for this to work


 function runEvent(e) {
     console.log(`Event Type: ${e.type}`);
    // Keyup Actions
      console.log(e.target.value);
    //  heading.innerText = e.target.value;

 }
 