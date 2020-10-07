/**
 * This file contains metric values that are global to the application.
 */
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// Examples of metrics you can define:
export const tiny = hp("0.6%");

export const small = tiny * 2;
export const normal = tiny * 3;
export const tinyPow = tiny * tiny;
export const medium = normal * 2;

export default {
  //=====================PADDINGS==============
  tinyPadding: {
    padding: tiny,
  },

  normalStartPadding: {
    paddingStart: normal,
  },
  smallPadding: {
    padding: small,
  },
  normalPadding: {
    padding: normal,
  },
  mediumPadding: {
    padding: medium,
  },
  mediumVerticalPadding: {
    paddingVertical: medium,
  },

  normalHorizontalPadding: {
    paddingHorizontal: normal,
  },

  smallVerticalPadding: {
    paddingVertical: small,
  },
  verticalPadding: {
    paddingVertical: normal,
  },
  tinyVerticalPadding: {
    paddingVertical: tiny,
  },
  //============= PADDING HORIZANTAL
  tinyHorizontalPadding: {
    paddingHorizontal: tiny,
  },
  smallHorizontalPadding: {
    paddingHorizontal: small,
  },
  horizantalPadding: {
    paddingHorizontal: normal,
  },
  powHorizantalPadding: {
    paddingHorizontal: tinyPow,
  },
  mediumHorizontalPadding: {
    paddingHorizontal: medium,
  },
  //============= PADDING END
  smallEndPadding: {
    paddingEnd: small,
  },
  endPadding: {
    paddingEnd: normal,
  },
  mediumEndPadding: {
    paddingEnd: medium,
  },
  //============= PADDING START
  mediumStartPadding: {
    paddingStart: medium,
  },
  normalStartPadding: {
    paddingStart: normal,
  },

  //=====================MARGINS==============
  //=============MARGIN TOP
  tinyTopMargin: {
    marginTop: tiny,
  },
  normalTopMargin: {
    marginTop: normal,
  },
  smallTopMargin: {
    marginTop: small,
  },
  mediumTopMargin: {
    marginTop: medium,
  },
  //=============MARGIN BOTTOM
  smallBottonMargin: {
    marginBottom: small,
  },
  bottomMargin: {
    marginBottom: normal,
  },
  mediumBottomMargin: {
    marginBottom: medium,
  },
  powBottomMargin: {
    marginBottom: tinyPow,
  },
  //=============MARGIN END
  smallEndMargin: {
    marginEnd: small,
  },
  normalEndMargin: {
    marginEnd: normal,
  },
  tinyPowEndMArgin: {
    marginEnd: tinyPow,
  },
  mediumEndMargin: {
    marginEnd: medium,
  },

  //=============MARGIN START
  tinyStartMargin: {
    marginStart: tiny,
  },
  smallStartMargin: {
    marginStart: small,
  },
  normalStartMargin: {
    marginStart: normal,
  },
  mediumStartMargin: {
    marginStart: medium,
  },

  //=============MARGIN VERTICAL
  tinyVerticalMargin: {
    marginVertical: tiny,
  },
  smallVerticalMargin: {
    marginVertical: small,
  },
  verticalMargin: {
    marginVertical: normal,
  },
  mediumVerticalMargin: {
    marginVertical: medium,
  },
  powVertivalMargin: {
    marginVertical: tinyPow,
  },
  //=============MARGIN Horizantal
  tinyHorizontalMargin: {
    marginHorizontal: tiny,
  },
  smallHorizontalMargin: {
    marginHorizontal: small,
  },
  horizontalMargin: {
    marginHorizontal: normal,
  },
  mediumHorizontalMargin: {
    marginHorizontal: medium,
  },

  //=====================BORDERS_RADIUS==============
  tinyRadius: {
    borderRadius: tiny,
  },
  smallRadius: {
    borderRadius: small,
  },
  normalRadius: {
    borderRadius: normal,
  },
  fullRadius: {
    borderRadius: 100,
  },
};
