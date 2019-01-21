/** 
 *  ES6 CLASSES - object orientation in JS
 */

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastName) {
            this.lastName = newLastName;
        }
        //standalon methods without need for creating objects - called on last line
    static addNumbers(x, y) {
        return x + y;
    }
}

const dani = new Person('Dani', 'McLaren', '03-05-1987');
const edge = new Person('Edge', 'Quintanilla', '06-27-1986');

console.log(dani.greeting());
console.log(dani.calculateAge());
dani.getsMarried(edge.lastName);
console.log(dani.greeting());
//calling Person's static method without need to create a seperate object.
console.log(Person.addNumbers(4, 8));