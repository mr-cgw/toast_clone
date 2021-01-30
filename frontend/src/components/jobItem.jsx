import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import { Link } from 'react-router-dom';

import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);
// English.
function JobItem({ job, location, positions }) {
  if (job.location.includes(location) || location === 'All') {
    if (positions.includes(job.category) || positions.length === 0) {
      return (
        <Link to={{ pathname: '/newApplication', data: job }}>
          <div className="job-item">
            <span className="job-company">{job.company}</span>
            <div
              className="img"
              style={{
                backgroundColor: 'white',
                backgroundImage: job.companyLogo
                  ? `url(${job.companyLogo})`
                  : `url(https://res.cloudinary.com/willwang/image/upload/v1611903119/wqaqa8yhpr9tw80vbs4w.png)`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: 100,
                height: 100,
                borderRadius: 999,
                boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.1)',
              }}
            ></div>
            {/* <img src={job.companyLogo} /> */}
            <span className="job-position">{job.position}</span>
            <span className="job-location">
              {job.location.length > 10
                ? job.location.slice(0, 10) + '...'
                : job.location}
            </span>
            <span className="job-time">
              <ReactTimeAgo date={job.time} locale="en-US" />
            </span>
          </div>
        </Link>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
}

export default JobItem;
