import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const NumberContainer = (props) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 26,
    fontFamily: "open-sans-bold",
  },
});
