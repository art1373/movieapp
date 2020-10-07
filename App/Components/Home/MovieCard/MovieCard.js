import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./MovieCardStyles";
import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";
import MovieActions from "../../../Stores/Movies/Actions";

import EvilIcon from "react-native-vector-icons/Entypo";
import { Colors } from "App/Theme";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";

const MovieCard = ({
  id,
  poster,
  index,
  onPress,
  name,
  year,
  language,
  genre,
  score,
  status,
}) => {
  const favorites = useSelector((state) => state.movie.favorites);
  let isLiked = favorites.find((movie) => movie === id);
  const [like, setlike] = React.useState(isLiked);
  const dispatch = useDispatch();
  function likeAction(movieId) {
    dispatch(MovieActions.setFavorites(movieId));
    setlike(!like);
  }

  return (
    <View style={styles.cardContainer}>
      <Animatable.View
        animation={"slideInUp"}
        duration={800}
        useNativeDriver
        delay={400 + index * 100}
      >
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
          <View style={styles.container}>
            <SharedElement id={`item.${id}.poster`}>
              <FastImage
                style={styles.poster}
                source={{ uri: poster, priority: FastImage.priority.high }}
              />
            </SharedElement>
            <TouchableWithoutFeedback onPress={() => likeAction(id)}>
              <View style={styles.likeIconWrap}>
                <EvilIcon
                  style={styles.likeIcon}
                  name="heart"
                  size={30}
                  color={isLiked ? "red" : Colors.gray}
                />
              </View>
            </TouchableWithoutFeedback>

            <View style={styles.detailsContainer}>
              <View style={styles.detailSections}>
                <Text style={styles.title} numberOfLines={1}>
                  {name}
                </Text>
                <Text style={styles.subTitle} numberOfLines={2}>
                  {year} | {language}
                </Text>
                <Text style={styles.subTitle} numberOfLines={2}>
                  {genre}
                </Text>
              </View>
              <View style={styles.detailSections}>
                <Text style={styles.subTitle}>{score}</Text>
                <Text style={styles.subTitle}>{status}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default MovieCard;
