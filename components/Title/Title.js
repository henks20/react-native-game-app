import { Text, StyleSheet } from "react-native";

import { Colors } from "../../utils/colors";

export const Title = (props) => {
  const { children } = props;

  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});
