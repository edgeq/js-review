/**
 * EVENT LISTENERS - 'we can listen for events on any element in the DOM'
 */

// EVENT LISTENER ON THE CLEAR TASKS BUTTON
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('clicked');
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    // console.log('click calls onClick');
    let val;
    val = e; // returns event object - all event affordances here
    // val = e.target; // represents the element that the event happens on.
    // e.target.style.background = 'tomato';
    val = e.target.style;
    val = e.target.classList;
    val = e.target.innerText = 'CLICKED';
    val = e.target.classList.remove('black');
    val = e.target.style.backgroundColor = 'aquamarine';
    val = e.target.style.color = 'grey';

    // EVENT TYPE
    val = e.type;

    // TIMESTAMP
    val = e.timeStamp;

    // Window coordinates
    val = e.clientY;
    val = e.clientX;

    // Element coordinates
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
}
