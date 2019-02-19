// ITERATORS
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false} :
      {done: true}
    }
  }
}

// NAMES ARRAY
const namesArr = ['Edge', 'Dani', 'Ricky', 'Luis', 'Cara', 'Zed'];

// INIT ITERATOR
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());

