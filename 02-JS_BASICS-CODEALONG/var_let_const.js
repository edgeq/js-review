/** 
 * Variables + Declarations
 * var, let, & const
 */

var name = 'John Doe';
console.log(name);

// REASSIGN EXISTING VARIABLES - also works with `let`
name = 'Steve Smith';
console.log(name);

//Initialize variables
var greeting;
console.log(greeting); // undefined
greeting = 'Hello';
console.log(greeting); // assigned

/**
 * variables can start with: _, $, or letters (recommended)
 * variables cannot start with numbers.
 * multiWord variables should use camelCase, under_score, or PascalCase
 */

// LET - identical in the GLOBAL SCOPE, advantages in block-level scopes
let name2 = 'Edge';
console.log(name2);
name2 = 'Edge Quintanilla'
console.log(name2);

//CONST - can't reassign these variables.

const name3 = 'Dani';
console.log(name3);
// Cannot reassign
// name3 = 'Dani Quintanilla';
// Must be assigned a values - yields an error
// const noValue;

// const allows you to mutate existing data but not reassign. 

//Person remains the person object, but its properties are altered.
const person = {
    name: 'Hodor',
    species: 'man/giant'
}
console.log(person);
person.name = 'Bran Stark';
person.species = 'Three-Eyed Raven';
console.log(person);

// mutate an array
const array = [2, 3, 6, 7];
console.log(array);

array.push(80);
console.log(array);

// cannot re-declare/re-assign const
// array = [2, 3, 6, 7, 90];