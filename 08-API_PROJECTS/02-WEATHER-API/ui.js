class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details')
        this.humidity = document.getElementById('w-humidity');
        this.windDirection = document.getElementById('w-wind-direction');
        this.minMax = document.getElementById('w-min-max');
        this.wind = document.getElementById('w-wind');
    }


    paintUi(weather) {
        this.location.textContent = weather.name;
        let temp = weather.main.temp;


        this.desc.innerHTML = temp.toFixed(2) + '&deg; F';
        console.log(weather.weather);

        this.string.innerHTML = weather.weather[0].description;

        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)

        this.humidity.innerHTML = `Relative Humidity: ${weather.main.humidity}&percnt;`;

        this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;

        this.windDirection.textContent = `Wind Direction: ${weather.wind.deg}`;

        this.minMax.innerHTML = `Low: ${weather.main.temp_min}&deg; F       || High: ${weather.main.temp_max}&deg; F`;


    }
}