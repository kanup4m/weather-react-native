import React, { useContext } from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'
import { LocalContext } from '../context/Context'
export default function ReloadIcon() {
    const { load } = useContext(LocalContext)
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={load} name={reloadIconName} size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 60,
        right: 20,
    },
})