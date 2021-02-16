import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';

export default ({size = 'large'}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} animating={true} />
    </View>
  );
};
