/**
 * TEMPLATE LITERALS - Wide browser support
 */

 const name = 'Edge';
 const age = 32;
 const job = 'Digital Manager';
 const city = 'Chicago';
 let html;

 function greeting() {
     return 'hello';
 }
//  ES5 WAY
// html = '<ul>' +
//             '<li>Name: ' + name + '</li>' +
//             '<li>Name: ' + age + '</li>' +
//             '<li>Name: ' + job + '</li>' +
//             '<li>Name: ' + city + '</li>' +
//         '</ul>';

//ES6 - Template Literals or Strings
html = `<ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>Operation: ${2 + 2}</li>
            <li>Functions: ${greeting()}</li>
            <li>Ageist Claim: ${age > 30 ? 'old' : 'whipper-snapper'}</li>
        </ul>`;

document.body.innerHTML = html;