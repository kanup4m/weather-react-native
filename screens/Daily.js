import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, Dimensions } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { LocalContext } from '../context/Context'
import ReloadIcon from '../components/reloadIcon'
import DailyList from '../components/DailyList'
import Constant from 'expo-constants'
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function Daily() {
    const { data, errorMessage } = useContext(LocalContext)
    const { width, height } = Dimensions.get("window")

    if (data) {
        return (
            <View style={styles.container}>
                <DailyList />
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
        marginBottom: 20,
        marginTop: 40,

    }
})


