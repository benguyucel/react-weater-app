import { createContext, useContext, useEffect, useState } from "react";
import { ApiUrl } from "../api";
import axios from 'axios'

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState("bursa")
    const values = { weather, setWeather, city, setCity }
    useEffect(() => {
        axios.get(ApiUrl(city)).then(res => res.data).then(res => setWeather(res.days));
    }, [city])
    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
}


export const useWeather = () => useContext(WeatherContext)