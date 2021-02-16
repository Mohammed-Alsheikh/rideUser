import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Linking, Platform} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {gradientColors} from '@styles/index';
import Fonts from '@styles/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {modalStyles as styles} from './styles';
import {useDispatch, batch} from 'react-redux';
import MapTypes from '@types/map';
import {getTripCheckpoints} from '@actions/tripActions';
import Types from '@types/index';

const makeCall = phone =>
  Linking.openURL(
    Platform.OS === 'android' ? `tel:${phone}` : `telprompt:${phone}`,
  );

export default ({item}) => {
  const {rate, capacity, count, type, phone, tripId} = item;
  const dispatch = useDispatch();
  const Track = useCallback(() => {
    batch(() => {
      dispatch({
        type: Types.SET_TRACKING,
        payload: {mode: MapTypes.TRACKING, driverObj: item},
      });
      dispatch({
        type: Types.CLEAR_TRIPS,
      });
    });
    getTripCheckpoints(tripId)(dispatch);
  }, [dispatch, item, tripId]);

  return (
    <View
      style={{
        paddingVertical: 6,
        paddingHorizontal: 24,
        alignItems: 'stretch',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 2,
          marginBottom: 12,
        }}>
        <View style={{flex: 1}}>
          <StarRating
            fullStarColor={'#39ACC6'}
            disabled={true}
            maxStars={5}
            rating={rate}
            starSize={21}
          />
        </View>
        <Row>
          <Text
            style={{
              fontFamily: Fonts.Type,
              marginRight: 4,
            }}>
            {`${20} m`}
          </Text>
          <Icon name="access-alarms" size={24} color="#39ACC6" />
        </Row>
        <Row>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: Fonts.Type,
              marginRight: 4,
            }}>
            {`${count}/${capacity}`}
          </Text>
          <Icon name="person" size={24} color="#39ACC6" />
        </Row>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 2,
          marginTop: 12,
        }}>
        <Row>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: Fonts.Type,
              marginRight: 4,
            }}>
            {phone}
          </Text>
          <Icon name="space-bar" size={24} color="#39ACC6" />
        </Row>
        <Row>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: Fonts.Type,
              marginRight: 4,
            }}>
            {type}
          </Text>
          <Icon name="directions-bus" size={24} color="#39ACC6" />
        </Row>
        <Row />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 18,
          marginVertical: 12,
        }}>
        <TouchableOpacity onPress={Track} activeOpacity={0.7}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={gradientColors}
            style={styles.Gradenttrip}>
            <Text style={styles.Textbutton}>{'تتبع'}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => makeCall(phone)}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={gradientColors}
            style={styles.Gradenttrip}>
            <Icon name="phone" color="#FFF" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Row = ({children}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    }}>
    {children}
  </View>
);
