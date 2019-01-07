/** 
 * Data Type Conversion
 */

 let val;

 // Number to String
 val = String(555);
 val = String(4+4);
 //Boolean to String
 val = String(true);
 //Date to String
 val = String(new Date());
 //Array to String
 val = String([1, 2, 3, 4]);

//  To String Methods
val = (5).toString();
val = (false).toString();

//STRING TO NUMBER
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);

val = parseInt('100.30'); // count integer
val = parseFloat('100.31');


 //OUTPUTS
//  console.log(val);
//  console.log(typeof val);
// //  console.log(val.length); // only works on strings
// console.log(val.toFixed(2)); //toFixed works for decimals

// type coersion - forcing one datatype to become another
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);

 

 
 