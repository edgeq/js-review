// const sayHello = function() {
//     console.log('Hello')
// }

// const sayHello = () => {
//     console.log("Hello");
// }
// One line function does not need braces
// const sayHello = () => console.log('Hello');

//One line also returns
// const sayHello = () => 'Hello';

//Return Object Literal
// const sayHello = () => ({ msg: 'Hello' });

//Pass in an argument
// const sayHello = (name) => console.log(`Hello ${name}`);

// You don't need () for single argument
// const sayHello = name => console.log(`Hello ${name}`);

//multiple parameters need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Edge', 'Quintanilla');

const users = ['Edge', 'Mario', 'Marvin', 'Patrick'];

//arrow function as a callback
const nameLengths = users.map(name => name.length)

console.log(nameLengths);

// now go clean 06-FETCH