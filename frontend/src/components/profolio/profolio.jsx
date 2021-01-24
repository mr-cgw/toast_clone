import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Edit from './edit_form';
import { Avatar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import BarChartIcon from '@material-ui/icons/BarChart';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import * as Colors from '../../Colors';
import ApplicationList from '../ApplicationList';
import Chart from '../charts/allChartsContainer';
function Profolio({ currentUser, applications, updateUser }) {
  const [isOpen, setShow] = useState(false);
  const [isOpen2, setShow2] = useState(false);
  function toggleModal() {
    setShow(!isOpen);
  }
  function toggleModal2() {
    setShow2(!isOpen2);
  }

  const [phoneScreen, setPhoneScreen] = useState(0);
  const [techInterview, setTechInterview] = useState(0);
  const [offer, setOffer] = useState(0);
  const [onSite, setOnSite] = useState(0);
  useEffect(() => {
    let pCounter = 0;
    let tCounter = 0;
    let oCounter = 0;
    let onCounter = 0;
    applications.forEach((app) => {
      if (app.phoneScreen) pCounter += 1;
      if (app.techInterview) tCounter += 1;
      if (app.Offer) oCounter += 1;
      if (app.onSite) onCounter += 1;
    });
    setPhoneScreen(pCounter);
    setTechInterview(tCounter);
    setOffer(oCounter);
    setOnSite(onCounter);
  }, [applications]);

  return (
    <div>
      <div className="profolio-top">
        <Avatar
          src={currentUser.avatarUrl}
          style={{
            marginTop: 20,
            marginRight: 20,
            width: 120,
            height: 120,
            border: '1px solid black',
          }}
        />
        <div className="profile-data">
          <h3>{currentUser.username}</h3>
          <span>{applications.length} position applied </span>
          <span>{phoneScreen} phone screenings </span>
          <span>{techInterview} tech interviews </span>
          <span>{offer} job offers </span>
          <span>{onSite} on site </span>
        </div>
        <div className="profile-icon">
          <IconButton
            aria-label="Close"
            onClick={toggleModal}
            style={{
              position: 'relative',
              height: 50,
            }}
          >
            <EditTwoToneIcon style={{ color: Colors.navBlack }} />
          </IconButton>
          <IconButton
            aria-label="Chart"
            onClick={toggleModal2}
            style={{
              position: 'relative',
              height: 50,
              top: 108,
            }}
          >
            <BarChartIcon style={{ color: Colors.navBlack }} />
          </IconButton>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="edit user"
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
        <Edit
          currentUser={currentUser}
          updateUser={updateUser}
          othertoggle={toggleModal}
        />
      </Modal>

      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModal2}
        contentLabel="edit user"
        className="chart-modal"
        overlayClassName="edit-overlay"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <IconButton
          aria-label="Close"
          onClick={toggleModal2}
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        >
          <CloseIcon style={{ color: Colors.lightestGreen }} />
        </IconButton>
        <Chart />
      </Modal>
      <div>
        <ApplicationList />
      </div>
    </div>
  );
}

export default Profolio;
