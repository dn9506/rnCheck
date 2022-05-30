import React from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

interface IEditModal {
  visible: boolean;
  onCansel: () => void;
}

export const EditModal: React.FC<IEditModal> = ({ visible, onCansel }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.wrap}>
        <TextInput />
        <Button title="Cansel" onPress={onCansel} />
        <Button title="Save" />
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
});
