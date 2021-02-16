import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Colors from '../styles';
import Fonts from '../styles/fonts';

export const useTextInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    onChangeText: val => setValue(val),
    value,
  };
};

export default ({
  placeholder,
  rightIcon,
  rightIconContainerStyle,
  autoCapitalize,
  inputContainerStyle,
  inputStyle,
  value,
  onChangeText,
}) => {
  return (
    <Input
      placeholder={placeholder || ''}
      rightIcon={rightIcon}
      rightIconContainerStyle={{
        ...styles.rightIconContainerStyle,
      }}
      autoCapitalize={autoCapitalize || 'words'}
      inputContainerStyle={{
        ...styles.inputContainerStyle,
        ...inputContainerStyle,
      }}
      inputStyle={{...styles.inputStyle, ...inputStyle}}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginHorizontal: 60,
    marginVertical: 15,
  },
  inputStyle: {
    marginHorizontal: 10,
    color: Colors.primary,
    textAlign: 'auto',
    fontFamily: Fonts.Type,
    fontSize: Fonts.Size,
  },
  rightIconContainerStyle: {
    right: 15,
  },
});
