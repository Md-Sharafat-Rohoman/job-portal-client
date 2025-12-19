import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobPromise }) => {
    const jobs = use(jobPromise);
    console.log(jobs)
    return (


        <div>
            <h1 className='text-4xl text-center py-5 font-semibold'>Hot Jobs of the Day</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;