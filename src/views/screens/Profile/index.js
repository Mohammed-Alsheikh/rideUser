import Profile from './Component';
import {connect} from 'react-redux';
import {resetPassword} from '../../../redux/actions';

const mapStateToProps = state => ({
  user: state.user.value,
});

export default connect(
  mapStateToProps,
  {resetPassword},
)(Profile);
