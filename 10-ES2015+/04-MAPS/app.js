// MAPS = key-value pairs - can use ANY tupe as a key or value: '', [], {}, etc..
const map1 = new Map();

//set keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};


// set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// // Get values by key
//   console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count value of map
//   console.log(map1.size);

// LOOP with FOR...OF to get keys and values
//   for(let [key, value] of map1){
//     console.log(`${key} = ${value}`);
//   }

// //Iterate Keys
//   for (let key of map1.keys()){
//     console.log(`${key}`);
//   }

// //Iterate Values
//   for (let value of map1.values()){
//     console.log(`${value}`);
//   }


// loop with forEach
  // map1.forEach((value, key) => console.log(`${key}: ${value}`));

// CONVERT TO ARRAYS
// create an array of key value pairs
  const keyValArr = Array.from(map1);
  console.log(keyValArr);
//create array from values
const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);