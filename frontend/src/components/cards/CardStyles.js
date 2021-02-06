import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0 0 5px 1px rgba(0,0,0, 0.1)',
    borderRadius: 10,
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
  },
}));

export default useStyles;
