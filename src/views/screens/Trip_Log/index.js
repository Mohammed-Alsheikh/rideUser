import React from 'react';
import {View, Text, TouchableOpacity, Linking, Platform} from 'react-native';
import {Appbar, List} from 'react-native-paper';
import {Container} from 'native-base';
import {gradientColors} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../styles/fonts';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default ({navigation}) => {
  const makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0C4563', '#0C415F', '#0C4968', '#0D5C7F', '#0D6F95']}>
        <Appbar.Header style={{backgroundColor: 'transparent'}}>
          <Appbar.Content titleStyle={styles.textmap} title="أختر حافلة" />
        </Appbar.Header>
      </LinearGradient>
      <List.Accordion
        title="yazan line 1"
        left={props => <List.Icon {...props} icon="bus" />}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingVertical: 5,
          }}>
          <Rating imageSize={18} style={{right: 25}} />
          <Icon name="access-alarms" size={24} color="#39ACC6" />
          <Text style={{right: 90, top: 2, fontFamily: Fonts.Type}}>5 m</Text>
          <Icon
            name="person"
            size={24}
            color="#39ACC6"
            style={{paddingRight: 20}}
          />
          <Text style={{right: 110, top: 3, fontFamily: Fonts.Type}}>
            {' '}
            3/0{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingVertical: 5,
          }}>
          <Icon
            name="space-bar"
            size={24}
            color="#39ACC6"
            style={{left: 120}}
          />
          <Text style={{right: 40, top: 3, fontFamily: Fonts.Type}}>
            99999{' '}
          </Text>
          <Icon
            name="directions-bus"
            size={24}
            color="#39ACC6"
            style={{left: 60}}
          />
          <Text style={{right: 100, top: 3, fontFamily: Fonts.Type}}>
            hunadi
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <TouchableOpacity style={styles.button} activeOpacity={0.9}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={gradientColors}
              style={styles.Gradent}>
              <Text style={styles.Textbutton}>تتبع</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            activeOpacity={0.9}
            onPress={makeCall}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={gradientColors}
              style={styles.Gradent}>
              <Icon name="phone" color="#FFF" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </List.Accordion>
    </View>
  );
};
