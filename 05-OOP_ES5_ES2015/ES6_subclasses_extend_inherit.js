/** 
 *  ES6 SUB CLASSES - Extending and Inheriting
 */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); //calls parent class' constructor
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost() {
        return 500;
    }
}

const edge = new Customer('Edge', 'Quintanilla', '555-555-5555', 'Standard');

console.log(edge);
console.log(edge.greeting());
console.log(Customer.getMembershipCost());
// console.log(Person.getMembershipCost()); -- won't work. We extended Person. We didnt extend Customer.