//Init storage
const storage = new Storage();
//get stored location data
const weatherLoc = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLoc.city, weatherLoc.state);
const ui = new UI();

// weather.changeLocation('London');
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-button').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    //set location in local storage
    storage.setLocationData(city, state);

    getWeather();

    //CLOSE MODAL
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => ui.paintUi(results))
        .catch(err => console.log(err));
}