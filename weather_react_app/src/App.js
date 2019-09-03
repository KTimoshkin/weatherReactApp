import React, {Component} from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "0a9654b4e1b2461f8863a7bd88ba7037";

export default class App extends Component{
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const CITY_NAME = e.target.elements.city.value;

        if(CITY_NAME){
            const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`);
            const data = await API_URL.json();
            console.log(data)

            let sunrise = data.sys.sunrise,
                sunset = data.sys.sunset;
            let dateSunrise = new Date();
            let dateSunset = new Date();

            dateSunrise.setTime(sunrise);
            let sunrise_date = dateSunrise.getHours() + ":" + dateSunrise.getMinutes() + ":" + dateSunrise.getSeconds();

            dateSunset.setTime(sunset);
            let sunset_date = dateSunset.getHours() + ":" + dateSunset.getMinutes() + ":" + dateSunset.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: ""
            });
        }
    }

    render() {
        return(
            <div>
                <Info></Info>
                <Form getWeather={this.getWeather}></Form>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                ></Weather>
            </div>
        );
    }
}