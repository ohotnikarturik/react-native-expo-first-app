import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';


export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={'Guess a number'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
