import React from "react";
import { View, StyleSheet, Button, Image} from "react-native";

import Colors from "../constant/colors";
import NumberContainer from "./NumberContainer";
import TitleText from "./TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.gameOverText}>Game is over!</TitleText>
      <View style={styles.imgContainer}>
        <Image resizeMode="cover" style={styles.img} source={require('../assets/img/success.png')} />
      </View>
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
  },
  imgContainer: {
    borderWidth: 3,
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden"
  },
  img: {
    width: '100%',
    height: '100%',
  }
});

export default GameOverScreen;
