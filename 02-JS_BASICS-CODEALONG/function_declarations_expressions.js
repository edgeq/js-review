/**
 * FUNCTION DECLARATIONS + EXPRESSIONS
 */

 // DECLARTAIONS 
 function greet(name = 'name', title = 'title'){
    //ES5 Way of setting default arguments
    //  if (typeof name === 'undefined') { name = 'name' }
    //  if(typeof title === 'undefined'){title = 'title'}


    return `hello ${title}. ${name}`;
 }

 // greet() returns a value. console.log() takes that function's output and prints the value to the console.
    //  console.log(greet('Edge', 'Mr')); // log what greet outputs

// FUNCTION EXPRESSIONS - putting a function inside a variable - useful for hoisting and closures
const square = function(x = 9) {
    return x * x;
};

console.log(square(4));

//IIFE - immediately invocable function expressions
// (function(){
//     console.log('IIFE RAN');
// })();
(function (name = 'You') {
    console.log(`Hello ${name}`);
})('Edge');

// PROPERTY METHODS - Functions inside objects are called methods
const todo = {
    add: function(){
        console.log('Add task')
    },
    edit: function(id) {
        console.log(`Edit task ${id}`)
    }
}

todo.delete = function(id){
    console.log(`task ${id} deleted`);
}

todo.add();
todo.edit(3);
todo.delete(2);