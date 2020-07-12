import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Image, Dimensions } from 'react-native';
import WeatherInfo from '../components/weatherInfo'
import UnitPicker from '../components/unitPicker'
import { colors } from '../utils/index'
import ReloadIcon from '../components/reloadIcon'
import WeatherDetails from '../components/weatherDetail';
import { LocalContext } from '../context/Context'
import LangPicker from '../components/LangPicker';



const { PRIMARY_COLOR, SECONDARY_COLOR } = colors
export default function HomePage() {
    const { width, height } = Dimensions.get("window")

    const { data, errorMessage, load, units } = useContext(LocalContext)
    if (data) {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                    {/* <UnitPicker /> */}
                    <ReloadIcon />
                    <WeatherInfo currentWeather={data} />
                    {/* <LangPicker /> */}
                </View>
                <WeatherDetails currentWeather={data} unitsSystem={units} />
            </View>
        );
    }
    else if (errorMessage) {
        return (
            <View style={styles.container}>
                <ReloadIcon />
                <Image
                    source={require('../assets/error.png')}

                    resizeMode='contain'
                    style={{
                        maxHeight: height / 3,
                        maxWidth: width,
                        marginBottom: 70
                    }}

                />
                <Text style={{ textAlign: "center", padding: 30, color: SECONDARY_COLOR, fontSize: 20 }}>{errorMessage}</Text>
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
