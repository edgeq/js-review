/** 
 * Object.create  
 *  - create prototypes inside of a parent object
 *  - different prototype functions
 */

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const dani = Object.create(personPrototypes);
dani.firstName = 'Dani';
dani.lastName = 'McLaren';
dani.age = 31;

console.log(dani.greeting());

const edge = Object.create(personPrototypes, {
    firstName: { value: 'Edge' },
    lastName: { value: 'Quintanilla' },
    age: { value: 32 }
});

console.log(edge.greeting());

dani.getsMarried(edge.lastName);
console.log(dani.greeting());