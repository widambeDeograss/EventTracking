import {Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  content: {
    flex: 1,
    // height,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.primary,
  },
  bordTxt: {
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: colors.accent,
    // width: width * 0.88,
    marginTop:10,
    color: colors.accent,
  },
  inputSty:{
    backgroundColor: colors.accent,
    borderRadius:15,
    marginVertical:10
  },
  imageSty: {
    height: height * 0.25,
    width,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop:-20
  },
  loginTitle:{
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 10,
  },
  regtxt:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center",
    marginTop:10
  }
});
