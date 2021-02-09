import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './SigninStyles';
import Card from '../cards/Card';
import Input from '../inputs/Input';
import { Button } from '@material-ui/core';
import { signin } from '../../actions/SessionActions';
import Navbar from '../navbar/Navbar';

function Info({ signin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    signin(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email" value={email} setName={setEmail} />
      <Input
        label="Password"
        type="password"
        value={password}
        setName={setPassword}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{
          fontSize: 15,
          fontWeight: 100,
          width: '100%',
          marginTop: '1rem',
          height: 50,
          backgroundColor: '#444',
        }}
      >
        Sign in
      </Button>
    </form>
  );
}

function Signin({ signinUser, user }) {
  const history = useHistory();
  useEffect(() => {
    if (user._id || user.id) {
      history.push('/');
    }
    console.log('user', user);
  }, [user]);
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Card
          component={() => <Info signin={signinUser} />}
          extraStyle={{ padding: '50px 100px', minWidth: 100 }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  user: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  signinUser: (user) => dispatch(signin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
