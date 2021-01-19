import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: 'white',
    boxShadow: '0px 4px 3px 0px rgba(100, 100, 100, 0.1)',
  },
}));

function JobCard() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default JobCard;
