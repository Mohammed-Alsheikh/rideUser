import {StyleSheet} from 'react-native';
import Colors from '../../styles';
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
    marginVertical: 15,
  },
  button: {
    width: '45%',
    height: 40,
    marginVertical: 20,
  },
  Gradent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontFamily: Fonts.Type,
    color: Fonts.color,
  },
  inputtext: {
    paddingLeft: 12,
    color: '#00B5FF',
    textAlign: Fonts.AlignText,
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
  },
  TextButton: {
    fontSize: Fonts.Size,
    color: '#fff',
    fontFamily: Fonts.Type,
  },
  TextReg: {
    color: '#1A8AB4',
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
  },
  cap: {
    fontSize: Fonts.Size,
    fontFamily: Fonts.Type,
  },
});
export default styles;
