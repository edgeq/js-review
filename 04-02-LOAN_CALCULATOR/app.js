// UI VARIABLES
// const submit = document.querySelector('.btn');
const formSubmit = document.getElementById('loan-form')

// EVENT LISTENERS
// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(e.type);
// })

formSubmit.addEventListener('submit', calcResults);

// LOGIC
function calcResults(e) {
    e.preventDefault();
    //$ amount
    const amount = document.getElementById('amount');
    //% interest
    const interest = document.getElementById('interest');
    // years
    const years = document.getElementById('years');
    // monthly payment
    const monthlyPayment = document.getElementById('monthly-payment');
    //total payment
    const totalPayment = document.getElementById('total-payment');
    // total interest
    const totalInterest = document.getElementById('total-interest');
    // amount divided by years * interest



}
console.log(formSubmit)