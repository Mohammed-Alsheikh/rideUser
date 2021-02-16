import {StyleSheet} from 'react-native';
import Fonts from '../../styles/fonts';
import {height} from '../../styles/index';

const styles = StyleSheet.create({
  header: {
    height: height / 4,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textmap: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.Type,
  },
  button: {
    width: '20%',
    height: 30,
    left: 70,
  },
  Gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  Textbutton: {
    fontSize: Fonts.Size,
    color: '#fff',
    fontFamily: Fonts.Type,
  },
  button2: {
    width: '20%',
    height: 30,
    right: 120,
  },
});
export default styles;
