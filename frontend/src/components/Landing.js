import React, { useState } from 'react';
import * as Colors from '../Colors';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Landing() {
  const [location, setLocation] = useState('SF');
  function handleChange(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }
  return (
    <div>
      <div className="land-top">
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
        <div className="land-check">
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="all"
                control={<Checkbox color="primary" />}
                label="All"
                labelPlacement="start"
              />
              <FormControlLabel
                value="frontend"
                control={<Checkbox color="primary" />}
                label="Frontend"
                labelPlacement="start"
              />
              <FormControlLabel
                value="backend"
                control={<Checkbox color="primary" />}
                label="Backend"
                labelPlacement="start"
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Landing;
