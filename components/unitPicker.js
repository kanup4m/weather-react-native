import React, { useContext } from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { LocalContext } from '../context/Context'
import { colors } from '../utils/index'
const { BORDER_COLOR } = colors


export default UnitPicker = () => {
    const { units, setUnits } = useContext(LocalContext)
    return (
        <View style={styles.units}>
            <Picker
                selectedValue={units}
                onValueChange={(item) => setUnits(item)}
                mode="dropdown"
                itemStyle={{ fontSize: 12 }}
            >
                <Picker.Item label="°C" value="metric" />
                <Picker.Item label="°F" value="imperial" />
                <Picker.Item label="K" value="default" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    units: {
        height: 50,
        width: 100,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
})
