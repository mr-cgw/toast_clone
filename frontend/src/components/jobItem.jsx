import React from 'react';

function JobItem({ job }) {
  return (
    <div className="job-item">
      {/* <h3>{job.company}</h3> */}
      <img src={job.companyLogo} />
    </div>
  );
}

export default JobItem;
