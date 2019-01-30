//Init weather object
const weather = new Weather('Chicago', 'IL');
const ui = new UI();

// weather.changeLocation('London');
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => ui.paintUi(results))
        .catch(err => console.log(err))
}