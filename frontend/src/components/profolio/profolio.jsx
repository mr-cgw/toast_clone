import React, { useState } from 'react';
import Modal from 'react-modal';
import Edit from './edit_form';
import { Avatar, Typography } from '@material-ui/core';

function Profolio() {
  const [isOpen, setShow] = useState(false);
  function toggleModal() {
    setShow(!isOpen);
  }
  return (
    <div>
      <Avatar src={user.avatarUrl} style={{ marginTop: 20, marginRight: 20 }} />
      <h3>{currentUser.name}</h3>
      <button onClick={toggleModal}>edit</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="edit user"
        className="edit-modal"
        overlayClassName="edit-overlay"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <Edit user={currentUser} updateUser={updateUser} />
        <button onclick={toggleModal}>close</button>
      </Modal>
      <div></div>
    </div>
  );
}

export default Profolio;
