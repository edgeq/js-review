/**
 * SWITCH STATEMENTS
 */
const color = 'yellow';

switch (color) {
    case 'red':
        console.log('Color: RED');
        break;
    case 'blue':
        console.log('Color: BLUE');
        break;

    default:
        console.log('Color is not RED or BLUE');
        break;
}

let day;
switch(new Date().getDay()) {
    case 0:
    day = 'Sunday';
    break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 7:
        day = 'Saturday';
        break;
    default:
        console.log('the sun rises in the west...or something is wrong.');
        break;

}

console.log(`Today is ${day}`);