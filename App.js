import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
