import React from 'react'
import './Weather.css';


export default function Weather(props) {
        return (
            <div className="weather-container">
                <h3>{props.city}</h3>
                <img className="weather-icon" src={props.icon} alt="weather-icon"/>
                <h1 className="temperature">{props.temp}°</h1>
                <h3 className="max-min-temp">{props.temp_min}°/{props.temp_max}°</h3>
                <h2>{props.description}</h2>
            </div>
                
        )
}
