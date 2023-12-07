import { StyleSheet } from "react-native";

export const customInputStyle = StyleSheet.create({
  base: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
  },
  errorLabel: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
