import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

interface IAddTodo {
    onSubmit: (title:string) => void

}

export const AddTodo:React.FC<IAddTodo> = ( props ) => {

const pressHandler = () => {
    props.onSubmit('Test todo');

}

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title="Add to List" onPress={pressHandler}/>

        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginBottom: 15

    },
    input:{
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10
    }


})