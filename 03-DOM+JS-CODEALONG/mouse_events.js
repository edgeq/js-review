/**
 *  MOUSE EVENTS 
 */

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//CLICK
clearBtn.addEventListener('click', runEvent);
// DOUBLE CLICK
clearBtn.addEventListener('dblclick', runEvent);
// MOUSE DOWN
clearBtn.addEventListener('mousedown', runEvent);
//MOUSE UP
clearBtn.addEventListener('mouseup', runEvent);
//MOUSE ENTER
card.addEventListener('mouseenter', runEvent);
//MOUSE LEAVE
card.addEventListener('mouseleave', runEvent);
//MOUSE OVER - for nested elements
card.addEventListener('mouseover', runEvent);
//MOUSE OUT - for nested elements
card.addEventListener('mouseout', runEvent);
// MOUSE MOVE
card.addEventListener('mousemove', runEvent);

// EVENT HANDLER 
function runEvent(e) {
    e.preventDefault();
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
