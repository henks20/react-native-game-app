import { Text, StyleSheet } from "react-native";

import { Colors } from "../../utils/colors";

export const InstructionText = (props) => {
  const { children } = props;

  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
