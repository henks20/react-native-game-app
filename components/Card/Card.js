import { StyleSheet, View } from "react-native";

import { Colors } from "../../utils/colors";

export const Card = (props) => {
  const { children } = props;
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Note: elevation means boxShadow which does not exist, Android option
    elevation: 4,
    // Note: elevation means boxShadow which does not exist, iOS option
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
