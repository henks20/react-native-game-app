import { Text, StyleSheet } from "react-native";

import { Colors } from "../../utils/colors";

export const InstructionText = (props) => {
  const { style, children } = props;

  // Note: Importance from left to right, right style overwrite left style
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
