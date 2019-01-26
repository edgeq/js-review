/**
 * XHR OBJECTS - XML HTTP REQUEST
 * 
 * HTTP STATUS RESPONSES
 *  - 200: "OK"
 *  - 403: "Forbidden"
 *  - 404: "Not Found"
 * 
 *  XMLHttpRequest Methods: 
 *  https: //www.w3schools.com/js/js_ajax_http.asp
 *  .open(method, url, async, user, psw) 
 *     method: the request type GET or POST
 *     url: the file location
 *     async: true(asynchronous) or false(synchronous)
 *     user: optional user name
 *     psw: optional password
 * 
 *  readyState values
 *  0: request not initialized
 *  1: server connection established
 *  2: request received
 *  3: processing request
 *  4: request finished and response is ready
 * 
 */
const button = document.getElementById('button');

button.addEventListener('click', getData);

function getData() {
    //CREATE AN XHR OBJECT - XML HTTP REQUEST
    const xhr = new XMLHttpRequest(); //objects have properties and methods!

    xhr.open('GET', 'data.txt', true);
    console.log('READY STATE: ', xhr.readyState);

    // Optiona - used for loaders...
    xhr.onprogress = function() {
        console.log('READY STATE: ', xhr.readyState);


    };

    xhr.onload = function() {
        console.log('READY STATE: ', xhr.readyState);

        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;

        }
    }

    xhr.onerror = function() {
        console.log('REQUEST ERROR:');

    }
    xhr.send();
}