import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/UserActions';
import Profolio from './profolio';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  applications: Object.values(state.entities.applications),
  //   updateError: state.errors.sessionErrors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profolio);
