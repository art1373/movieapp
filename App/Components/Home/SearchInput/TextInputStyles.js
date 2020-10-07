import { StyleSheet } from "react-native";
import { Colors } from "App/Theme";

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    top: 45,
    left: 20,
    zIndex: 2,
    width: 45,
  },
  inputContainer: {
    marginVertical: 20,
    height: 30,
    backgroundColor: Colors.lightWhite,
    width: "95%",
    alignSelf: "center",
    borderRadius: 100 / 2,
    textAlign: "center",
  },
});

export default styles;
