import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Strings from "../Values/Strings";
import { Colors } from "App/Theme";
import ProfileScreen from "App/Containers/Profile/ProfileScreen";
import AntIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import { HomeStack } from "./HomeStack";

const Tab = createBottomTabNavigator();
export const MainStack = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      tabBarOptions={{
        activeTintColor: Colors.orange,
        inactiveTintColor: Colors.gray,
      }}
    >
      <Tab.Screen
        name={Strings.Routes.HOME_SCREEN}
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <AntIcon name="home" size={30} color={color} />
          ),
        })}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="user" size={30} color={color} />
          ),
        })}
        name={Strings.Routes.PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
