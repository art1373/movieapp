import React, { useContext } from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Strings from "../Values/Strings";
import HomeScreen from "App/Containers/Home/HomeScreen";
import DetailsScreen from "App/Containers/Details/DetailsScreen";

const Stack = createSharedElementStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={Strings.Routes.HOME_SCREEN}
    >
      <Stack.Screen name={Strings.Routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={Strings.Routes.DETAILS}
        component={DetailsScreen}
        options={() => ({
          transitionSpec: {
            open: {
              animation: "timing",
              config: { useNativeDriver: true, duration: 800 },
            },
            close: {
              animation: "timing",
              config: { duration: 800, useNativeDriver: true },
            },
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: { opacity: progress },
            };
          },
        })}
      />
    </Stack.Navigator>
  );
};
