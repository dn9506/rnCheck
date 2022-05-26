import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo:React.FC = (props) => {
    return (
        <View style={styles.block}>
            <TextInput />
            <Button title="Add" />

        </View>
    )
}

const styles = StyleSheet.create({
    block:{

    }

})