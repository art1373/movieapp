import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'

const size = {
  h1: wp(8),
  h2: wp(7),
  h3: wp(6),
  h4: wp(5),
  input: wp(4),
  regular: wp(3),
  medium: wp(2),
  small: wp(1),
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },  
  h4: {
    fontSize: size.h4,
  },
  input: {
    fontSize: size.input,
  },  
  normal: {
    fontSize: size.regular,
  },  
  medium: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
})
