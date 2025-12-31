import React, { use } from 'react';

const JobList = ({jobsCreatedByPromise}) => {
    const jobs = use(jobsCreatedByPromise);
    return (
        <div>
            <h2 className='text-3xl'>Jobs created By you : {jobs.length}</h2>
        </div>
    );
};

export default JobList;