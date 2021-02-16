import React, {useCallback} from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import {Appbar, List, Modal, Portal, Divider} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGE} from '@constants/Images';
import {height, width, gradientColors} from '@styles/index';
import Fonts from '@styles/fonts';
import Item from './trips-item';
import {useSelector, useDispatch} from 'react-redux';
import Types from '@types/index';
import ActivityIndecator from '@lib/ActivityIndecator';
import Text from '@lib/Text';

export default ({}) => {
  const dispatch = useDispatch();

  const {visible, trips} = useSelector(_ => _.trips);

  const setVisible = useCallback(
    val => {
      dispatch({type: Types.SET_TRIPS_VISIBLE, payload: val});
    },
    [dispatch],
  );

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={MODAL_STYLES}>
        <View style={{width: width - 2 * 24, height: height / 2}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={gradientColors}>
            <Appbar.Header style={{backgroundColor: 'transparent'}}>
              <Appbar.Content titleStyle={TITLE_STYLE} title="أختر حافلة" />
            </Appbar.Header>
          </LinearGradient>
          <ImageBackground
            source={IMAGE}
            resizeMode="cover"
            resizeMethod="resize"
            style={BACKGROUND_STYLE}>
            {trips.length ? (
              trips[0] === 'no trips' ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{'No driver available at the moment'}</Text>
                </View>
              ) : (
                <ScrollView>
                  {trips.map(trip => (
                    <React.Fragment>
                      <List.Accordion
                        title={trip.name}
                        left={props => <List.Icon {...props} icon="bus" />}>
                        <Item item={trip} />
                      </List.Accordion>
                      <Divider />
                    </React.Fragment>
                  ))}
                </ScrollView>
              )
            ) : (
              <ActivityIndecator />
            )}
          </ImageBackground>
        </View>
      </Modal>
    </Portal>
  );
};

const MODAL_STYLES = {
  paddingVertical: 20,
  height: height / 1.5,
  width: width - 2 * 24,
  alignItems: 'center',
  position: 'absolute',
  top: height / 3,
  left: 24,
};

const TITLE_STYLE = {
  textAlign: 'center',
  color: '#fff',
  fontSize: Fonts.Size,
  fontFamily: Fonts.Type,
};

const BACKGROUND_STYLE = {
  flex: 1,
  width: null,
  height: null,
};
