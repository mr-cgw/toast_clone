import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import useStyles from './NavbarStyles';
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';
import { useHistory, useParams, Link } from 'react-router-dom';

export default function Navbar({ title, data, navType }) {
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  console.log("params", params);
  console.log("data", data);
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
      return (`Roasted`)
    } else if (params.hasOwnProperty("menuId") && !params.hasOwnProperty("groupId")) {
      return (<Link to='/menu' style={{ textDecoration: "none", color: "white" }}>Menus</Link>)
    } else if (params.hasOwnProperty("groupId") && !params.hasOwnProperty("dishId")) {
      return (
        <span>
          < Link to='/menu' style={{ textDecoration: "none", color: "white" }}>Menus</Link >
          {` / `}
          <Link to={`/menu/${data.menuId}`} style={{ textDecoration: "none", color: "white" }}>{data.menuName}</Link>
        </span>
      )
    } else if (params.hasOwnProperty("dishId") && !params.hasOwnProperty("modifierId")) {
      // console.log(`Edit menus/menu_${data.group.menuId}/group_${params.groupId}/`)
      return (
        // `Edit menus/menu_${data.group.menuId}/group_${params.groupId}/`
        <span >
          < Link to='/menu' style={{ textDecoration: "none", color: "white" }}>Menus</Link >
          { ` / `}
          <Link to={`/menu/${data.group.menuId}`} style={{ textDecoration: "none", color: "white" }}>{data.group.menuName}</Link>
          { ` / `}
          <Link to={`/group/${params.groupId}`} style={{ textDecoration: "none", color: "white" }}>{data.group.name}</Link>
        </span >
      )
    }
  }
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
            {title ? links() : "Roasted"}
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
