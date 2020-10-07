import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styles from "./DetailsStyles";
import FastImage from "react-native-fast-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import useFetch from "../../Services/useFetch";
import { useSelector, useDispatch } from "react-redux";
import MovieActions from "../../Stores/Movies/Actions";

import {
  BackRound,
  MovieInfo,
  Synopsis,
  CastCrew,
  LikeIcon,
} from "../../Components";

function DetailsScreen() {
  const params = useRoute().params;
  const uri = params.item.poster_path;
  const id = params.item.id;
  const favorites = useSelector((state) => state.movie.favorites);
  let isLiked = favorites.find((movie) => movie === id);
  const { goBack } = useNavigation();
  const [like, setlike] = React.useState(isLiked);
  const [isCollapse, setCollapse] = React.useState(true);
  const { response } = useFetch(`/movie/${id}`);
  const { response: creditData } = useFetch(`/movie/${id}/credits`);
  const dispatch = useDispatch();

  function likeAction() {
    dispatch(MovieActions.setFavorites(id));
    setlike(!like);
  }
  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={() => goBack()}>
        <SharedElement id={`item.${id}.poster`}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            style={styles.posterCover}
            source={{
              uri: `http://image.tmdb.org/t/p/w500${uri}`,
              priority: FastImage.priority.high,
            }}
          />
        </SharedElement>
      </TouchableOpacity>
      <LikeIcon like={like} likeAction={likeAction} />
      <BackRound goBack={() => goBack()} />
      <ScrollView style={styles.scrollView}>
        <MovieInfo
          duration={response?.data?.runtime}
          genre1={response?.data?.genres[0]?.name}
          genre2={response?.data?.genres[1]?.name || ""}
          lanugage={response?.data?.spoken_languages[0].name}
        />
        <Synopsis
          overview={response?.data?.overview}
          onPress={() => setCollapse(!isCollapse)}
          collapsed={isCollapse}
        />
        <CastCrew data={creditData?.data?.cast} />
      </ScrollView>
    </>
  );
}
DetailsScreen.sharedElements = (route) => {
  const id = route.params.item.id;
  return [{ id: `item.${id}.poster` }];
};

export default DetailsScreen;
