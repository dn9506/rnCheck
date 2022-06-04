import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

interface ITodos {
  id: string;
  title: string;
}

async function loadAsync() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bolt": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState("0");
  const [todos, setTodos] = useState<ITodos[]>([
    { id: "1", title: "111111111" },
  ]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAsync}
        onError={error=> console.log(error)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

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
            setTodoId("0");
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
  const updateTodo = (id: string, title: string) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
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
    content = (
      <TodoScreen
        goBack={() => setTodoId("0")}
        todo={selectedTodo}
        onRemove={removeTodo}
        onSave={updateTodo}
      />
    );
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
