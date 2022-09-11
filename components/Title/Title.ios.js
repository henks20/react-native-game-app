import { Text, StyleSheet, Platform } from "react-native";

import { Colors } from "../../utils/colors";

export const Title = (props) => {
  const { children } = props;

  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.white,
    textAlign: "center",
    // borderWidth: 0,
    borderColor: Colors.white,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
