import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ITodo {
    todo: string,
    key: string,
        
}

export const Todo:React.FC<ITodo> = ({ todo }) => {
    return (<View style={styles.todo}>
        <Text>{todo}</Text>
    </View>)
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})