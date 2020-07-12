import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import UnitPicker from '../components/unitPicker';
import LangPicker from '../components/LangPicker';
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default Setting = () => {
    const { width, height } = Dimensions.get("window")

    return (
        <View>
            <Text style={{ fontSize: 30, marginTop: 40, marginLeft: "40%", color: PRIMARY_COLOR }}>Settings</Text>
            <Image
                source={require('../assets/setting.png')}

                resizeMode='contain'
                style={{
                    maxHeight: height / 3,
                    maxWidth: width,
                    marginBottom: 20
                }}

            />
            <View style={styles.container}>
                <Text style={styles.text}>Set Temperature Unit</Text>
                <UnitPicker />
                <Text style={styles.text}>Set App Language</Text>
                <LangPicker />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        color: SECONDARY_COLOR,
        marginTop: 20,
        fontSize: 25,
        marginBottom: 20

    }
})