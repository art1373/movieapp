import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import styles from "./LikeButtonStyles";

import Ionicons from "react-native-vector-icons/Ionicons";

const LikeButton = ({ like, likeAction }) => {
  return (
    <View
      style={styles.likeWrap}
      animation="fadeInRight"
      useNativeDriver
      delay={500}
    >
      <TouchableOpacity activeOpacity={0.6} onPress={likeAction}>
        <Ionicons name="heart" size={40} color={like ? "red" : "white"} />
      </TouchableOpacity>
    </View>
  );
};

export default LikeButton;
