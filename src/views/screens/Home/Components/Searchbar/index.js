import Component from './searchbar';
import {connect} from 'react-redux';
import {checkPointSearch, fetchTrips} from '../../../../../redux/actions';

export const Searchbar = connect(
  null,
  {checkPointSearch, fetchTrips},
)(Component);
