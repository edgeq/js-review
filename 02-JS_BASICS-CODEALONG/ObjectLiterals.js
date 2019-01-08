/** 
 * OBJECT LITERALS
 */
const person = {
    firstName: 'Edge',
    lastName: 'Quintanilla',
    birthYear: 1986,
    email: 'eq@apple.com',
    hobbies: ['music', 'cooking'],
    address: {
        city: 'Chicago',
        state: 'IL'
    },
    getAge: function(){
        return 2018 - this.birthYear; //`this` pertains to the object
    }
}

let val;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getAge();

console.log(val);
console.log(typeof val);

const people = [
    {name: 'Ichi', birthYear: 1999},
    {name: 'Dani', birthYear: 1987},
    {name: 'Cara', birthYear: 1988}
];

for(i = 0; i<people.length; i++) {
    console.log(people[i].name);
}