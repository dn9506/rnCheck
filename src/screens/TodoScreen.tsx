import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

interface ITodoScreen {
    goBack: () => void;
    todo: {id: string, title: string}
}

export const TodoScreen: React.FC<ITodoScreen> = ({goBack, todo}) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Back" onPress={goBack}/>
    </View>
  );
};

const style = StyleSheet.create({});
