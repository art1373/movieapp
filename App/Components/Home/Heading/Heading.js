import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./HeadingStyles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Colors } from "App/Theme";

const Heading = ({ onGridPress, iconRender }) => {
  return (
    <View style={styles.headingRow}>
      <Text style={styles.text}>Most Popular</Text>
      <TouchableOpacity onPress={onGridPress}>
        <FeatherIcon
          name={iconRender === "list" ? "grid" : "columns"}
          size={30}
          color={Colors.pencil}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Heading;
