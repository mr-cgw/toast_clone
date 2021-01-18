import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchApplications } from '../actions/ApplicationActions';
import ApplicationListItem from './ApplicationListItem';
import { makeStyles } from '@material-ui/core';
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
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const { id } = params;
  useEffect(() => {
    console.log('firing up fetch');
    fetchApplications('600480d08f58520e79626ff9');
  }, []);
  console.log('applications', applications);
  return (
    <div className={classes.root}>
      {Object.values(applications).map((app) => (
        <ApplicationListItem application={app} key={app._id} />
      ))}
    </div>
  );
}

export default connect(
  (state) => ({ applications: state.entities.applications }),
  (dispatch) => ({
    fetchApplications: (userId) => dispatch(fetchApplications(userId)),
  })
)(ApplicationList);
