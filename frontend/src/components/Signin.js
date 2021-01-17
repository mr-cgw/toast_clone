import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import * as Colors from '../Colors';
import { CssTextField, useStyles } from './CssTextField';

function Signin() {
  const classes = useStyles();
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  return (
    <div className={classes.root}>
      <div className={classes.signincard}>
        <div className={classes.leftPanel}>
          <Typography style={{ fontSize: 18 }}>SIGN IN</Typography>
          <div className={classes.inputs}>
            <CssTextField
              className={classes.textField}
              required
              label="email"
              variant="outlined"
              fullWidth={true}
              inputProps={{
                className: classes.input,
              }}
            />
            <p>{emailErrors}</p>
            <CssTextField
              className={classes.textField}
              required
              label="password"
              variant="outlined"
              fullWidth={true}
              inputProps={{
                className: classes.input,
              }}
            />
            <p>{passwordErrors}</p>
            <div className={classes.signup}>
              <Typography style={{ fontSize: '0.9rem' }}>
                not account yet?{' '}
                <Link
                  style={{ marginLeft: 10, color: Colors.lighterGreen }}
                  to="/signup"
                >
                  Sign up
                </Link>
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.rightPanel}>
          <div></div>
          <img
            className={classes.logo}
            src={`https://res.cloudinary.com/willwang/image/upload/v1610862325/verticalLogo_fiosdq.png`}
            alt={'vertical logo'}
          />
          <Button className={classes.submitButton}>SIGN IN</Button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
