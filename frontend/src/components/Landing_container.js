import { connect } from 'react-redux';
import { fetchJobs } from '../actions/JobActions';
import Landing from './Landing';

const mapStateToProps = (state) => ({
  jobs: Object.values(state.entities.jobs),
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => dispatch(fetchJobs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
