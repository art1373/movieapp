import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import styles from "./SynopsisStyles";

const Synopsis = ({ overview, collapsed, onPress }) => {
  return (
    <View
      animation={"bounceIn"}
      delay={1000}
      useNativeDriver
      style={styles.headingWrap}
    >
      <Text style={styles.heading}>Synopsis</Text>
      <Text numberOfLines={collapsed ? 2 : null} style={styles.detail}>
        {overview}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.readMore}>
          {collapsed ? "Read More" : "See Less"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Synopsis;
