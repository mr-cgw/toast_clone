import React from 'react';
import { Search } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';
import useStyles from './NavbarStyles';

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Search />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};
export default SearchBar;
