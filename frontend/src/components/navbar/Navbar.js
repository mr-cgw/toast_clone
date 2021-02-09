import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  receiveUser,
  getUser,
  signoutUserAction,
} from '../../actions/SessionActions';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import useStyles from './NavbarStyles';
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';
import { useHistory, useParams, Link, useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function Navbar({
  title,
  data,
  navType,
  currentUser,
  getUserInfo,
  signoutUser,
  loadingState,
}) {
  useEffect(() => {
    if (loadingState === 'loaded') return;
    if (!localStorage.getItem('jwtToken')) return;
    const decoded = jwt_decode(localStorage.getItem('jwtToken'));
    console.log('token', decoded);
    getUserInfo(decoded.id);
  }, []);
  console.log(currentUser);
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  // console.log("params", params);
  // console.log("data", data);
  // console.log("navType", navType);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'account-menu';
  const links = () => {
    if (!data) {
      return `Roasted`;
    } else if (
      params.hasOwnProperty('menuId') &&
      !params.hasOwnProperty('groupId')
    ) {
      return (
        <Link to="/menu" style={{ textDecoration: 'none', color: 'white' }}>
          Menus
        </Link>
      );
    } else if (
      params.hasOwnProperty('groupId') &&
      !params.hasOwnProperty('dishId')
    ) {
      return (
        <span>
          <Link to="/menu" style={{ textDecoration: 'none', color: 'white' }}>
            Menus
          </Link>
          {` / `}
          <Link
            to={`/menu/${data.menuId}`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            {data.menuName}
          </Link>
        </span>
      );
    } else if (
      params.hasOwnProperty('dishId') &&
      !params.hasOwnProperty('modifierId')
    ) {
      return (
        <span>
          <Link to="/menu" style={{ textDecoration: 'none', color: 'white' }}>
            Menus
          </Link>
          {` / `}
          <Link
            to={`/menu/${data.group.menuId}`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            {data.group.menuName}
          </Link>
          {` / `}
          <Link
            to={`/group/${params.groupId}`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            {data.group.name}
          </Link>
        </span>
      );
    }
  };
  const location = useLocation();
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
            {title ? links() : 'Roasted'}
          </Typography>
          <div className={classes.grow} />
          {title ? '' : location.pathname === '/signin' ? '' : <SearchBar />}
          {location.pathname === '/signin' ? (
            ''
          ) : (
            <div className={classes.sectionDesktop}>
              {currentUser._id ? (
                <IconButton
                  aria-controls={menuId}
                  onClick={(e) => handleMenuOpen(e)}
                >
                  <MenuIcon style={{ color: 'white' }} />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => history.push('/signin')}
                  style={{ backgroundColor: 'white', color: '#444' }}
                >
                  SIGN IN
                </Button>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <AccountMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        signoutUser={signoutUser}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.session,
  loadingState: state.ui.status,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(receiveUser(user)),
  getUserInfo: (userId) => dispatch(getUser(userId)),
  signoutUser: () => dispatch(signoutUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
