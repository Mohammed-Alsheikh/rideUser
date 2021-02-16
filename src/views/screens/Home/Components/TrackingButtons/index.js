import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Types from '@types/index';
import MapTypes from '@types/map';
import SnackTypes from '@types/snack';
import {joinTrip, leaveTrip} from '@actions/tripActions';
import reactotron from 'reactotron-react-native';

const _default = ({}) => {
  const {mode, driverObj} = useSelector(_ => _.map);
  const dispatch = useDispatch();

  const confirm = useCallback(() => {
    dispatch({
      type: Types.SET_SNACK_STATE,
      payload: {
        visible: true,
        type: SnackTypes.confirmTracking,
        onConfirm: () => {
          dispatch(joinTrip(driverObj?.id));
        },
      },
    });
  }, [dispatch, driverObj]);

  const cancel = useCallback(() => {
    dispatch({
      type: Types.SET_SNACK_STATE,
      payload: {
        visible: true,
        type: SnackTypes.leaveTrip,
        onConfirm: () => {
          dispatch(leaveTrip(driverObj?.id));
        },
      },
    });
  }, [dispatch, driverObj]);

  const dismiss = useCallback(() => {
    dispatch({
      type: Types.CLEAR_MAP,
    });
  }, [dispatch]);

  return mode !== MapTypes.DEFAULT ? (
    <View
      style={{
        position: 'absolute',
        right: 23,
        bottom: 32,
      }}>
      {mode === MapTypes.TRACKING ? (
        <>
          <TouchableOpacity onPress={confirm}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 8,
              }}
              colors={['#0C4563', '#0C415F', '#0C4968', '#0D5C7F', '#0D6F95']}>
              <Icon
                name="check-circle"
                style={{
                  fontSize: 32,
                  backgroundColor: 'transparent',
                  color: 'white',
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={dismiss}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 8,
              }}
              colors={['#0C4563', '#0C415F', '#0C4968', '#0D5C7F', '#0D6F95']}>
              <Icon
                name="x-circle"
                style={{
                  fontSize: 32,
                  backgroundColor: 'transparent',
                  color: 'white',
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={cancel}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 8,
            }}
            colors={['#0C4563', '#0C415F', '#0C4968', '#0D5C7F', '#0D6F95']}>
            <Icon
              name="x"
              style={{
                fontSize: 32,
                backgroundColor: 'transparent',
                color: 'white',
              }}
            />
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  ) : null;
};

export {_default as TrackingButtons};
export default _default;
