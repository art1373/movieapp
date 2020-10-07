import React from "react";
import { ActivityIndicator, Text, FlatList, Button } from "react-native";
import {
  Container,
  Header,
  Input,
  HomeHeading,
  MovieCard,
  ErrorBoundry,
} from "../../Components";
import { useNavigation } from "@react-navigation/native";

import useFetch from "../../Services/useFetch";
import Strings from "../../Values/Strings";

const HomeScreen = () => {
  const [mydata, setmydata] = React.useState(null);
  const [filtered, setfiltered] = React.useState([]);
  const { response, loading, error } = useFetch(
    "/movie/popular",
    null,
    setMovies
  );
  const [numcols, setnumcols] = React.useState(1);
  const { goBack, navigate } = useNavigation();
  const [searchInput, setsearchInput] = React.useState("");

  function setMovies(data) {
    setmydata(data);
  }

  const searchFilterFunction = (text) => {
    setsearchInput(text);
    let apiData = mydata.data.results;
    let arrayholder = [...apiData];
    const newData = arrayholder.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setfiltered(newData);
  };
  function gridPress() {
    numcols === 1 ? setnumcols(2) : setnumcols(1);
  }
  return (
    <>
      {loading && (
        <ActivityIndicator
          style={{ marginTop: 250 }}
          size={40}
          color={"purple"}
        />
      )}
      {error && <ErrorBoundry />}
      {mydata && (
        <>
          <Header noBackIcon title="Home" goBack={() => goBack()} />
          <Input
            value={searchInput}
            onChangeText={(searchInput) => searchFilterFunction(searchInput)}
          />
          <HomeHeading
            onGridPress={gridPress}
            iconRender={numcols === 1 ? "list" : "rowList"}
          />

          <Container>
            <FlatList
              key={numcols}
              showsVerticalScrollIndicator={false}
              numColumns={numcols}
              data={filtered.length !== 0 ? filtered : mydata.data.results}
              contentContainerStyle={{ paddingBottom: 50 }}
              keyExtractor={(movie) => movie.id.toString()}
              renderItem={({ item, index }) => (
                <>
                  <MovieCard
                    id={item?.id}
                    index={index}
                    poster={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                    name={item?.original_title}
                    genre="Horro/Thriler"
                    language={item?.original_language}
                    score={item?.vote_average}
                    year={item?.release_date?.split("-")[0]}
                    status={item?.adult ? "Public" : "Private"}
                    onPress={() => navigate(Strings.Routes.DETAILS, { item })}
                  />
                </>
              )}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
