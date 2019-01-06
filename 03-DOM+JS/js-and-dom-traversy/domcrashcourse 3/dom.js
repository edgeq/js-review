// EVENTS //

//target the ELEMENT, attach EventListenter, call the function you want to have happen
// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
  // console.log('clickitty click clock clap');
  // document.getElementById('header-title').textContent='CLICKED';
  // document.querySelector('#main').style.backgroundColor = 'lightblue';
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  //
  var output = document.getElementById('output');
  // output.innerHTML = '<h3>' + e.target.id + '</h3>';
  //
  // console.log(e.type);

  /*  clientX+Y looks at mouse position from viewport/browser window */
  // console.log(e.clientX);
  // console.log(e.clientY);

  /* offsetX + Y  looks at mouse posision from element being clicked on */
//   console.log("X === " + e.offsetX);
//   console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
 // }

var button = document.getElementById('button');
var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
//
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// You can also do keyup, keypress
// itemInput.addEventListener('keydown', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('copy', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);


// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);



function runEvent(e) {
  e.preventDefault();
  console.log('EVENT TYPE ' + e.type);
  // console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
  // output.innerHTML = '<h3> MouseX = ' + e.offsetX + '</h3><h3>MouseY = ' + e.offsetY + '</h3>' ;
  // console.log(output.textContent);
  //
  // document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
}
