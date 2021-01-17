import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/UserActions';
import Profolio from './profolio';

const mapStateToProps = (state) => ({
  currentUser: state.entities.currentUser,
  jobLists: Object.values(state.entites.jobLists),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profolio);
