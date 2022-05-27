import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

interface IAddTodo {
  onSubmit: (title: string) => void;
}

export const AddTodo: React.FC<IAddTodo> = (props) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Task is empty. Please fill in...");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Write task name..."
        autoCorrect={false}
        autoCapitalize={"none"}
      />
      <Button title="Add to List" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    padding: 10,
  },
});
