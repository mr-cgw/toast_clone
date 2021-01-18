import { makeStyles, TextField, withStyles } from '@material-ui/core';
import * as Colors from '../Colors';

export const CssTextField = withStyles({
  root: {
    '& label': {
      color: Colors.lightestGreen,
    },
    '& label.Mui-focused': {
      color: Colors.lightestGreen,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: Colors.lightestGreen,
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: Colors.lighterGreen,
      },
    },
  },
})(TextField);

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100wh',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 105,
  },
  signincard: {
    width: '40%',
    minWidth: 500,
    height: 400,
    borderRadius: 10,
    backgroundColor: Colors.navBlack,
    padding: 30,
    paddingLeft: 50,
    color: Colors.lightestGreen,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
  },

  leftPanel: {
    flex: 0.6,
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rightPanel: {
    paddingTop: 50,
    flex: 0.4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  submitButton: {
    color: Colors.lightestGreen,
    fontSize: 18,
  },
  input: {
    color: 'white',
  },
  logo: {
    marginTop: -100,
    width: '50%',
  },
  signin: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  uploadAvatar: {
    display: 'flex',
    margin: '2rem auto',
  },
  avatar: {
    marginRight: 20,
    width: 80,
    height: 80,
    [theme.breakpoints.up('sm')]: {
      width: 100,
      height: 100,
    },
  },
}));
