/**
 * REGEX are for pattern recognition
 */

 let re;
 re = /hello/;
 re = /hello/i; //i = case insensitive
//  re = /hello/g; //g = global searchfor all instances of hello

//  console.log(re);
//  console.log(re.source);

 //test() - returns true or false 
    // const result = re.test('Hello');
    // console.log(result);

 //exec() - returns result in array or null
    // const result = re.exec('edge, hello worlds');
    // console.log(result);
    // console.log(result[0]);
    // console.log(result.index);
    // console.log(result.input);

//match() - returns result in array or null on match
    // const str = 'Hello There';
    // const result = str.match(re);
    // console.log(result);

//search() - Returns index of 1st match or -1;
    // const str = 'Hello There';
    // const result = str.search(re);
    // console.log(result);

//replace() - returns a new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Edge');
console.log(newStr);