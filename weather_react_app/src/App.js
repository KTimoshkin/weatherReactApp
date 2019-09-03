import React, {Component} from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "0a9654b4e1b2461f8863a7bd88ba7037";

export default class App extends Component{

    getWeather = async (e) => {
        e.preventDefault();
        const CITY_NAME = e.target.elements.city.value;
        const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`);
        const data = await API_URL.json();
        console.log(data);
    }

    render() {
        return(
            <div>
                <Info></Info>
                <Form getWeather={this.getWeather}></Form>
                <Weather></Weather>
            </div>
        );
    }
}