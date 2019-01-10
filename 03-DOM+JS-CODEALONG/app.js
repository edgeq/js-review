/**
 * CREATING ELEMENTS IN DOM
 */

 // CREATE ELEMENT

 const li = document.createElement('li'); //ok to use const because we're modifying the data type but not redeclarin or changing the core type
 
 li.className = 'collection-item'; // add class
 li.id = 'new-item'; // add id
 li.setAttribute('title', 'New Item'); // add a title
 li.appendChild(document.createTextNode('Listicle 02')); // add text inside the <li>

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

//Create new link element
const link = document.createElement('a'); 
link.className = 'delete-item secondary-content'; // add class
link.innerHTML = '<i class="fa fa-remove"></i>'; // add icon inside 
li.appendChild(link); // append the link and icon to the li 

 console.log(li);
 
