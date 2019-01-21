/** 
 * Prototypal Inheritance  
 *  - each object has a prototype.
 *  - the prototype is an object itself
 *  - all objects inherit properties and methods from their prototype
 * 
 */

//Person Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// CUSTOMER CONSTRUCTOR
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}
//Inherit Person Prototype methods
Customer.prototype = Object.create(Person.prototype);
//Make Customer.prototype return Customer instead of Person
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);
// Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company`;

}
console.log(customer1.greeting());