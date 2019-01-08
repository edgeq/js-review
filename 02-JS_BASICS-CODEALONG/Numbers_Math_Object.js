/** 
 * Numbers + Math Object
 */

const num1 = 100;
const num2 = 50;
let val;

//SIMPLE MATH w/ NUMBERS
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // useful for getting truthy values based on divisibility

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4); //round based on decimal
val = Math.ceil(2.4); //round up
val = Math.floor(2.99); //round down
val = Math.sqrt(64); //square root
val = Math.abs(-3); //asbolute value
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 10, 55, 6, 3);
val = Math.max(2, 33, 4, 10, 55, 6, 3);
val = Math.random(); // random decimal
// you can wrap Math methods 
val = Math.floor(Math.random() * 20 + 1);



console.log(val);
