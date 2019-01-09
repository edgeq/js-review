var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//FORM SUBMIT EVENT
form.addEventListener('submit', addItem);

// REMOVE ITEM EVENT
itemList.addEventListener('click', removeItem);

// FILTER EVENT
filter.addEventListener('keyup', filterItems);

//FORM SUBMIT FUNCTION
function addItem(e) {
  e.preventDefault();

  //Get Input Value
  var newItem = document.getElementById('item');
  newItem = newItem.value;
  console.log(newItem);

  //Create new li ELEMENT
  var li = document.createElement('li');
  //Add class
  li.className = 'list-group-item';
  // console.log(li);

  //Add textNode with input Value
  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);
  // create delete button
  var deleteBtn = document.createElement('button');
  // ADD framework classes
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //make an X inside button
  deleteBtn.appendChild(document.createTextNode('X'));
  // add button to list
  li.appendChild(deleteBtn);

}

// REMOVE ITEM FUNCTION
function removeItem(e){
  e.preventDefault();

  if (e.target.classList.contains('delete')) {
    if(confirm('are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

}

// FILTER ITEMS FUNCTION
function filterItems(e) {
  // text convert to lowercase
  var text = e.target.value.toLowerCase();
  // Get item list
  var items = itemList.getElementsByTagName('li');
  // console.log(items) -> logs HTML collection;
  // Need to convert HTML collection into array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    // console.log(itemName);
    // Show or hide on matched text input
    if (itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
