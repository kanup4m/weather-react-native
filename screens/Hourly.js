import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import HourList from '../components/hourList'
export default function Hourly() {
    return (
        <View style={styles.container}>
            <HourList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    }
})