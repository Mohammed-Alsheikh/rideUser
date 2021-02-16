import {StyleSheet} from 'react-native';
import Fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginHorizontal: 60,
    marginVertical: 12,
    paddingRight: 10,
  },
  inputtext: {
    paddingLeft: 18,
    color: '#00B5FF',
    textAlign: Fonts.AlignText,
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
  },
  button: {
    width: '50%',
    height: 40,
    marginVertical: 20,
  },
  Gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  Txt: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: Fonts.color,
    fontFamily: Fonts.Type,
  },
  Textbutton: {
    fontSize: Fonts.Size,
    color: '#fff',
    fontFamily: Fonts.Type,
  },
  TextReg: {
    color: '#1A8AB4',
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
    bottom: 2,
  },
  cap: {
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
  },
});
export default styles;
