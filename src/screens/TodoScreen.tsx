import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/UI/AppCard";
import { THEME } from "../theme";
interface ITodoScreen {
  goBack: () => void;
  onRemove: (id: string) => void;
  todo: { id: string; title: string };
  onSave: (id: string, title: string) => void;
}

export const TodoScreen: React.FC<ITodoScreen> = ({
  goBack,
  todo,
  onRemove,
  onSave,
}) => {
  const [modal, setModal] = useState(false);

  const changeStateModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  const saveHandler = (value: string) => {
    onSave(todo.id, value);
    changeStateModal();
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCansel={changeStateModal}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Change" onPress={changeStateModal} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            onPress={() => onRemove(todo.id)}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 26,
  },
  card: {
    marginBottom: 10,
    padding: 15,
  },
});
