import Types from '@types/index';

const initialState = {
  visible: false,
  trips: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.SET_TRIPS_VISIBLE: {
      return Object.assign({}, state, {visible: action.payload});
    }
    case Types.FETCH_TRIPS: {
      return Object.assign({}, state, {
        trips: state.trips.concat(action.payload),
      });
    }
    case Types.CLEAR_TRIPS_AND_SET_VISIBLE: {
      return Object.assign({}, state, {
        visible: true,
        trips: [],
      });
    }
    case Types.NO_TRIPS: {
      return Object.assign({}, state, {visible: true, trips: ['no trips']});
    }
    case Types.CLEAR_TRIPS: {
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
