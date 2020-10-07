import { StyleSheet } from "react-native";
import { Helpers, Colors, Fonts } from "App/Theme";

const styles = StyleSheet.create({
  containerRow: {
    ...Helpers.rowMain,
    justifyContent: "space-around",
    marginTop: 20,
  },
  sectionColumn: {
    ...Helpers.colMain,
    justifyContent: "space-between",
    height: 50,
  },
  heading: {
    ...Fonts.h4,
    color: Colors.pencil,
    fontWeight: "bold",
  },
  detail: {
    ...Fonts.input,
    color: "gray",
    opacity: 0.7,
    fontWeight: "bold",
  },
});
export default styles;
