import React, { useEffect } from 'react'
import { imgUrl } from '../../api';
import { useIconSet } from '../../context/IconSetProvider';
import { useWeather } from '../../context/WeatherContext'
import { ConvertDay } from '../../utilities/ConvertTimeToDay';

function Weather() {
    const { weather } = useWeather();
    const { icon } = useIconSet()
    return (
        <div className="row">
            {weather && weather.map((item, index) => (
                <div className="col-md-3 mb-2" key={index}>
                    <div className="border">
                        <div className="date-container  d-flex justify-content-between p-3">
                            <span>{ConvertDay(item.datetimeEpoch)}</span>
                            <span>{item.datetime}</span>
                        </div>
                        <div className="my-2 flex-column align-items-center content d-flex justify-content-center">
                            <h2>{item.temp}°C</h2>
                            <img src={`${imgUrl()}${icon}/${item.icon}.png`} />
                        </div>
                        <div className="p-2 content-bottom d-flex justify-content-between">
                            <span> Max {item.tempmax}°C</span>
                            <span> Min {item.tempmin}°C</span>
                        </div>
                        <div className="p-2 content-bottom d-flex justify-content-between">
                            <span> Sunrise {item.sunrise}</span>
                            <span> Sunset {item.sunset}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Weather