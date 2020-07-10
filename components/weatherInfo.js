import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default WeatherInfo = ({ currentWeather }) => {
    const {
        current: { temp },
        current: { weather },
        lat, lon
    } = currentWeather
    const [details] = weather
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.info}>
            <Image style={styles.icon} source={{ uri: iconUrl }} />
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.textCoord}>Latitude : {lat}° N</Text>
                <Text style={styles.textCoord}>Longitude: {lon}° E</Text>
            </View>
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    info: {
        alignItems: 'center',
    },
    description: {
        textTransform: 'capitalize',
    },
    icon: {
        width: 150,
        height: 150
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR
    },
    textSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10

    },
    textCoord: {
        fontSize: 10,
        color: SECONDARY_COLOR,
        fontWeight: '200',
        marginTop: 10,

    }
})