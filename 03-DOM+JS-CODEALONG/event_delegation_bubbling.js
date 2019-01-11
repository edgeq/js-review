/**
 *  EVENT BUBBLING AND DELEGATION - 
 *  - BUBBLING: When an event happens, it bubbles up through its parent.
 *  - DELEGATION: listen on a parent element and target children to do something. Used when elements are similar
 *  
 */

 // EVENT BUBBLING
 /* Clicking on .card-title also triggers it's parent containers...
  
document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card title');
});
document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card content');
});
document.querySelector('.card').addEventListener('click', function () {
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function () {
  console.log('col');
});
*/

// this won't work because we need to delegate events
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// EVENT DELEGATION - listening on parent and traversing down. More reliable
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // console.log('deleted item');
  // console.log(e.target);
  // if (e.target.parentElement.className === 'delete-item secondary-content' ){
  //   console.log('delete item')
  // }
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    //target parent of e.target.parentElement and remove
    e.target.parentElement.parentElement.remove();
  }
}

