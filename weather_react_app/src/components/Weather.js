import React, {Component} from 'react';

export default class Weather extends Component{
    render() {
        return(
            <div>
                {this.props.city &&
                    <div>
                        <p>Ваш город: {this.props.city}</p>
                        <p>Страна: {this.props.country}</p>
                        <p>Температураа: {this.props.temp}</p>
                        <p>Восход солнца: {this.props.sunrise}</p>
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                }
            </div>
        );
    }
}