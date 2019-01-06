const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach
/**
* [THIS IS THE OLD WAY]
*   for (let i = 0 ; i < companies.length; i++) {
*      console.log(companies[i].category);
*     }
* [HIGHER ORDER FUNCTION: A FUNCTION THAT RUNS ANOTHER FUNCTION]
* [ARRAY METHODS ARE HIGHER ORDER FUNCTIONS:
    - FOR LOOPS WITH OTHER FUNCTIONS BUNDLED INTO THEM]
* [SOME LOOPS LIST OUT ARRAY CONTENTS
   OTHERS EXTRACT NEW ARRAYS FROM OLD ONES
    OTHERS RETURN A SINGLE VALUE]
**/
companies.forEach( company => console.log(company.name));

//filter - CREATES new array by filtering through an existing array.
// RETURNS ARRAY OF THE SAME LENGTH OR SMALLER DEPENDING ON CONDITIONS
  const canDrink = ages.filter(age => age >= 21);
  console.log(canDrink);
  // filter for retail comanies
  const retailCompanies = companies.filter(company => company.category === "Retail");
  console.log(retailCompanies);
  //filter for companies started in the 80s
  const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);
  console.table(eightiesCompanies);

  //filter for companies that lasted at least 10 years
  const tenYrsClub = companies.filter(company => (company.end - company.start >= 10));
  console.table(tenYrsClub);


//map
/**
 * CREATES NEW ARRAYS FROM EXISTING ARRAYS BY RUNNING FUNCTIONS ON EACH ARRAY ELEMENT
 * INPUTS ENTIRE ARRAY AND OUTPUTS NEW ARRAY WITH SAME LENGTH
 */
 // CREATE array of just company names.
 const companyNames = companies.map(company => company.name);
 console.table(companyNames);

 // MAP THROUGH COMPANIES TO GET COMPANY NAME, START, AND END DATES
 const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
 console.table(testMap);

 //SQ ROOT OF ALL AGES
 const agesSqrt = ages.map(age => Math.sqrt(age));
 console.log(agesSqrt);

//sort - CREATES a new array sorted based off of condition
/**
 * return 1 or -1;
 */
 const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
 console.table(sortedCompanies);

  // ages sort = if a is less than b, put it before b.
  // const sortedAges = ages.sort((a, b) => (a < b) ? -1 : 1);
  // sort by difference in ages
  const sortedAges = ages.sort((a, b) => a - b);
  console.table(sortedAges);

//reduce - CREATES A NEW VALUE BY PASSING THE ENTIRE ARRAY INTO A FUNCTION

  //SUM AGES
  const ageSum = ages.reduce((total, age) => total + age, 0);
  console.log(ageSum);

  // TOTAL COMBINED EXPERIENCE FOR ALL COMPANIES
  const companyYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  console.log(companyYears);

// COMBINING METHODS - TRY COMBINING THESE
/**
 *
 */
