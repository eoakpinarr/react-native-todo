import { View, Text } from 'react-native'
import React from 'react'
import styles from './NumberOfAction.style'

const NumberOfAction = ({ list }) => {

    const filterList = list.filter(e => !e.isDone)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yapılacaklar</Text>
            <Text style={styles.text}>{filterList.length}</Text>
        </View>
    )
}

export default NumberOfAction