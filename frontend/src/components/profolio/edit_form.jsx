import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { validate } from 'email-validator';
import { Typography, Button, Avatar } from '@material-ui/core';

import { CssTextField, useStyles } from '../CssTextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import * as Colors from '../../Colors';

function Edit({ currentUser, updateUser, othertoggle }) {
  const [isOpen, setShow] = useState(false);
  function toggleModal() {
    setShow(!isOpen);
    othertoggle();
  }
  const [displayMsg, setDisplayMsg] = useState('');
  const [userNameErrors, setUserNameErrors] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const [newPasswordErrors, setNewPasswordErrors] = useState('');
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState(currentUser.password);
  const [newPassword, setNewPassword] = useState('');
  const [username, setUsername] = useState(currentUser.username);
  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatarUrl);
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();

    if (username.length < 6)
      setUserNameErrors('Username must be at least 6 characters');
    if (!validate(email)) setEmailErrors('Email is invalid');
    if (password.length < 6)
      setPasswordErrors('Password must be at least 6 characters');
    if (newPassword.length < 6)
      setNewPasswordErrors('Password must be at least 6 characters');
    if (!userNameErrors && !emailErrors && !passwordErrors) {
      updateUser({ username, email, password, newPassword }).then((res) => {
        if (res.type === 'RECEIVE_SESSION_ERRORS') {
          setDisplayMsg('Incorrect Email or Password ');
        } else {
          setDisplayMsg('Successfully Updated!');
        }
        setShow(!isOpen);
      });
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
        setAvatarUrl(data.url);
      })
      .catch((err) => console.log('error', err));
  };

  return (
    <div className={classes.root} style={{ paddingTop: '30px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <div className={classes.leftPanel}>
          <CssTextField
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
            className={classes.textField}
            required
            label="username"
            variant="outlined"
            fullWidth={true}
            inputProps={{
              className: classes.input,
            }}
          />
          <p style={{ color: 'red' }}>{userNameErrors}</p>

          <CssTextField
            type="text"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textField}
            required
            label="email"
            variant="outlined"
            fullWidth={true}
            inputProps={{
              className: classes.input,
            }}
          />
          <p style={{ color: 'red' }}>{emailErrors}</p>

          <CssTextField
            type="password"
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.textField}
            required
            label="password"
            variant="outlined"
            fullWidth={true}
            inputProps={{
              className: classes.input,
            }}
          />
          <p style={{ color: 'red' }}>{passwordErrors}</p>

          <CssTextField
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={classes.textField}
            required
            label="confirm password"
            variant="outlined"
            fullWidth={true}
            inputProps={{
              className: classes.input,
            }}
          />
          <p style={{ color: 'red' }}>{newPasswordErrors}</p>
        </div>
        <div className={classes.rightPanel} style={{ paddingLeft: '80px' }}>
          <label>
            <Avatar
              src={avatarUrl}
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
