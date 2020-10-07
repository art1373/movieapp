import React from "react";
import { FlatList, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { View } from "react-native-animatable";
import styles from "./CastCrewStyles";

const CastCrew = ({ data }) => {
  return (
    <>
      <Text style={styles.heading}>Main Cast</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={{ padding: 20, justifyContent: "space-between" }}
        keyExtractor={(cast) => cast.credit_id}
        renderItem={({ item, index }) => (
          <>
            <View
              animation={"slideInRight"}
              duration={1000}
              delay={index * 10}
              useNativeDriver
              style={{ alignItems: "center" }}
            >
              <Text style={styles.detail} numberOfLines={1}>
                {item.name}
              </Text>

              <FastImage
                style={styles.avatar}
                resizeMode={FastImage.resizeMode.cover}
                source={{
                  uri: `https://image.tmdb.org/t/p/w154/${item.profile_path}`,
                  priority: FastImage.priority.high,
                }}
              />
              <Text style={styles.detail} numberOfLines={1}>
                {item.character}
              </Text>
            </View>
          </>
        )}
      />
    </>
  );
};

export default CastCrew;
