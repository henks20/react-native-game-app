import { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, Alert } from "react-native";

import { Title } from "../../components/Title/Title";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { NumberContainer } from "../../components/NumberContainer/NumberContainer";
import { Card } from "../../components/Card/Card";
import { InstructionText } from "../../components/InstructionText/InstructionText";

const generateRandomNumberBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minNumber = 1;
let maxNumber = 100;

export const GameScreen = (props) => {
  const { userNumber, onGameOver } = props;
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumberBetween(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Note: It's solution for Android (iOS has SafeAreaView in App.js)
    padding: StatusBar.currentHeight,
  },
});
