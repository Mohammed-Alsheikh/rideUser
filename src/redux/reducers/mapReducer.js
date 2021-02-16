import Types from '@types/index';
import MapTypes from '@types/map';

const initialState = {
  mode: MapTypes.DEFAULT, // default | tracking | approved
  driverObj: null,
  busLocation: null,
  myLocation: null,
  checkpoints: [],
  duration: 0,
  distance: 0,
  nearestCheckpoint: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.SET_TRACKING: {
      return Object.assign({}, state, action.payload);
    }
    case Types.SET_MY_LOCATION: {
      return Object.assign({}, state, {myLocation: action.payload});
    }
    case Types.SET_DURATION_DISTANCE: {
      return Object.assign({}, state, action.payload);
    }
    case Types.FETCH_TRIPS_CHECKPOINTS: {
      return Object.assign({}, state, {checkpoints: action.payload});
    }
    case Types.SET_NEAREST_CHECKPOINT: {
      return Object.assign({}, state, {
        nearestCheckpoint: action.payload,
        mode: MapTypes.APPROVED,
      });
    }
    case Types.CLEAR_MAP: {
      return {
        ...initialState,
      };
    }
    case Types.LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
