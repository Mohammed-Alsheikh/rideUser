import Types from '../constants';
import Parse from 'parse/react-native';
import {batch} from 'react-redux';
import findNearestLocation from 'map-nearest-location';

import reactotron from 'reactotron-react-native';

const get = (obj, _, __) => (__ ? obj?.get(_)?.get(__) : obj?.get(_));

export const fetchTrips = checkpoint => async dispatch => {
  batch(() => {
    dispatch({type: Types.CLEAR_SNACK});
    dispatch({
      type: Types.CLEAR_TRIPS_AND_SET_VISIBLE,
    });
  });

  const trips = await checkpoint
    .relation('trip')
    .query()
    .find();

  if (!trips.length) {
    dispatch({
      type: Types.NO_TRIPS,
    });
    return;
  }

  const fetch = async trip => {
    const drivers = await trip
      .relation('driver')
      .query()
      .include('bus')
      .find();

    drivers.forEach(driver => {
      dispatch({
        type: Types.FETCH_TRIPS,
        payload: {
          tripId: trip.id,
          name: get(trip, 'name'),
          username: get(driver, 'username'),
          status: get(driver, 'status'),
          email: get(driver, 'mail'),
          phone: get(driver, 'phone'),
          rate: get(driver, 'rate'),
          id: get(driver, 'bus').id,
          type: get(driver, 'bus', 'type'),
          color: get(driver, 'bus', 'color'),
          count: get(driver, 'bus', 'count'),
          number: get(driver, 'bus', 'number'),
          capacity: get(driver, 'bus', 'capacity'),
          location: get(driver, 'bus', 'location'),
        },
      });
    });

    return trip;
  };

  trips.forEach(trip => fetch(trip));
};

export const getTripCheckpoints = id => dispatch => {
  const Trip = Parse.Object.extend('Trip');
  const query = new Parse.Query(Trip);

  query.get(id).then(object => {
    object
      .relation('checkpoint')
      .query()
      .find()
      .then(checkpoints => {
        dispatch({type: Types.FETCH_TRIPS_CHECKPOINTS, payload: checkpoints});
      });
  });
};

export const joinTrip = busId => (dispatch, getState) => {
  const {map} = getState();
  const {checkpoints, myLocation} = map;

  const nearestCheckpoint = findNearestLocation(
    {lat: myLocation.latitude, lng: myLocation.longitude},
    checkpoints.map(checkpoint => ({
      lat: checkpoint.get('coordinates').latitude,
      lng: checkpoint.get('coordinates').longitude,
    })),
  );

  const Bus = Parse.Object.extend('Bus');
  const query = new Parse.Query(Bus);

  query.get(busId).then(object => {
    // TODO check here if bus is full
    object.increment('count');
    object.save().then(_ => {
      dispatch({
        type: Types.SET_NEAREST_CHECKPOINT,
        payload: nearestCheckpoint,
      });
    });
  });
};

export const leaveTrip = busId => dispatch => {
  const Bus = Parse.Object.extend('Bus');
  const query = new Parse.Query(Bus);

  query.get(busId).then(object => {
    object.increment('count', -1);
    object.save().then(_ => {
      dispatch({
        type: Types.CLEAR_MAP,
      });
    });
  });
};
