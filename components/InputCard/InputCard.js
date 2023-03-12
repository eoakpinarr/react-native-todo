import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './InputCard.style'

const InputCard = ({ todo, setTodo, addTodo, isActiveBtn, setIsActiveBtn }) => {

    const changeText = text => {
        setTodo(text)
        text != '' ? setIsActiveBtn(true) : setIsActiveBtn(false);
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Yapılacak...'
                placeholderTextColor={'gray'}
                onChangeText={changeText}
                style={styles.text_container}
                value={todo}
            />
            <TouchableOpacity
                style={isActiveBtn ? styles.active_buton : styles.normal_buton}
                onPress={addTodo}
            >
                <Text style={styles.buton_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputCard