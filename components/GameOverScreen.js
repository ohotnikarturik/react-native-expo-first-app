import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";

import Colors from "../constant/colors";
import NumberContainer from "./NumberContainer";
import TitleText from "./TitleText";
import MyButton from "./MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.gameOverText}>Game is over!</TitleText>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="cover"
          style={styles.img}
          source={require("../assets/img/success.png")}
          // source={{uri: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}
        />
      </View>
      <NumberContainer>Number of rounds: <Text style={styles.highlight} >{props.roundsNumber}</Text></NumberContainer>
      <NumberContainer>Number was: <Text style={styles.highlight} >{props.userNumber}</Text></NumberContainer>
      <MyButton onPress={props.onNewGame} >NEW GAME</MyButton>
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
    marginBottom: 20,
  },
  imgContainer: {
    borderWidth: 3,
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.red,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
