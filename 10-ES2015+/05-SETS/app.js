// SETS  - Store unique values of any type. Like arrays but way more flexible

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'Edge'});
set1.add(true);
set1.add(100); // will not get added because it already exists.


const set2 = new Set([1, true, 'string']);
console.log(set1);
console.log(set2);

// GET COUNT
console.log(set1.size);
//Check for values
console.log(set1.has(100));
console.log(set1.has(50*2));
console.log(set1.has({name: 'Edge'}));

console.log(set1.has({name: 'Edge'}) === {name: 'Edge'} ); // will be false because of where this value exists...

// delete from set
set1.delete(100);
console.log(set1);

// ITERATING THROUGH SETS
//for..of
for(let item of set2){
  console.log(item);
}

for(let item of set2.keys()){
  console.log(item);
}

for(let item of set2.values()){
  console.log(item);
}

//for...each
set1.forEach((value) => {
  console.log(value);
})

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);

