import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, Dimensions } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { LocalContext } from '../context/Context'
import ReloadIcon from '../components/reloadIcon'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function Daily() {
    const { data, errorMessage } = useContext(LocalContext)
    const { daily } = data
    const { width, height } = Dimensions.get("window")

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>7-Day Weather</Text>
            <FlatList
                data={daily}
                renderItem={({ item }) =>

                    <View style={styles.daily} >
                        {
                            item.weather.map(function (item2) {
                                const stamp = item.dt
                                const dateObj = new Date(stamp * 1000);
                                const utcString = dateObj.toUTCString();
                                const time = utcString.slice(5, -13);
                                return (
                                    <View style={{ marginBottom: 10, marginLeft: '35%' }} key={item.dt}>
                                        <Text style={{ ...styles.textSecondary }}>{time}</Text>
                                        <Text style={{ textTransform: 'capitalize', }}>{item2.description}</Text>
                                    </View>
                                )
                            })}
                        <View style={styles.weatherDetailsRow}>
                            <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                                <View style={styles.weatherDetailsRow}>
                                    <MaterialCommunityIcons name="trending-down" size={24} color={PRIMARY_COLOR} />
                                    <View style={styles.weatherDetailsItems}>
                                        <Text>Min :</Text>
                                        <Text style={styles.textSecondary}>{item.temp.min} °</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.weatherDetailsBox}>
                                <View style={styles.weatherDetailsRow}>
                                    <MaterialCommunityIcons name="trending-up" size={30} color={PRIMARY_COLOR} />
                                    <View style={styles.weatherDetailsItems}>
                                        <Text>Max :</Text>
                                        <Text style={styles.textSecondary}>{item.temp.max} °</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR }}>
                            <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                                <View style={styles.weatherDetailsRow}>
                                    <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
                                    <View style={styles.weatherDetailsItems}>
                                        <Text>Humidity :</Text>
                                        <Text style={styles.textSecondary}>{item.humidity} %</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.weatherDetailsBox}>
                                <View style={styles.weatherDetailsRow}>
                                    <MaterialCommunityIcons name="weather-windy" size={30} color={PRIMARY_COLOR} />
                                    <View style={styles.weatherDetailsItems}>
                                        <Text>Wind Speed :</Text>
                                        <Text style={styles.textSecondary}>{item.wind_speed} m/s</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR }}>
                            <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                                <View style={styles.weatherDetailsRow}>
                                    <MaterialCommunityIcons name="weather-cloudy" size={30} color={PRIMARY_COLOR} />
                                    <View style={styles.weatherDetailsItems}>
                                        <Text>Clouds :</Text>
                                        <Text style={styles.textSecondary}>{item.clouds} %</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.weatherDetailsBox}>
                                <View style={styles.weatherDetailsRow}>
                                    <MaterialCommunityIcons name="weather-pouring" size={30} color={PRIMARY_COLOR} />
                                    <View style={styles.weatherDetailsItems}>
                                        <Text>Rain :</Text>
                                        <Text style={styles.textSecondary}>{item.rain} mm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ View>
                }
                keyExtractor={item => item.dt.toString()}
            />
        </View>


    )



}



const styles = StyleSheet.create({
    daily: {
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },
    text: {
        color: PRIMARY_COLOR,
        fontSize: 25,
        marginLeft: "30%",
        marginBottom: 20,
        marginTop: 10,

    }
})


