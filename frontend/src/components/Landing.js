import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import JobItem from './jobItem';

function Landing({ jobs, fetchJobs }) {
  useEffect(() => {
    fetchJobs();
  }, []);
  const [flag, setFlag] = useState(false);
  const [location, setLocation] = useState('All');
  const [position, setPosition] = useState('All-Pos');
  function handleChange(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }
  console.log('flag', flag);
  return (
    <div className="landing">
      <div className="land-top">
        <div className="loca-drop">
          <FormControl variant="outlined">
            <InputLabel id="loca">Location</InputLabel>
            <Select
              labelId="loca"
              id="demo-simple-select-outlined"
              value={location}
              onChange={handleChange}
              label="Location"
            >
              <MenuItem value="All">
                <em>All</em>
              </MenuItem>
              <MenuItem value={'Remote'}>Remote</MenuItem>
              <MenuItem value={'Los Angeles'}>LA</MenuItem>
              <MenuItem value={'San Francisco'}>SF</MenuItem>
              <MenuItem value={'Berlin'}>Berlin</MenuItem>
              <MenuItem value={'New York'}>NY</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="land-check">
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="All-Pos"
                control={<Checkbox color="primary" />}
                onChange={(e) => {
                  setFlag(!flag), setPosition(e.target.value);
                }}
                label="All"
                labelPlacement="start"
              />
              <FormControlLabel
                disabled={flag}
                value="fullstack"
                control={<Checkbox color="primary" />}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                label="full-stack"
                labelPlacement="start"
              />
              <FormControlLabel
                disabled={flag}
                value="frontend"
                control={<Checkbox color="primary" />}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                label="Frontend"
                labelPlacement="start"
              />
              <FormControlLabel
                disabled={flag}
                value="backend"
                control={<Checkbox color="primary" />}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                label="Backend"
                labelPlacement="start"
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>

      <div className="job-container">
        {jobs.map((job, idx) => (
          <JobItem
            job={job}
            key={job.id + idx}
            location={location}
            position={position}
          />
        ))}
      </div>
    </div>
  );
}

export default Landing;
