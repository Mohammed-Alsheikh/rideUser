import Types from '@types/index';

const initialState = {
  visible: false,
  type: 'welcome',
  onCancel: () => {},
  onConfirm: () => {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SNACK_STATE: {
      return Object.assign({}, state, action.payload);
    }
    case Types.CLEAR_SNACK: {
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
