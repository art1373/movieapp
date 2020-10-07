import { StyleSheet } from "react-native";
import { Colors, Helpers, Fonts } from "App/Theme";
export default StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    ...Helpers.fill,
    ...Helpers.colMain,
    justifyContent: "space-between",
    marginLeft: 10,
    height: 200,
  },
  detailSections: {
    marginVertical: 5,
  },
  subTitle: {
    ...Fonts.input,
    color: Colors.pencil,
    fontWeight: "bold",
  },
  title: {
    ...Fonts.h4,
    fontWeight: "bold",
  },
  poster: {
    width: 150,
    height: 230,
    borderRadius: 20,
  },
  likeIconWrap: {
    borderWidth: 2,
    width: 40,
    height: 40,
    position: "absolute",
    zIndex: 10,
    top: 25,
    left: 115,
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.gray,
  },
  likeIcon: {
    marginTop: 5,
  },
});
