import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enterGoal, setEnterGoal] = useState("");

  const changeHandler = (inputValue) => {
    setEnterGoal(inputValue);
  };

  const addGoalHandler = () => {
    onAddGoal(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={changeHandler}
          value={enterGoal}
          style={styles.input}
          placeholder="Enter..."
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={"CANCEL"} onPress={onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="ADD" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  button: {
    width: '40%'
  }
});
