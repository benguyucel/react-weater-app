import { Formik } from 'formik'
import React from 'react'
import { useIconSet } from '../../context/IconSetProvider';
import { useTheme } from '../../context/ThemeContext';
import { useWeather } from '../../context/WeatherContext'
import { cities } from '../../data/cities'
function Header() {
    const { city, setCity } = useWeather();
    const { icon, setIcon } = useIconSet()
    const handleChange = (e) => {
        setCity((city) => e.target.value)
    }
    const hanldeIconSet = (e) => {
        setIcon(e.target.value)
    }
    return (
        <>
            <div className="row g-3 align-items-center pt-2">
                <div className="col-4">
                    <select className='form-select' name="city" id="city" defaultValue={city} onChange={handleChange}>
                        {cities.map((city, idx) => (
                            <option key={idx} value={city.toLocaleLowerCase()}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="col-2">
                    <span className="form-text">
                        Current City : <b>{city.toUpperCase()}</b>
                    </span>
                </div>
                <div className="col-3 text-end">
                    <span className='form-text'>Change Color Set</span>

                </div>
                <div className="col-3 d-flex">
                    <select className='form-select' name="city" id="city" defaultValue={icon} onChange={hanldeIconSet}>
                        <option value="Color_SET1">COLOR SET 1</option>
                        <option value="Color_SET2">COLOR SET 2</option>
                        <option value="Color_SET3">COLOR SET 3</option>
                        <option value="Color_SET4">COLOR SET 4</option>
                    </select>
                </div>
            </div>

        </>
    )
}

export default Header