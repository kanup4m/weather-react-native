import React, { useContext } from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { LocalContext } from '../context/Context'
import { colors } from '../utils/index'
const { BORDER_COLOR } = colors

export default LangPicker = () => {
    const { language, setLanguage } = useContext(LocalContext)
    return (
        <View style={styles.lang}>
            <Picker
                selectedValue={language}
                onValueChange={(item) => setLanguage(item)}
                mode="dropdown"
                itemStyle={{ fontSize: 12 }}
            >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Hindi" value="hi" />
                <Picker.Item label="Russian" value="ru" />
                <Picker.Item label="Spanish" value="sp" />


            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    lang: {
        height: 50,
        width: 150,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
})
