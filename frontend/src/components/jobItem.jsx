import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);
// English.
function JobItem({ job, location, position }) {
  if (job.location.includes(location) || location === 'All') {
    if (job.category.includes(position) || position === 'All-Pos') {
      return (
        <div className="job-item">
          <span className="job-company">{job.company}</span>
          <img src={job.companyLogo} />
          <span className="job-position">{job.position}</span>
          <span className="job-location">{job.location}</span>
          <span className="job-time">
            <ReactTimeAgo date={job.time} locale="en-US" />
          </span>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
}

export default JobItem;
