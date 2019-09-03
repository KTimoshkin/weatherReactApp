import React from 'react';

const Form = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Город" required/>
            <button>Узнать погоду</button>
        </form>
    );
}

export default Form;