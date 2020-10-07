import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./BackRoundStyles";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

const BackRound = ({ goBack }) => {
  return (
    <Animatable.View
      style={styles.backwrap}
      animation={"fadeIn"}
      useNativeDriver
      delay={1000}
    >
      <TouchableOpacity onPress={goBack}>
        <MaterialIcon
          style={{ marginLeft: 10 }}
          name="arrow-back-ios"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default BackRound;
