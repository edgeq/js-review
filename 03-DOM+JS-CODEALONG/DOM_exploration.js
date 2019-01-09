let val;
val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.contentType;

val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[2];
val = document.links[0].id;
val = document.links[0].classList;
val = document.links[1].className;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// Turn HTML Colletions into Arrays
let scripts = document.scripts;

scriptsArr = Array.from(scripts)

scriptsArr.forEach(script => console.log(script.getAttribute('src')));

// console.log(scripts);