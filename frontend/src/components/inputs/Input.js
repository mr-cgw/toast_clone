import { makeStyles, InputBase, Typography, fade } from '@material-ui/core';
export default function InputWithLabel({ label, value, setName }) {
  const withStyles = makeStyles((theme) => ({
    input: {
      marginLeft: '1rem',
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: "'Oswald', sans-serif",
      width: 300,
      '&:focus': {
        boxShadow: `${fade('#aaa', 0.25)} 0 0 0 0.2rem`,
        borderColor: '#aaa',
      },
    },
  }));
  const classes = withStyles();
  return (
    <label
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400,
        margin: '1rem 0',
      }}
    >
      <Typography>{label}: </Typography>
      <InputBase
        className={classes.input}
        value={value}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
}
