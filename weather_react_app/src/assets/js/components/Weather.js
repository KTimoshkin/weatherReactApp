import React from 'react';

const Weather = (props) => {
    return(
        <div className="infoWeath">
            {props.city &&
            <div>
                <p>Ваш город: {props.city}, {props.country}</p>
                <p>Температураа: {props.temp}</p>
                <p>Восход солнца: {props.sunrise}</p>
                <p>Заход солнца: {props.sunset}</p>
            </div>
            }

            <p className="error">{props.error}</p>
        </div>
    );
}

export default Weather;