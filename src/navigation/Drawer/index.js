import Drawer from './Drawer';
import {logout} from '../../redux/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  user: state.user.value,
});

export default connect(
  mapStateToProps,
  {logout},
)(Drawer);
