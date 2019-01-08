/**
 * WINDOW OBJECT 
 *  - the window is the global object/environment in client-side js // like host OS with node.js
 *  - the document object is part of the window object
 *  - there are things in the window object that get used ALL THE TIME
 *      - localStorage
 *      - fetch API
 *      - Navigator/geolocation object
 *      - alert(), prompt(), confirn
 * 
 */

//  console.log(window);

 // WINDOW METHODS / OBJECTS / PROPERTIES
    // ALERT
    //  alert('hi');

    // PROMPT
    // const input = prompt();
    // alert(input);

    // CONFIRM
    // if(confirm('Are you sure')){
    //     console.log('YES');
    // } else {
    //     console.log('NO');
    // }

    // HEIGHT AND WIDTH OF WINDOW
    let val;
    val = window.outerHeight;
    val = window.outerWidth;
    val = window.innerWidth;
    val = window.innerHeight;

    // SCROLL POINTS - good for scrolling animations
    val = window.scrollY;

    // LOCATION OBJECT - location on the internet
    val = window.location;
    val = window.location.hostname;
    val = window.location.href;
    val = window.location.search;

    // REDIRECT
    // window.location.href = 'http://discoverdesign.org';

    //RELOAD
    // window.location.reload();

    // HISTORY
    // window.history.go(-1); // no arguments = infinite loop
    // val = window.history.length;

    // NAVIGATOR OBJECT - has to do with the browser itself
    val = window.navigator.appName;
    val = window.navigator.appVersion;
    val = window.navigator.userAgent;
    val = window.navigator.platform;
    val = window.navigator.vendor;



    console.log(val);