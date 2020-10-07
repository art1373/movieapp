import React from "react";
import { View, Text, Button } from "react-native";
import Container from "../Container/Container";

const ErrorBoundry = ({ onPress }) => {
  return (
    <Container>
      <View>
        <Text>Error while fetching movie data</Text>
        {/* <Button onPress={onPress} /> */}
      </View>
    </Container>
  );
};

export default ErrorBoundry;
