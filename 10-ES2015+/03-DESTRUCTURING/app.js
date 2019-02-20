// OBJECT DESTRUCTURING
const person = {
  name: 'Edge Q',
  age: 32,
  city: 'Chicago',
  gender: 'Male',
  sayHello: function(){
    console.log(`Hi`);
  }
}

// OLD ES5
  // const name = person.name,
  //       age = person.age,
  //       city = person.city;

// NEW ES6 DESTRUCTURING
const {name, age, city, sayHello} = person;
console.log(name, age, city);
sayHello();