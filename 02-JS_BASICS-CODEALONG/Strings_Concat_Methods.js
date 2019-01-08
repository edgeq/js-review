/**
 * STRING METHODS + CONCATENATION
 */

 const firstName = 'Edge';
 const lastName = 'Quintanilla';
 const age = 'old';
 const str = 'Hello, my name is Edge and I am a JS developer. Sometimes.'

 let val;
 val = firstName + lastName;

 // CONCATENATION
 val = firstName + ' ' + lastName;

 // APPEND
 val = 'Edgar ';
 val += 'Arnoldo';

 val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// ESCAPING
val = 'That\'s awesome'

// Length
val = firstName.length; //not a method. it's descriptive, hence it's a property

//concat
val = firstName.concat(' ', lastName);

//toUpperCase + toLowercase
val = firstName.toUpperCase();
val = lastName.toLowerCase();

//Bracket Identity
val = firstName[1];

// Index of...
val = lastName.indexOf('Q');
val = lastName.lastIndexOf('i');

//charAt loop
for (let i = 0; i < lastName.length; i++) {
    //the point here is that you can get a value from string position
    val = lastName.charAt(i);
    console.log(val);

}

// Get Last character
val = firstName.charAt(firstName.length - 1); // your first pattern! 

//Substring - pull a substring from a string
val = lastName.substring(7 /* starting value 'a' */, /* to value before 11 */ 11);


//SLICE
val = lastName.slice(0, 4);
val = lastName.slice(-6, -5); // negatives mean from end of string

//SPLIT
// val = str.split('. ');

//REPLACE
val = str.replace('Edge', 'Edgar')

// INCLUDES
val = str.includes('Edgar');

console.log(val);

 