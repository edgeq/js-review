/**
 * SCOPE WITH VAR LET AND CONST
 */

//GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// function scope - does not affect global scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);

}

test();


//BLOCK SCOPE - var is reassigned in the Global scope. let and const remain
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('IF scope: ', a, b, c);

}

//using var changes the global value
// for (var a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`);

// }

//a is unchanged in the global scope
for (let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);

}

console.log('Global Scope: ', a, b, c);