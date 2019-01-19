/** 
 * BUILT IN CONSTRUCTORS  
 * 
 */

//STRING
const name1 = 'Jeff';
const name2 = new String('Jeff');

name2.foo = 'BAR'
    // console.log(name2);

console.log(typeof name2);
// Will log No because of strict equality
if (name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}