/**
 *   Symbols give a whole new sense of purpose to Objects
 *    - they provide a kind of hidden under layer to Objects
 *    - not iterable over,
 *    - not fetched using the already existing Reflection tools
 *    - guaranteed not to conflict with other properties in the object!
 *
 * In reality, Symbols are just a slightly different way to attach properties to an Object
 *
 * For more: https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
 *
 *  Symbols in Javascript can provide access level uniqueness to objects.
 *  It's worthwhile to have a basic understanding of them and their various use-cases.
 *
 *  static properties that expose several members of built-in objects,
 *  have static methods that expose the global symbol registry,
 *  resembles a built-in object class but is incomplete as a constructor
 *    because it does not support the syntax "new Symbol()".
 *
 *  SYMBOLS - Part of ES6 standard.
 *    unique identifiers
 *    pure primitive type
 *    no two can be the same.
 *
 */

//  const sym1 = Symbol();
//  const sym2 = Symbol('sym2');

//  console.log(sym1);
//  console.log(sym2);
//  console.log(typeof sym2);
//  console.log(Symbol('123') === Symbol('123')); //false - symbols are never the same
// //  console.log(`Hi, ${String(sym1)}`);
//  console.log(`Hi, ${sym1.toString()}`);

 // UNIQUE KEYS - KIND OF HIDDEN
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);
console.log(myObj.KEY2); // undefined

// Symbols can't be looped through. They are not 'enumerable'

for(let i in myObj) {
  console.log(`${i}: ${myObj}`);
}

// symbols are ignored when using JSON.stringify
console.log(JSON.stringify({key:'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]:'prop'}));
