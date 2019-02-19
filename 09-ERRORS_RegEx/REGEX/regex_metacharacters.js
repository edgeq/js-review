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

//Literal Characters 
//String to match
const str = 'grey?';

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