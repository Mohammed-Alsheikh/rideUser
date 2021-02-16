import React, {useCallback} from 'react';
import {Marker} from 'react-native-maps';
import {useDispatch} from 'react-redux';
import {fetchTrips} from '@actions/index';
import Types from '@types/index';
import r from 'reactotron-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({checkpointObj}) => {
  const dispatch = useDispatch();

  const onPressMarker = useCallback(() => {
    dispatch({
      type: Types.SET_SNACK_STATE,
      payload: {
        visible: true,
        type: 'confirmation',
        onConfirm: () => fetchTrips(checkpointObj)(dispatch),
        onCancel: () => dispatch({type: Types.CLEAR_SNACK}),
      },
    });
  }, [checkpointObj, dispatch]);

  const {latitude} = checkpointObj.get('coordinates') || {};
  const {longitude} = checkpointObj.get('coordinates') || {};
  if (longitude !== undefined && latitude !== undefined) {
    return (
      <Marker
        coordinate={{
          longitude: Number(longitude),
          latitude: Number(latitude),
        }}
        onPress={() => {
          setTimeout(onPressMarker, 200);
        }}
        title={checkpointObj.get('name')}>
        <Icon name={'bus'} color="#564fa4" style={{fontSize: 19}} />
      </Marker>
    );
  }
  return null;
};
