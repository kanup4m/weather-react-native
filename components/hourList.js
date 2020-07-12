import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Switch } from 'react-native'
import { colors } from '../utils/index'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { LocalContext } from '../context/Context'
import ReloadIcon from '../components/reloadIcon'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function HourList() {
    const { data, errorMessage, } = useContext(LocalContext)
    const { hourly } = data

    const [dropdown, setDropdown] = useState(false)
    const toggleSwitch = () => setDropdown(previousState => !previousState);
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>Hourly Weather</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 20 }}>
                <Text>Detail View</Text>
                <Switch
                    trackColor={{ false: "#767577", true: SECONDARY_COLOR }}
                    thumbColor={dropdown ? PRIMARY_COLOR : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={dropdown}
                />
            </View>

            <FlatList
                data={hourly}
                renderItem={({ item }) =>
                    <View style={styles.weatherDetails}>
                        <View style={styles.weatherDetailsRow}>
                            <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                                <View style={styles.weatherDetailsRow}>
                                    {
                                        item.weather.map(function (item2) {
                                            const dt = item.dt
                                            const dateObj = new Date(dt * 1000);
                                            const utcString = dateObj.toUTCString();
                                            const time = utcString.slice(5, -7);
                                            return (
                                                <View key={item.dt}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text >{time}</Text>
                                                        <Image style={styles.icon} source={{ uri: `https://openweathermap.org/img/wn/${item2.icon}@4x.png` }} />
                                                        <Text style={styles.textSecondary}>{item.temp}°</Text>
                                                        {/* <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color={PRIMARY_COLOR} onPress={() => setDropdown(!dropdown)} /> */}

                                                    </View>

                                                    {dropdown === true ? <View>
                                                        <Text style={{ ...styles.textDesp }}>{item2.description}</Text>

                                                        <View style={{ ...styles.weatherDetailsRow, marginTop: 20 }}>
                                                            <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                                                                <View style={styles.weatherDetailsRow}>
                                                                    <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR} />
                                                                    <View style={styles.weatherDetailsItems}>
                                                                        <Text>Feels like :</Text>
                                                                        <Text style={styles.textSecondary}>{item.feels_like}°</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.weatherDetailsBox}>
                                                                <View style={styles.weatherDetailsRow}>
                                                                    <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
                                                                    <View style={styles.weatherDetailsItems}>
                                                                        <Text>Humidity :</Text>
                                                                        <Text style={styles.textSecondary}>{item.humidity} %</Text>
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
                                                                    <MaterialCommunityIcons name="weather-windy" size={30} color={PRIMARY_COLOR} />
                                                                    <View style={styles.weatherDetailsItems}>
                                                                        <Text>Wind Speed :</Text>
                                                                        <Text style={styles.textSecondary}>{item.wind_speed} m/s</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View> : null}
                                                </View>
                                            )
                                        })
                                    }
                                    {/* <View style={styles.weatherDetailsItems}>
                                        <Text style={styles.textSecondary}>{item.temp}°</Text>
                                    </View> */}
                                </View>
                            </View>

                        </View>
                    </View>
                }
                keyExtractor={item => item.dt.toString()}
            />

        </View>


    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
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
    icon: {
        width: 100,
        height: 50
    },
    textDesp: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        marginTop: 17,
        marginLeft: "30%",
        textTransform: 'capitalize',
    },
    text: {
        color: PRIMARY_COLOR,
        fontSize: 25,
        marginLeft: "30%",
    }
})