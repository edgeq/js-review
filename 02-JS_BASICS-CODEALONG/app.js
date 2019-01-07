/** 
 * DATA TYPES - two types of data types
 * 
 * PRIMITIVE vs REFERENCE
 * 
 * PRIMITVE = STORED IN STACK
 * accessed by its actual value in variable
 *  - string
 *  - number (integers, decimals, floats)
 *  - boolean
 *  - null (intentionally empty value)
 *  - undefined
 *  - symbols 
 * 
 * REFERENCE = STORED IN HEAP
 * data not stored in variable, but by reference. considered objects
 *  - arrays
 *  - object literals
 *  - functions
 *  - dates
 * 
 * JS IS A DYNAMICALLY TYPED LANGUAGE
 *  - variables can hold any type of data and be re-assigned to any type of data
 *  - variables do not need to be contricted to a data type.
 * 
 */
const typedVar = 'this is a string';
console.log(typeof typedVar);

const typedVar2 = 3999;
console.log(typeof typedVar2);

const typedVar3 = ['234', 345, [1, 2, 3]];
console.log(typeof typedVar3);

const typedVar4 = {
    type: 'object',
    literal: true
}
console.log(typeof typedVar4);