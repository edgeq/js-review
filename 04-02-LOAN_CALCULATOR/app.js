// UI VARIABLES
// const submit = document.querySelector('.btn');
const formSubmit = document.getElementById('loan-form');
const loader = document.getElementById('loading');
const results = document.getElementById('results');

// EVENT LISTENERS
// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(e.type);
// })

formSubmit.addEventListener('submit', function(e) {
    e.preventDefault();

    //Show LOADER
    loader.style.display = 'block';
    //Hide results
    results.style.display = 'none';

    setTimeout(function() {
      calcResults(e);
    }, 1000);
});

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

    // calculations
    // Amount as float/decimal
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    // Compute Monthly Payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x *calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
      //SHOW RESULTS
      results.style.display = 'block';
      //HIDE LOADER
      loader.style.display = 'none';

    } else {
      showError('Please Check your numbers');
    }



}

//showError
function showError(error) {
  // HIDE RESULTS + HIDE LOADER
  results.style.display = 'none';
  loader.style.display = 'none';

  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //add class
  errorDiv.className = 'alert alert-danger';
  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);
  //Clear Error after 3sec
  setTimeout(clearError, 2000);
}


function clearError(){
  document.querySelector('.alert').remove();
}
