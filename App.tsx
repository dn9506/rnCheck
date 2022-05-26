import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

interface ITodos {
  id: string;
  title: string;
}
export default function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title="Title string" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <View>
          {todos.map((todo) => (
            <Todo todo={todo.title} key={todo.id} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {},
});
