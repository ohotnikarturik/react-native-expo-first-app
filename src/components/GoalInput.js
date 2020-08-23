import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export const GoalInput = ({ onAddGoal }) => {
  const [enterGoal, setEnterGoal] = useState('');

  const onChangeHandler = (inputValue) => {
    setEnterGoal(inputValue);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onChangeHandler}
        value={enterGoal}
        style={styles.input}
        placeholder="Enter..."
      />
      <Button
        onPress={() => {
          onAddGoal(enterGoal);
          setEnterGoal('')
        }}
        title="ADD"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
