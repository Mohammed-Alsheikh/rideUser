import {combineReducers} from 'redux';

import user from './authReducer';
import driver from './driverReducer';
import error from './errorReducer';
import snackbar from './snackbarReducer';
import trips from './tripsReducer';
import map from './mapReducer';

export default combineReducers({
  user,
  map,
  driver,
  trips,
  snackbar,
  error,
});
