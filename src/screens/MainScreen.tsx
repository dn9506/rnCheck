import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

interface IMainScreen {
  todos: { id: string; title: string }[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  openTodo: (id: string) => void;
}

export const MainScreen: React.FC<IMainScreen> = ({
  addTodo,
  todos,
  removeTodo,
  openTodo,
}) => {
  let content = (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Todo
          id={item.id}
          title={item.title}
          onRemove={removeTodo}
          onOpen={openTodo}
        />
      )}
    />
  );

  if (todos.length === 0) {
    content = (
      <View style={style.imgWrap}>
        <Image source={require("../../assets/no-items.png")} />
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const style = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
});
