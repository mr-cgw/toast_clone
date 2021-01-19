import React, { useState } from 'react';

function JobItem({ job }) {
  function display() {
    let now = Date.now();
    let elapse = now - job.time;
    let seconds = elapse / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let msg = '';
    if (days >= 1) {
      msg = `${Math.trunc(days)} days ago`;
    } else if (hours >= 1) {
      msg = `${Math.trunc(hours % 24)} hours ago`;
    } else if (minutes >= 1) {
      msg = `${Math.trunc(minutes % 60)} minutes ago`;
    } else {
      msg = `Just now`;
    }
    return msg;
  }
  return (
    <div className="job-item">
      <span className="job-company">{job.company}</span>
      <img src={job.companyLogo} />
      <span>{job.position}</span>
      <span className="job-location">{job.location}</span>
      <span className="job-time">{display()}</span>
    </div>
  );
}

export default JobItem;
