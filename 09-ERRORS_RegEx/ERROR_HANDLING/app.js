/**
 * TRY CATCH is a very elegant way of handling errors
 */
const user = {email: 'jdoe@mail.com'};
 // Let's have fun with errors...
try {
  // Reference Error: an undeclared function
    // myFunction();
  //TypeError: calling a method from null
    // null.myFunction();
  // Syntax Error: 
    // eval('Hello World');
  // URI Error
    // decodeURIComponent('%');

  if(!user.name){
    throw new ReferenceError('User has no name');
  }
} catch(err) {
  console.log(err);
  // console.log(`${err.name}: Cannot call from null`);
  // console.log(err.message);
  console.log(err.name);
  // console.log(err instanceof ReferenceError);
  // console.log(err instanceof TypeError);
  


} finally {
  console.log('Finally runs regardelss of result...')
}

// console.log('Program continues... Show must go on.');