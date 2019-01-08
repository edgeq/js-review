/**
 * COMPARISONS + CONDITIONAL LOGIC 
 */

 const id = 100;

    // //EQUAL
    // if (id == 100){
    //     console.log('id is 100')
    // } else (
    //     console.log('id is not 100')
    // )

    // // NOT EQUAL
    // if (id != 101) {
    //     console.log('id is not 101')
    // } else (
    //     console.log('id is not NOT 101')
    // )

    // // SRICT EQUALITY denotes value and typeof equality
    // if (id === 100) {
    //     console.log('id is 100 and they same type')
    // } else (
    //     console.log('is is either not 100 or not the same type or both')
    // )

    // if (id !== 100) {
    //     console.log('id is either not 100 and/or not the same type')
    // } else (
    //     console.log('id is either 100 and/or the same type')
    // )

    // TEST IF UNDEFINED
    // if(typeof id !== 'undefined') { //pattern for checking if something exists or not
    //     console.log(`The ID is ${id}`)
    // } else {
    //     console.log('no ID')

    // }

    // GREATER THAN / LESS THAN
    //    if (id <= 200) {
    //     console.log('id is less than')
    // } else (
    //     console.log('id is greater than')
    // )
    

    //ELSE IF
    const color = 'yellow';

    if(color === 'red') {
        console.log('Color is red');
    } else if(color === 'blue') {
        console.log('color is blue');
    } else {
        console.log('color is something else');
    }

    //LOGICAL OPERATORS
    const name = 'Edge';
    const age = 7;
    // && means both most be true
    if(age > 0 && age < 12){
        console.log(`${name} is a child`);
    } else if(age >=13 && age <=19) {
        console.log(`${name} is a teen`)
    } else {
        console.log(`${name} is grown`)
    }

    // or || \\
    if(age < 16 || age > 65) {
        console.log(`${name} is inelligible`)
    } else {
        console.log(`${name} is registered to run`)
    }

    // SHORTHAND CONDITIONALS
    // // TERNARY OPERATOR
    console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

    // WITHOUT BRACES ALSO WORKS
    if(id === 100) 
        console.log(`id is ${id}`)
    else
        console.log(`incorrect: id is ${id}`)

        