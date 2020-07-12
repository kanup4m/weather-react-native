import React, { useContext } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, Dimensions } from 'react-native'
import HourList from '../components/hourList'
import ReloadIcon from '../components/reloadIcon'
import Constant from 'expo-constants'
import { LocalContext } from '../context/Context'
import { colors } from '../utils/index'
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function Hourly() {
    const { data, errorMessage, load } = useContext(LocalContext)
    const { width, height } = Dimensions.get("window")

    if (data) {
        return (
            <View style={styles.container}>
                <HourList />
            </View>
        );
    }
    else if (errorMessage) {
        return (
            <View style={{ ...styles.container, justifyContent: 'center' }}>
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
            <View style={{ ...styles.container, justifyContent: 'center', marginTop: "50%" }}>
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight,
        backgroundColor: '#fff',
    },
    text: {
        color: PRIMARY_COLOR,
        fontSize: 25,
        marginLeft: "30%",
        marginBottom: 30
    }
})




