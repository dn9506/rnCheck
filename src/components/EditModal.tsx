import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";
import { THEME } from "../theme";

interface IEditModal {
  visible: boolean;
  onCansel: () => void;
  value: string;
  onSave: (value: string) => void;
}

export const EditModal: React.FC<IEditModal> = ({
  visible,
  onCansel,
  value,
  onSave,
}) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert("Error", `Min 3 simvols`);
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Write title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={60}
        />
        <View style={styles.buttons}>
          <Button
            title="Cansel"
            onPress={onCansel}
            color={THEME.DANGER_COLOR}
          />
          <Button title="Save" onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
