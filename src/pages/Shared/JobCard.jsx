import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;
    return (
        <div className="card bg-base-100 shadow-sm border-2 p-2">
            <div className='flex items-center gap-2'>
                <figure>
                    <img
                        className='w-15 h-15'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className=''>
                    <h1 className='text-3xl font-semibold'>{title}</h1>
                    <p className='flex items-center gap-2'> <CiLocationOn /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">

                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;