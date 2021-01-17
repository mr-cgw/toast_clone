import React, { useState } from 'react';
import { Typography, Button, Avatar } from '@material-ui/core';
import * as Colors from '../Colors';
import { CssTextField, useStyles } from './CssTextField';

function Edit({ user, updateUser }) {
  const [user, setUser] = useState(user);
  const [newPassword, setNewPassword] = useState('');
  const [isOpen, setShow] = useState(false);
  function toggleModal() {
    setShow(!isOpen);
  }
  const [displayMsg, setDisplayMsg] = useState('');
  const [userNameErrors, setUserNameErrors] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [passwordErrors, setPasswordErrors] = useState('');
  const classes = useStyles();
  function handleSubmit(e) {
    e.preventDefault();
    updateUser(user).then((res) => {
      if (res.type === 'RECEIVE_SESSION_ERRORS') {
        setDisplayMsg('Incorrect Email or Password ');
      } else {
        setDisplayMsg('Successfully Updated!');
      }
    });
    toggleModal();
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
          <p>{passwordErrors}</p>
        </div>
        <div className={classes.rightPanel}>
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
          <Button className={classes.submitButton}>SAVE CHANGES</Button>
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
        {displayMsg}
        <button onclick={toggleModal}>close</button>
      </Modal>
    </div>
  );
}

export default Edit;
