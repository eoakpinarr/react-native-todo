import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NumberOfAction from './components/NumberOfAction';
import { FlatList } from 'react-native';
import InputCard from './components/InputCard';
import Card from './components/Card'

const App = () => {

    const [list, setList] = useState([]);
    const [toDo, setToDo] = useState('');
    const [isActiveBtn, setIsActiveBtn] = useState(false);

    const addToDo = () => {
        setList([...list, {
            action: toDo,
            id: Math.random() + Date.now(),
            isDone: false,
        }])
        setToDo('');
        setIsActiveBtn(false);
    }

    const completedToDo = (id) => {
        const newList = list.map(e => {
            if (e.id == id) {
                e.isDone = !e.isDone
            }
            return e;
        })
        setList(newList);
    }

    const removeToDo = (id) => {
        const copyList = list.filter(e => e.id !== id);
        setList(copyList);
    }

    const renderToDo = ({ item }) => <Card data={item} completedToDo={completedToDo} removeToDo={removeToDo} />

    return (
        <View style={styles.container}>
            <NumberOfAction list={list} />
            <FlatList
                data={list}
                renderItem={renderToDo}
            />
            <InputCard todo={toDo} setTodo={setToDo} addTodo={addToDo} isActiveBtn={isActiveBtn} setIsActiveBtn={setIsActiveBtn} />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#2C3135'

    }
})