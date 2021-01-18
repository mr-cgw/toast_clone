import React from 'react';
import * as Colors from '../Colors';
import {
  Grid,
  makeStyles,
  Typography,
  Avatar,
  IconButton,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#F8F8F8',
    },
    footer: {
      maginTop: '2rem',
      borderTop: `1px solid #eaeaea`,
      padding: '2rem',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      [theme.breakpoints.up('sm')]: {
        padding: '2rem 5rem',
      },
    },
    footerText: {
      color: 'gray',
      fontSize: 14,
    },
    footerContainer: {
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerContent: {
      display: 'flex',
      margin: '0 0 2rem 0',
    },
    footerLeft: {
      flex: 0.0,
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.up('sm')]: {
        flex: 0.3,
        display: 'flex',
      },
    },
    footerRight: {
      flex: 0.0,
      display: 'none',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flex: 0.3,
      },
    },
    textLogo: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    rightCon: {
      padding: '2rem 7rem',
    },
    footerMid: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > div': {
        display: 'flex',
      },
      [theme.breakpoints.up('sm')]: {
        flex: 0.4,
      },
    },
    leftCon: {
      fontSize: 14,
      fontWeight: 700,
      color: Colors.navBlack,
      lineHeight: '3rem',
    },
    avatars: {
      margin: '2rem 1rem 0 1rem',
    },
    avatarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    name: {
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.navBlack,
    },
  }));
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.footerContainer}>
        <div
          style={{ width: '50%', backgroundColor: '#eaeaea', height: 3 }}
        ></div>
        <div
          style={{
            margin: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            src="https://res.cloudinary.com/willwang/image/upload/v1610908189/avatarDefault_ie65ti.png"
            style={{
              width: 100,
              height: 100,
              opacity: '.9',
              cursor: 'pointer',
            }}
            onClick={() => history.push('/')}
          />
        </div>
        <div
          style={{ width: '50%', backgroundColor: '#eaeaea', height: 3 }}
        ></div>
      </div>
      <div className={classes.footerContent}>
        <div className={classes.footerLeft}>
          <Typography className={classes.leftCon}>PRIVACY POLICY</Typography>
          <Typography className={classes.leftCon}>
            TERMS & CONDITIONS
          </Typography>
          <Typography className={classes.leftCon}>ABOUT US</Typography>
        </div>
        <div className={classes.footerMid}>
          <Typography style={{ color: Colors.navBlack, fontWeight: 900 }}>
            TEAM
          </Typography>
          <Grid
            container
            className={classes.midAvatars}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Grid item className={classes.avatarContainer}>
              <IconButton
                target="_blank"
                className={classes.avatars}
                href="https://www.linkedin.com/in/michael-chen-a41770115/"
              >
                <Avatar src="https://avatars2.githubusercontent.com/u/17303510?s=400&u=1e247e6d0bce5f187159322eec9ae2db99159f12&v=4" />
              </IconButton>
              <Typography className={classes.name}>Michael</Typography>
            </Grid>

            <Grid item className={classes.avatarContainer}>
              <IconButton
                className={classes.avatars}
                href="https://www.linkedin.com/in/rex-gao-61a9a5139/"
                target="_blank"
              >
                <Avatar src="https://avatars0.githubusercontent.com/u/65146734?s=400&u=513f1dd90629d2ac3820fc6766893ec48aa420da&v=4" />
              </IconButton>
              <Typography className={classes.name}>Rex</Typography>
            </Grid>

            <Grid item className={classes.avatarContainer}>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/will-wang-6b1ba675/"
                className={classes.avatars}
              >
                <Avatar src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/525/medium/Yizhe_Wang.jpg?1602196612" />
              </IconButton>
              <Typography className={classes.name}>Will</Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footerRight}>
          <Typography className={classes.textLogo}>INFIHUNT</Typography>
          <Typography className={classes.rightCon}>
            InfiHunt is a SaaS that helps developers log their job hunting
            histories and look for positions that fit.
          </Typography>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.footerText}>
          <span style={{ color: Colors.darkerGreen, fontWeight: 800 }}>©</span>{' '}
          2021 infiHUNT. All rights reserved.
        </Typography>
        <Typography className={classes.footerText}>
          Designed and made with <span style={{ color: 'red' }}>♥</span> in
          California by the{' '}
          <a
            href="https://github.com/atlasneiko/Infinite_hunt"
            target="_blank"
            style={{ color: Colors.navBlack, fontWeight: 800 }}
          >
            Hunters
          </a>
        </Typography>
        <Typography className={classes.footerText}>
          <span style={{ color: Colors.darkerGreen, fontWeight: 800 }}>
            10284
          </span>{' '}
          jobs applied on infiHUNT
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
