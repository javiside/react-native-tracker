import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

export default function ErrorOverlay({ errorMsg, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>An error ocurred!</Text>
      <Text style={styles.text}>{errorMsg}</Text>
      <Button onPress={onConfirm}>Ok</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  text: {
    color: "white",
    marginBottom: 8,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
