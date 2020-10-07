import React from "react";
import { Text, View } from "react-native";
import styles from "./ProfileStyles";
import { Helpers } from "App/Theme";

const ProfileScreen = (props) => {
  return (
    <View style={[Helpers.fillRowCenter, styles.container]}>
      <View style={[Helpers.center, styles.logo]}>
        {/* You will probably want to insert your logo here */}
        <Text>User Profile</Text>
      </View>
    </View>
  );
};
export default ProfileScreen;
