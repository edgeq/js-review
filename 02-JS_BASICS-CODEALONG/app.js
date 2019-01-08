/**
 * LOOPS + ITERATIONS 
 *  - Instruction that repeats until a condition is met 
 *  - Run the same block of code using different values each time.
 * 
 * FOR LOOPS
 * 
 * WHILE LOOPS
 * 
 * DO WHILE LOOPS
 * 
 * Array Loops 
 *  forEach, map, 
 * 
 * Object Loops
 *  forIn
 */

 //FOR LOOP - use a forLoop when the loop length is known
// for(let i = 0; i < 10; i++) {
//     if(i === 2) {
//         console.log(`${i} is my fav number`);
//         continue; // keep going
//     }
//     console.log(`Number ${i}`);

//     if(i === 5) {
//         console.log('stop on 5');
//         break; // break on condition
//     }
// }

// WHILE LOOP
// let i = 100;

// while(i < 10) {
//     console.log('Number ' + i);
//     i++; // dicey - leaving this out will lead to an infinite loop
// }

// DO WHILE - will always run at least once
// let i = 100;
// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);


// ARRAY LOOPS
const cars = ['Ford', 'Chevy', 'Toyota', 'Honda'];


// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]); 
// }

//forEach is a higher order function
// cars.forEach((car, i) => console.log(car, i));

//map 
// const users = [
//     {id: 1, name: 'John'},
//     { id: 2, name: 'Jonah' },
//     { id: 3, name: 'Kara' },
//     {id: 4, name: 'Steve'},
// ]
// // take an array of objects and return an array of object properties of `id`
// const ids = users.map(function(user) {
//     return user.id;
// })

// console.log(ids);

// OBJECT LOOPS
const user = {
    firstName: 'Edge',
    lastName: 'Quintanilla',
    age: 32,
    doSomething: function(){
        console.log('hello');
    } 
}
//for in loop
for(let x in user) {
console.log(`${x} : ${user[x]}`);
}