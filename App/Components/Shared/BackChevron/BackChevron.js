import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./BackChevronStyles";
import PropTypes from "prop-types";
import { Images } from "App/Theme";
import FastImage from "react-native-fast-image";

const BackChevron = ({ goBack, customPadding }) => {
  return (
    <TouchableOpacity style={{ padding: customPadding || 20 }} onPress={goBack}>
      <FastImage
        style={styles.backIcon}
        resizeMode={FastImage.resizeMode.contain}
        source={Images.backIcon}
      />
    </TouchableOpacity>
  );
};

BackChevron.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default BackChevron;
