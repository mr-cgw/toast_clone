import { connect } from 'react-redux';
import { fetchApplications } from '../../actions/ApplicationActions';
import Charts from './allCharts.jsx';

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  applications: state.entities.applications,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApplications: (userId) => dispatch(fetchApplications(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
