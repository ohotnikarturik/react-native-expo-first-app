import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { GoalInput } from "./src/components/GoalInput";
import { GoalItem } from "./src/components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  console.log("state", courseGoals);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDeleteGoal={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 50 },
});
