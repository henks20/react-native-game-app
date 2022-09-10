import { View, Text, Pressable, StyleSheet } from "react-native";

import { Colors } from "../../utils/colors";

export const PrimaryButton = (props) => {
  const { children, onPress } = props;

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressData) =>
          pressData.pressed
            ? [styles.buttonInnerContainer, styles.pressedIOS]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  // Note: equivalent style of android_ripple for iOS
  pressedIOS: {
    opacity: 0.75,
  },
});
