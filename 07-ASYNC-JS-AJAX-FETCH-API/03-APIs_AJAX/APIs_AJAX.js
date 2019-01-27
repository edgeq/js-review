/**
 *  WORKING WITH EXTERNAL APIs - Chuck Norris
 * 
 */

document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(e) {
    e.preventDefault();
    const number = document.querySelector('input[type="number"]').value;
    // Get number from input field
    if (number === undefined || number === null || number === '') {
        document.querySelector('.jokes').innerHTML = '<h3>Chuck Norris needs a number</h3>';
        return;
    }
    console.log(number);
    // fetch random jokes
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const res = JSON.parse(this.responseText);
            console.log(res);
            let output = '';
            if (res.type === 'success') {
                res.value.forEach(function(joke) {
                    output += `
                    <h3>${joke.joke}</h3>
                    <hr>
                    `;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;

        }
    };
    xhr.send();


}

// TODO: Redo this using Grid/flexbox