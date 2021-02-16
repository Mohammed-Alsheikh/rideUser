import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from '../../Map';
import SplashScreen from 'react-native-splash-screen';
import {Header, Snackbar, TripsModal, TrackingButtons} from './Components';
import Types from '@types/index';
import {useDispatch} from 'react-redux';
import reactotron from 'reactotron-react-native';

const CONTAINER_STYLES = {
  ...StyleSheet.absoluteFillObject,
  zIndex: 1,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

export default ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 300);
    // dispatch({
    //   type: Types.SET_SNACK_STATE,
    //   payload: {visible: true, type: 'welcome'},
    // });
  }, [dispatch]);

  return (
    <View style={CONTAINER_STYLES}>
      <Header {...{navigation}} />
      <MapView {...{navigation}} />
      <TripsModal />
      <Snackbar />
      <TrackingButtons />
    </View>
  );
};
