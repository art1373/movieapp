import { StyleSheet } from "react-native";
import { Fonts, Colors } from "App/Theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 24,
  },
  borderBottom: {
    borderBottomWidth: 2,
  },

  section: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    ...Fonts.h4,
    color: Colors.pencil,
    fontWeight: "bold",
  },
  textLight: {
    ...Fonts.regInp,
    color: Colors.lightThemeNeon,
  },
  content__first__Half: {
    position: "absolute",
    paddingHorizontal: 5,
    zIndex: 2,
  },
  content__second__Half: {
    width: "100%",
    alignItems: "center",
  },
});
export default styles;
