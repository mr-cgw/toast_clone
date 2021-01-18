import React, { useState } from 'react';
import Modal from 'react-modal';
import { Typography, Button, Avatar } from '@material-ui/core';

import { CssTextField, useStyles } from '../CssTextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import * as Colors from '../../Colors';

function Edit({ currentUser, updateUser, othertoggle }) {
  const [user, setUser] = useState(currentUser);
  const [newPassword, setNewPassword] = useState('');
  const [isOpen, setShow] = useState(false);
  function toggleModal() {
    setShow(!isOpen);
    othertoggle();
  }
  const [displayMsg, setDisplayMsg] = useState('');
  const [userNameErrors, setUserNameErrors] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.length < 6)
      setUserNameErrors('Username must be at least 6 characters');
    if (!validate(email)) setEmailErrors('Email is invalid');
    if (password.length < 6)
      setPasswordErrors('Password must be at least 6 characters');
    if (!userNameErrors && !emailErrors && !passwordErrors) {
      updateUser({ ...user, newPassword }).then((res) => {
        if (res.type === 'RECEIVE_SESSION_ERRORS') {
          setDisplayMsg('Incorrect Email or Password ');
        } else {
          setDisplayMsg('Successfully Updated!');
        }
      });
      setShow(!isOpen);
    }
  }

  function update(field) {
    if (field === 'newPassword') {
      return (e) => setNewPassword(e.currentTarget.value);
    } else {
      return (e) => setUser({ ...user, [field]: e.currentTarget.value });
    }
  }
  const handleAvatar = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'dribbble');
    data.append('cloud_name', 'willwang');
    fetch('https://api.cloudinary.com/v1_1/willwang/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ ...user, avatarUrl: data.url });
        console.log('data', data.url);
      })
      .catch((err) => console.log('error', err));
  };

  return (
    <div className={classes.root} style={{ paddingTop: '30px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <div className={classes.leftPanel}>
          <CssTextField
            type="text"
            value={user.username || ''}
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
            value={user.email || ''}
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
            value={user.password || ''}
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
            onChange={update('newPassword')}
            className={classes.textField}
            required
            label="confirm password"
            variant="outlined"
            fullWidth={true}
            inputProps={{
              className: classes.input,
            }}
          />
          <p>{passwordErrors}</p>
        </div>
        <div className={classes.rightPanel} style={{ paddingLeft: '80px' }}>
          <label>
            <Avatar
              src={user.avatarUrl}
              style={{
                marginRight: 10,
                width: 100,
                height: 100,
                cursor: 'pointer',
              }}
            />
            <input
              type="file"
              hidden
              onChange={(e) => handleAvatar(e.target.files[0])}
            />
          </label>
          <Button type="submit" className={classes.submitButton}>
            SAVE CHANGES
          </Button>
        </div>
      </form>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="display update message"
        className="edit-modal"
        overlayClassName="edit-overlay"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <IconButton
          aria-label="Close"
          onClick={toggleModal}
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        >
          <CloseIcon style={{ color: Colors.lightestGreen }} />
        </IconButton>
        <span className="update-msg">{displayMsg}</span>
      </Modal>
    </div>
  );
}

export default Edit;
