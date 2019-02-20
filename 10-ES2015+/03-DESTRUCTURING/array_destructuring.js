let a, b;
[a, b] = [100, 200];

//rest pattern
    [a, b, c, ...rest] = [100, 200, 300, 400, 500];

    console.log(a);
    console.log(b);
    console.log(rest);
    console.log(c);

    ({a , b} = { a:100, b:200, c:300, d:400, e:500 });
    ({a , b, ...rest} = { a:100, b:200, c:300, d:400, e:500 });

    console.log(a,b);
    console.log(rest);

 // Array Destructuring
      // define an array
    const people = ['Edge', 'Dani', 'Mario'];
      //destructuring maps this new array to the contents of the people array...
    const [person1, person2, person3] = people;

    console.log(person1, person2, person3);


// Parse array returned from function
    function getPeople() {
      return people;
    }

    let person4, person5, person6;
    [person4, person5, person6] = getPeople();

    console.log(person4, person5, person6);
