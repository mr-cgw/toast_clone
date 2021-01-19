import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchApplications } from '../actions/ApplicationActions';
import ApplicationListItem from './ApplicationListItem';
import ApplicationDetailItem from './ApplicationDetailItem';
import { makeStyles, Typography } from '@material-ui/core';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function HorizViewSelection({ view, setView }) {
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function ApplicationList({ applications, fetchApplications }) {
  console.log('here');
  const [view, setView] = useState('list');
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const { id } = params;
  useEffect(() => {
    console.log('firing up fetch');
    fetchApplications('6005eca83bd3570f22e478d6');
  }, []);
  console.log('applications', applications);
  const renderDetail = () =>
    Object.values(applications).map((app) => (
      <ApplicationDetailItem application={app} key={app._id} />
    ));

  const renderList = () =>
    Object.values(applications).map((app) => (
      <ApplicationListItem application={app} key={app._id} />
    ));
  return (
    <div className={classes.root}>
      <div
        style={{
          width: '80%',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>
          Hunter's log
        </Typography>
        <HorizViewSelection view={view} setView={setView} />
      </div>
      {view === 'list' ? renderList() : renderDetail()}
    </div>
  );
}

export default connect(
  (state) => ({ applications: state.entities.applications }),
  (dispatch) => ({
    fetchApplications: (userId) => dispatch(fetchApplications(userId)),
  })
)(ApplicationList);
