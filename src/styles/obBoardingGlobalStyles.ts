import {Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
  },
  bordTxt: {
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: colors.secondary,
    width: 200,
  },
  imageSty: {
    // height: '55%',
    width,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
