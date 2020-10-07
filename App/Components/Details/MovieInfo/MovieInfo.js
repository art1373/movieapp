import React from "react";
import styles from "./MovieInfoStyles";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { hourMinuteConverter } from "../../../utils/helpers";

const MovieInfo = ({ duration, genre1, genre2, lanugage }) => {
  return (
    <View
      style={styles.containerRow}
      animation={"bounceIn"}
      delay={800}
      useNativeDriver
    >
      <View style={styles.sectionColumn}>
        <Text style={styles.heading}>Duration</Text>
        <Text style={styles.detail}>
          {duration && hourMinuteConverter(duration)}
        </Text>
      </View>
      <View style={styles.sectionColumn}>
        <Text style={styles.heading}>Genre</Text>
        <Text style={styles.detail}>{`${genre1} ${
          genre2 ? "/" : ""
        } ${genre2}`}</Text>
      </View>
      <View style={styles.sectionColumn}>
        <Text style={styles.heading}>Language</Text>
        <Text style={styles.detail}>{lanugage}</Text>
      </View>
    </View>
  );
};

export default MovieInfo;
