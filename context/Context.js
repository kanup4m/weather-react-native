import React, { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location'
import { KEY } from 'react-native-dotenv'

export const LocalContext = createContext()
// const KEY = '083e381bc5a1ba0fc052f4988ccde42e'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall?'

export default function ContextProvider(props) {
    const [errorMessage, setErrorMessage] = useState(null)
    const [data, setWeather] = useState(null)
    const [units, setUnits] = useState('metric')
    const [language, setLanguage] = useState('en')
    useEffect(() => {
        load()
    }, [units, language])

    async function load() {
        setWeather(null)
        try {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
                setErrorMessage('Location is required to run the app')
                return
            }
            const location = await Location.getCurrentPositionAsync()
            const { latitude, longitude } = location.coords
            const url = `${BASE_URL}lat=${latitude}&lon=${longitude}&lang=${language}&units=${units}&appid=${KEY}`
            const response = await fetch(url)
            const result = await response.json()
            if (response.ok) {
                setWeather(result)
            }
            else {
                setErrorMessage(result.message)
            }

        }
        catch (error) {
            setErrorMessage(error.message)
        }
    }
    return (
        <LocalContext.Provider value={{ data, errorMessage, load, units, setUnits, language, setLanguage }}>
            {props.children}
        </LocalContext.Provider>
    );
}



