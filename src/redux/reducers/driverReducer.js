import ACTION_TYPES from '../constants';
import r from 'reactotron-react-native';
const initialState = {
  id: null,
  value: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DRIVER: {
      return {
        id: state.id,
        value: [...state.value, action.payload],
      };
    }
    case ACTION_TYPES.SET_BUS: {
      return {
        id: action.payload.id,
        value: state.value,
      };
    }
    case ACTION_TYPES.CLEAR: {
      return initialState;
    }
    case ACTION_TYPES.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
