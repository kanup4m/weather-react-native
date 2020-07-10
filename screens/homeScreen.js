import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import WeatherInfo from '../components/weatherInfo'
import UnitPicker from '../components/unitPicker'
import { colors } from '../utils/index'
import ReloadIcon from '../components/reloadIcon'
import WeatherDetails from '../components/weatherDetail';
import { LocalContext } from '../context/Context'
import LangPicker from '../components/LangPicker';

// import { KEY } from 'react-native-dotenv'


const { PRIMARY_COLOR } = colors
export default function HomePage() {
    const { data, errorMessage, load, units } = useContext(LocalContext)
    if (data) {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    <UnitPicker />
                    <ReloadIcon />
                    <WeatherInfo currentWeather={data} />
                    <LangPicker />
                </View>
                <WeatherDetails currentWeather={data} unitsSystem={units} />
            </View>
        );
    }
    else if (errorMessage) {
        return (
            <View style={styles.container}>
                <ReloadIcon load={load} />
                <Text style={{ textAlign: "center" }}>{errorMessage}</Text>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: 40
    },
    main: {
        justifyContent: 'center'
    }
});
