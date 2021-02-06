import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginBottom: '2rem',
    fontFamily: "'Oswald', sans-serif",
  },
  title: {
    fontSize: 30,
    fontWeight: 800,
    color: '#444',
  },
  functionList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  functionItem: {
    cursor: 'pointer',
    width: '100%',
    marginTop: 20,
  },
}));

export default useStyles;
