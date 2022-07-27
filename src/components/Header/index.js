import { Formik } from 'formik'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { useWeather } from '../../context/WeatherContext'
import { cities } from '../../data/cities'
function Header() {
    const { city, setCity } = useWeather();
    const { setTheme } = useTheme();
    const handleColor = () => {
        setTheme(Math.floor(Math.random() * 5))
    }

    return (
        <Formik initialValues={{ city: city }} onSubmit={values => {
            setCity(values.city)
        }}>
            {({
                values,
                handleChange,
                handleSubmit
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className="row g-3 mb-2 mt-2">
                    <div className="col-md-8">
                        <select name='city' defaultValue={city} className="form-select" onChange={handleChange} >
                            {cities && cities.map((city, index) => (
                                <option key={index} value={city.toLocaleLowerCase()}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button type='submit' className='btn btn-primary mr-2'>Select City</button>

                    </div>

                    <div className="col-md-2">
                        <button type='button' className='btn btn-primary' onClick={handleColor}>Change Theme Randomly</button>
                    </div>


                </form>
            )}

        </Formik>
    )
}

export default Header