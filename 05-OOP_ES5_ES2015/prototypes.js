/** 
 * Prototypes Explained  
 *  - each object has a prototype.
 *  - the prototype is an object itself
 *  - all objects inherit properties and methods from their prototype
 * 
 */

// Object.prototype
//new Person() inherits Person.prototype
// you can also go up the chain from Person to Object.
//Person Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Calculate age - processes data
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name - concatenates data
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married - manipulates data
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const edge = new Person('Edge', 'Quintanilla', '06-27-1986');
const dani = new Person('Dani', 'McLaren', '03-05-1987');

console.log(dani);
console.log(edge.calculateAge());
console.log(dani.getFullName());
dani.getsMarried(edge.lastName);
console.log(dani.getFullName());
console.log(dani.hasOwnProperty('firstName'));
console.log(dani.hasOwnProperty('getFullName'));