/**
 *  ASYNC RETURNS A PROMISE TO ANY FUNCTION
 *  Fully implemented in Chrome, but may need to be compiled if using in Production
 *  
 */

// async function myFunc() {
//   // return 'Hello';
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello - from Promise'), 1000)
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }


// }

// // console.log(myFunc());
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  //Await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // Wait for resolution of fetch
  const data = await response.json();
  // return once promise is resolved
  return data;
}

getUsers().then(users => console.table(users));