import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

interface ITodos {
  id: string;
  title: string;
}
export default function App() {
  const [todoId, setTodoId] = useState("0");
  const [todos, setTodos] = useState<ITodos[]>([
    { id: "1", title: "111111111" },
    { id: "2", title: "222222222" },
    { id: "3", title: "333333333" },
    { id: "4", title: "444444444" },
  ]);
  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id: string) => {
    const todo = todos.find((t) => t.id === id);

    Alert.alert(
      "Delete",
      `Are you sure wont to delete ${todo?.title}?`,
      [
        {
          text: "Delete",
          onPress: () => {
            setTodoId('0');
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
        {
          text: "Cansel",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={(id) => setTodoId(id)}
    />
  );

  if (todoId.toString() !== "0".toString()) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)!;
    content = <TodoScreen goBack={() => setTodoId("0")} todo={selectedTodo} onRemove={removeTodo}/>;
  }

  return (
    <View>
      <Navbar title="Title string" />
      <View style={styles.container}>{content}</View>
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
