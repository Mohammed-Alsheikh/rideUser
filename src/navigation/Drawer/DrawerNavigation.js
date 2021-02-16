import React from 'react';
import 'react-native-gesture-handler';
import {Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../Drawer';
import {ROUTES} from '../../views/constants';
import HomeScreen from '../../views/screens/Home';
import ProfileScreen from '../../views/screens/Profile';
import AboutScreen from '../../views/screens/About';
import TripScreen from '../../views/screens/Trip_Log';
import Fonts from '../../views/styles/fonts';

export default createDrawerNavigator(
  {
    [ROUTES.Home]: {
      screen: HomeScreen,
      navigationOptions: () => {
        return {
          drawerIcon: ({tintColor}) => (
            <Icon style={{color: tintColor}} name="map" size={19} />
          ),
          drawerLabel: ({tintColor}) => (
            <Text
              style={{
                fontSize: Fonts.Size,
                margin: 11,
                color: tintColor,
                fontFamily: Fonts.Type,
              }}>
              الخريطة
            </Text>
          ),
        };
      },
    },
    [ROUTES.Trip]: {
      screen: TripScreen,
      navigationOptions: () => {
        return {
          drawerIcon: ({tintColor}) => (
            <Icon style={{color: tintColor}} name="update" size={19} />
          ),
          drawerLabel: ({tintColor}) => (
            <Text
              style={{
                fontSize: Fonts.Size,
                margin: 11,
                color: tintColor,
                fontFamily: Fonts.Type,
              }}>
              سجل الرحلات
            </Text>
          ),
        };
      },
    },
    [ROUTES.Profile]: {
      screen: ProfileScreen,
      navigationOptions: () => {
        return {
          drawerIcon: ({tintColor}) => (
            <Icon style={{color: tintColor}} name="person-pin" size={19} />
          ),
          drawerLabel: ({tintColor}) => (
            <Text
              style={{
                fontSize: Fonts.Size,
                margin: 11,
                color: tintColor,
                fontFamily: Fonts.Type,
              }}>
              الملف الشخصي
            </Text>
          ),
        };
      },
    },
    [ROUTES.About]: {
      screen: AboutScreen,
      navigationOptions: () => {
        return {
          drawerIcon: ({tintColor}) => (
            <Icon style={{color: tintColor}} name="person-pin" size={19} />
          ),
          drawerLabel: ({tintColor}) => (
            <Text
              style={{
                fontSize: Fonts.Size,
                margin: 11,
                color: tintColor,
                fontFamily: Fonts.Type,
              }}>
              معلومات عنا
            </Text>
          ),
        };
      },
    },
  },
  {
    drawerPosition: 'right',
    drawerType: 'front',
    initialRouteName: ROUTES.Home,
    keyboardDismissMode: 'on-drag',
    overlayColor: 0,
    order: [ROUTES.Home, ROUTES.Profile, ROUTES.Trip, ROUTES.About],
    contentComponent: props => <CustomDrawer {...props} />,
    contentOptions: {
      activeTintColor: '#29ABE2',
      inactiveTintColor: '#6E6E70',
      itemsContainerStyle: {
        // opacity: 1
      },
      iconContainerStyle: {
        // opacity: 1
      },
      itemStyle: {
        flexDirection: 'row-reverse',
      },
    },
  },
);
