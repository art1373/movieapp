import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "App/Theme";

export default StyleSheet.create({
  headingRow: {
    ...Helpers.rowMain,
    justifyContent: "space-between",
    padding: 20,
  },
  text: {
    ...Fonts.h3,
    fontWeight: "bold",
    color: Colors.pencil,
    marginBottom: Metrics.tiny,
  },
});
