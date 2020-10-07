import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./HeaderStyles";
import { PropTypes } from "prop-types";
import { Colors } from "App/Theme";

import BackChevron from "../BackChevron/BackChevron";
import BorderBottom from "../BorderBottom/BorderBottom";

function Header({ goBack, title, noBackIcon }) {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.transparent }}>
      <View style={styles.container}>
        <View style={styles.section}>
          {!noBackIcon && (
            <View style={styles.content__first__Half}>
              <BackChevron customPadding={0} goBack={goBack} />
            </View>
          )}
          <View style={styles.content__second__Half}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      </View>
      <BorderBottom />
    </SafeAreaView>
  );
}
Header.propTypes = {
  goBack: PropTypes.func,
  title: PropTypes.string,
};

export default Header;
