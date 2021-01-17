import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import * as Colors from '../Colors';
import { CssTextField, useStyles } from './CssTextField';

function Edit({ user, updateUser }) {
  const [user, setUser] = useState(user);
  const [newPassword, setNewPassword] = useState('');
  const [userNameErrors, setUserNameErrors] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const classes = useStyles();
  function handleSubmit(e) {
    e.preventDefault();
  }

  function update(field) {
    if (field === 'newPassword') {
      return (e) => setNewPassword(e.currentTarget.value);
    } else {
      return (e) => setUser({ ...user, [field]: e.currentTarget.value });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <header>Edit form</header>
        <div>
          <CssTextField
            type="text"
            value={user.username}
            onChange={update('username')}
            className={classes.textField}
            required
            label="username"
            variant="outlined"
            fullWidth={true}
            inputProps={{
              className: classes.input,
            }}
          />
          <p>{userNameErrors}</p>

          <CssTextField
            type="text"
            value={user.email}
            onChange={update('email')}
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
            type="password"
            value={user.password}
            onChange={update('password')}
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

          <CssTextField
            type="password"
            value={newPassword}
            onChange={update('NewPassword')}
            className={classes.textField}
            required
            label="confirm password"
            variant="outlined"
            fullWidth={true}
            inputProps={{
              className: classes.input,
            }}
          />
        </div>
        <div className={classes.rightPanel}>
          <div></div>
          <img
            className={classes.logo}
            src={user.avatarUrl}
            alt={'vertical logo'}
          />
          <Button className={classes.submitButton}>SAVE CHANGES</Button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
