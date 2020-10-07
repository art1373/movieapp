import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  posterCover: {
    width,
    height: 400,
  },
  scrollView: {
    marginVertical: 20,
  },
});

export default styles;
