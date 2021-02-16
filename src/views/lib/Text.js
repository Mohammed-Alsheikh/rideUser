import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
export default ({theme = 'regular', style, children, textAlign = 'center'}) => {
  return (
    <Text textAlign={textAlign} style={{...styles.text(theme), ...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: theme => {
    switch (theme) {
      case 'regular': {
        return {
          ...defaultStyle,
          fontFamily:
            Platform.OS === 'ios' ? 'TajawalRegular' : 'Tajawal-Regular',
        };
      }
      case 'medium': {
        return {
          ...defaultStyle,
          fontFamily:
            Platform.OS === 'ios' ? 'TajawalMedium' : 'Tajawal-Medium',
        };
      }
    }
  },
});

const defaultStyle = {
  writingDirection: 'rtl',
  fontSize: 16,
};
