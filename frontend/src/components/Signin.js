import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import * as Colors from '../Colors';
import { CssTextField, useStyles } from './CssTextField';
import { signin } from '../actions/SessionActions';
import { validate } from 'email-validator';

function Signin({ signinUser }) {
  const classes = useStyles();
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    if (!validate(email)) setEmailErrors('Invalid Email Address');
    if (password.length < 6)
      setPasswordErrors('Password must be at least 6 characters');
    if (!emailErrors && !passwordErrors) {
      const userData = {
        email,
        password,
      };
      signinUser(userData);
    }
  };
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                className: classes.input,
              }}
            />
            <p style={{ color: 'red' }}>{emailErrors}</p>
            <CssTextField
              className={classes.textField}
              required
              label="password"
              type="password"
              variant="outlined"
              fullWidth={true}
              inputProps={{
                className: classes.input,
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: 'red' }}>{passwordErrors}</p>
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
          <Button onClick={handleSignIn} className={classes.submitButton}>
            SIGN IN
          </Button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  signinUser: (user) => dispatch(signin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
