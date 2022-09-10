import { View, Image, StyleSheet, Text } from "react-native";

import { Title } from "../../components/Title/Title";
import { Colors } from "../../utils/colors";

export const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/success.png")}
          style={styles.img}
        />
      </View>
      <View>
        <Text>Your phone needed X rouns to guess the number Y.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
