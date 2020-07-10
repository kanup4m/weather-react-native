import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default WeatherInfo = ({ currentWeather }) => {
    const {
        current: { temp },
        current: { weather },
        timezone,
    } = currentWeather
    const [details] = weather
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.info}>
            {/* <Text>{timezone}</Text> */}
            <Image style={styles.icon} source={{ uri: iconUrl }} />
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
        width: 100,
        height: 100
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

    }
})