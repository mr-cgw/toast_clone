import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const AccountMenu = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  signoutUser,
}) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    <MenuItem
      onClick={() => {
        signoutUser();
        handleMenuClose();
      }}
    >
      Sign out
    </MenuItem>
  </Menu>
);

export default AccountMenu;
