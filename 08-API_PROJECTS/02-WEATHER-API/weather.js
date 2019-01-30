class Weather {
    constructor(city, state) {
            this.base_url = 'http://api.openweathermap.org/data/2.5/weather';
            this.apiKey = '0f47edc07005feade8890c6993c3928a';
            this.city = city;
            this.state = state;
            this.unit = 'imperial';
        }
        // fetch weather from api
    async getWeather() {
        const weatherResponse = await fetch(`${this.base_url}?q=${this.city}&units=${this.unit}&APPID=${this.apiKey}`);

        const weather = await weatherResponse.json();

        return weather

    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }


}