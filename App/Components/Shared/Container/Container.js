import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Helpers, Colors } from "App/Theme";

const Container = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...Helpers.fill }}>
        <SafeAreaView style={{ backgroundColor: Colors.transparent }} />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Container;
