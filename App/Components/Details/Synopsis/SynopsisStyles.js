import { StyleSheet } from "react-native";
import { Colors, Helpers, Fonts } from "App/Theme";

const styles = StyleSheet.create({
  headingWrap: {
    padding: 15,
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
    marginTop: 10,
  },
  readMore: {
    ...Fonts.input,
    fontWeight: "bold",
    color: Colors.orange,
    alignSelf: "flex-end",
  },
});

export default styles;
