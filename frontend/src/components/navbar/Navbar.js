import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import useStyles from './NavbarStyles';
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';
import { useHistory } from 'react-router-dom';

export default function Navbar({ title }) {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'account-menu';

  return (
    <div className={classes.grow}>
      <AppBar position="static" elevation={1}>
        <Toolbar
          style={{ backgroundColor: '#444', color: 'white', height: '10vh' }}
        >
          <img
            src="https://res.cloudinary.com/willwang/image/upload/v1612660704/logl_hd44c3.png"
            style={{
              height: '5vh',
              cursor: 'pointer',
            }}
            onClick={() => history.push('/')}
          />
          <Typography
            style={{
              marginLeft: '1rem',
              fontFamily: "'Anton', sans-serif",
              letterSpacing: 3,
            }}
          >
            {title ? title : 'ROASTED'}
          </Typography>
          <div className={classes.grow} />
          {title ? '' : <SearchBar />}
          <div className={classes.sectionDesktop}>
            <IconButton aria-controls={menuId} onClick={handleMenuOpen}>
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AccountMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </div>
  );
}
