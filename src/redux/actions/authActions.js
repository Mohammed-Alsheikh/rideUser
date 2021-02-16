import ACTION_TYPES from '../constants';
import Parse from 'parse/react-native';
import r from 'reactotron-react-native';

export const registerUser = (
  username,
  password,
  email,
  phone,
) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.AUTH_ERROR,
    payload: '',
  });
  const User = new Parse.User();
  User.set('username', username);
  User.set('password', password);
  User.set('email', email);
  User.set('mail', email);
  User.set('phone', phone);
  User.set('isDriver', false);
  try {
    const res = await User.signUp();
    const user = await fetchUser(res.id, dispatch);
    dispatch({
      type: ACTION_TYPES.FETCH,
      payload: {
        id: user.id,
        username: user.get('username'),
        email: user.get('email'),
        phone: user.get('phone'),
        isDriver: user.get('isDriver'),
        status: user.get('status'),
      },
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.AUTH_ERROR,
      payload: error.message,
    });
  }
};

export const loginUser = (username, password) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.AUTH_ERROR,
    payload: '',
  });
  try {
    const res = await Parse.User.logIn(username, password);
    const user = await fetchUser(res.id, dispatch);
    dispatch({
      type: ACTION_TYPES.FETCH,
      payload: {
        id: user.id,
        username: user.get('username'),
        email: user.get('email'),
        phone: user.get('phone'),
        isDriver: user.get('isDriver'),
        status: user.get('status'),
      },
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.AUTH_ERROR,
      payload: error.message,
    });
  }
};

export const logout = () => dispatch => {
  dispatch({type: ACTION_TYPES.LOGOUT});
};

export const fetchUser = async id => {
  const User = new Parse.User();
  const query = new Parse.Query(User);

  const user = await query.get(id);
  return user;
};

export const resetPassword = password => async dispatch => {
  try {
    const user = Parse.User.current();
    user.setPassword(password);
    await user.save();
  } catch (error) {
    r.logImportant({e: error.message});
    dispatch({
      type: ACTION_TYPES.AUTH_ERROR,
      payload: error.message,
    });
  }
};
