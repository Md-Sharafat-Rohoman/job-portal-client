import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = useLoaderData();

    return (
        <div>
            <h1>{title}</h1>
            <p>{category}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;