import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

interface IMainScreen {
  todos: { id: string; title: string }[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  openTodo: (id:string) => void;
}

export const MainScreen: React.FC<IMainScreen> = ({
  addTodo,
  todos,
  removeTodo,
  openTodo
}) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todo id={item.id} title={item.title} onRemove={removeTodo} onOpen={openTodo}/>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({});
