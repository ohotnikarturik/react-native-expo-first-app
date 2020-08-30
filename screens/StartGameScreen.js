import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constant/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numerInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Namber has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    setEnteredValue("");
    Keyboard.dismiss()
  };

  let confirmedInputOutput;

  if (confirmed)
    confirmedInputOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title={'Start Game'} onPress={ () => props.onStartGame(selectedNumber) } />
      </Card>
    )

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>The Game Screen</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.inputTitle}>Select a number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            placeholder="Enter..."
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            maxLength={2}
            onChangeText={numerInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={"Reset"}
                onPress={resetInputHandler}
                color={Colors.red}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"Confirm"}
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedInputOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  inputTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 100,
    textAlign: "center",
    fontSize: 20,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});


export default StartGameScreen