/**
 * Arrays and Array Methods 
 *  - Store multiple values in a single variable
 *  - mutatable.
 *  - building blocks for algorithms
 */


 //create some arrays
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const numbers2 = new Array(122, 450, 33, 76, 54);
 const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
 const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

 let val;
// Length (property - not a method)
val = numbers.length;
// Check if Array
val = Array.isArray(numbers);
//Get a single value
val = numbers[0];
// Mutability - insert into array
numbers[2] = 100;
//Find index of value - .indexOf()
val = numbers.indexOf(100);
// ADD ON TO END .push()
numbers.push(69);
// ADD ON THE BEGINNING - .unshift()
numbers.unshift(666);
// REMOVE FROM END .pop()
numbers.pop();
// REMOVE FROM START - .shift();
numbers.shift();
//SPLICE .splice(position, how many to remove)
numbers.splice(2, 1); //remove at position 2, just remove 1
// Reverse the array
numbers.reverse();
//Concatenate
val = numbers.concat(numbers2);
// Sorting Arrays
val = fruit.sort();
val = numbers2.sort(function(x, y){
    return  y - x; //returns true or false - positive or negative value
}); // numbers are not automatically sorted ascending... so use a callback pattern that evaluates if one value is greater than the other. 

// FIND 
function under50(a) {
    return a < 50;
}

val = numbers2.find(under50); //this array method is called a callback or higher order function because it is a function that calls another function.


 console.log(numbers2);
 console.log(val);
 