import { StyleSheet } from "react-native";
import { Helpers, Colors, Fonts } from "App/Theme";

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    marginHorizontal: 20,
  },
  heading: {
    ...Fonts.h4,
    color: Colors.pencil,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  detail: {
    ...Fonts.normal,
    color: "gray",
    opacity: 0.7,
    fontWeight: "bold",
    maxWidth: 90,
    marginVertical: 5,
  },
});
export default styles;
