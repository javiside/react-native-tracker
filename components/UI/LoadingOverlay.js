import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size="large" />
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
});
