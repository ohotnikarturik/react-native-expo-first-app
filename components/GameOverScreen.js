import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

import Colors from "../constant/colors";
import NumberContainer from "./NumberContainer";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOverText}>Game is over!</Text>
      <NumberContainer>Number of rounds: {props.roundsNumber}</NumberContainer>
      <NumberContainer>Number was: {props.userNumber}</NumberContainer>
      <Button title='NEW GAME' onPress={props.onNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverText: {
    color: Colors.red,
    fontSize: 40,
    marginBottom: 20
  }
});

export default GameOverScreen;
