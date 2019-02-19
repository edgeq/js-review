let re;
re = /hello/i;

// METACHARACTER SYMBOLS
re = /^h/i; // ^ = starts with;
re = /world$/i; // $ = ends with;
re =/^hello$/i; // ^...$ = starts & ends with
re =/^h.llo$/i; // . = any single value at the dot
re =/ *llo/i; // . = any values from the asterisk to the ending
re =/gre?a?y/i; // ? = optional value. e? e is optional
re =/gre?a?y\?/i; // \? = backslashes  escape characters

// Character Sets - [ ]
re = /gr[ae]y/i; //must be an 'a' or 'e'
re = /[GF]r[ae]y/i; // you can have more than one character set in a given regex
re = /[GF]r[ae]y/i; //must be an 'G' or 'F'
re = /[^GF]r[ae]y/i; // match anything BUT G or F
re = /[A-Z]r[ae]y/; // match any upper case letter in range
re = /[a-z]r[ae]y/; // match any lower case letter in range
re = /[A-Za-z]r[ae]y/; // match any letter
re = /[0-9]r[ae]y/; // match digits in range
re = /[0-9][0-9]r[ae]y/; // match digits in range

// BRACES - { } - QUANTIFIERS
re = /Hel{2}o/i //must occur exaclty {*} amount of times
re = /Hel{2,4}o/i // must occur between {*, *} amount of times
re = /Hel{2,}o/i; // must occur at least {*,} amount of times

// PARENTHESES ( ) - GROUPING
re = /([0-9]x){3}/i; // number and the letter x, 3 times in succession.
re = /([0-9][A-Za-z]){3}/i; // any number and any letter, 3 times in succession.
re = /^([0-9][A-Za-z]){3}$/i; // start and end with any number and any letter, 3 times in succession.


//Literal Characters
//String to match
const str = '3a2b1c';

//Log Results
const result = re.exec(str);
console.log(result);

function regexTest(re, str){
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

regexTest(re, str);