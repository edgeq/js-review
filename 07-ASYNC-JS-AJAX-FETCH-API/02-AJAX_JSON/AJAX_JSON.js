/**
 * AJAX + JSON: making XHR requests to JSON objects and arrays
 */

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>

            </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }

    }
    xhr.send();


}

function loadCustomers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            //Format the response to JSON
            const customers = JSON.parse(this.responseText);
            console.table(customers);
            let output = '';

            // Loop through the JSON response and append them to the output variable
            customers.forEach(function(customer) {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>

                </ul>
                `;
            });
            document.getElementById('customers').innerHTML = output;
        }
        //print variable to DOM
    }
    xhr.send();
}