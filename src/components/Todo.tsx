import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface ITodo {
  id: string;
  title: string;
  onRemove: (id: string) => void;
  onOpen: (id: string) => void;
}

export const Todo: React.FC<ITodo> = ({ id, title, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(id)}
      onLongPress={onRemove.bind(null, id)}
    >
      <View style={styles.todo}>
        <Text >{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  
});
