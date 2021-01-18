import React, { useState } from 'react';
import * as Colors from '../Colors';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
function Landing() {
  const [location, setLocation] = useState('SF');
  function handleChange(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }
  return (
    <div>
      <div className="loca-drop">
        <FormControl variant="outlined">
          <InputLabel id="loca">Age</InputLabel>
          <Select
            labelId="loca"
            id="demo-simple-select-outlined"
            value={location}
            onChange={handleChange}
            label="Location"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'SF'}>SF</MenuItem>
            <MenuItem value={'LA'}>LA</MenuItem>
            <MenuItem value={'SEA'}>SEA</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Landing;
