import React from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-community/picker'
export default UnitPicker = ({ units, setUnits }) => {
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
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    units: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -30,
            },
            android: {
                top: 30,
            },
        }),

        left: 20,
        height: 50,
        width: 100,
    },
})
