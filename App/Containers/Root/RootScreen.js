import React, { Component, useEffect } from "react";
import { AppNavigator } from "App/Navigators/AppNavigator";
import { View } from "react-native";
import { PropTypes } from "prop-types";
import { Helpers } from "App/Theme";

const RootScreen = (props) => {
  return (
    <View style={Helpers.fill}>
      <AppNavigator />
    </View>
  );
};

RootScreen.propTypes = {
  startup: PropTypes.func,
};

export default RootScreen;
