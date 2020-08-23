import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const GoalItem = ({ title, onDeleteGoal, id }) => {
  return (
    <TouchableOpacity activeOpacity={.7} onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
  },
});
