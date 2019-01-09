// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// console.log(itemList);

// parentNode - finds html elements and objects within and outside of <body>
// console.log("parentNode goes as far back as " + itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
// console.log( itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
//
// // itemList.parentNode.style.backgroundColor = "#6a6a6a";
// // console.log(itemList.parentNode.parentNode);
//
// // parentElement - finds HTML elements within the <body> of document
// console.log("parentElement stays inside HTML tag " + itemList.parentElement.parentElement.parentElement.parentElement);
// console.log( itemList.parentElement.parentElement.parentElement.parentElement);
// itemList.parentElement.style.backgroundColor = "#6a6a6a";

// childNodes
// console.log(itemList.childNodes); --> this is more machine-readable
//this is more human-readable
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="lightblue";
//
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Sup Dawg";

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "test";

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="#BADA55";

// CREATING ELEMENTS IN DOM //

// createElement


  // Create a div
  var newDiv = document.createElement('div');
  console.log(newDiv);
  // Add class
  newDiv.className = 'card';
  // Add id
  newDiv.id = 'hello1';
  // Add attr
  newDiv.setAttribute('title', 'Hello Div');
  // style Div
  newDiv.style.color = 'black';
  newDiv.style.height = '300px';
  newDiv.style.width = '300px';
  newDiv.style.textAlign = 'center';
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'center';
  // Create text node
  var newDivText = document.createTextNode('Sup World');
  // Add text to div
  newDiv.appendChild(newDivText);



// ADD CREATED ELEMENTS TO DOM //
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
