import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobPromise }) => {
    const jobs = use(jobPromise);
    console.log(jobs)
    return (


        <div>
            {
                jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
            }
        </div>
    );
};

export default HotJobs;