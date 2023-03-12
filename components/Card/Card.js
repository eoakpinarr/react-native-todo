import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Card.style'

const Card = ({ data, completedToDo, removeToDo }) => {

    return (
        <TouchableOpacity
            onPress={() => { completedToDo(data.id) }}
            onLongPress={() => { removeToDo(data.id) }}
        >
            <View
                style={data.isDone ? styles.after_completed_container : styles.before_completed_container}>
                <Text style={data.isDone ? styles.before_completed_text : styles.after_completed_text}>{data.action}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card