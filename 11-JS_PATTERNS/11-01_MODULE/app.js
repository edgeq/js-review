// modules aren't widely supported. Use a compiler like babel or webpack...

//Basic Structure

//start with an IIFE
  // (function(){

  //   //declare private vars and functions

  //   return {

  //     //declare public vars and functinos

  //   }
  // })();

  //STANDARD MODULE PATTERN

    // the IIFE is a private playgound
    const UICtrl = (function(){
      let text = 'Hello World';

      const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
      }
      // the IIFE returns some public properties/methods
      return {
        callChangeText: function() {
          changeText();
          console.log(text);
        }
      }
    })();

    // outside of our init iife, we can call publically available properties and methods...
    UICtrl.callChangeText();
    // UICtrl.changeText(); // won't work...
    console.log(UICtrl.text); // undefined///


// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item Added');
    console.log(data);
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'Edge'});
console.log(ItemCtrl.get(1));
ItemCtrl.add({id: 2, name: 'Dani'});
console.log(ItemCtrl.get(2));
