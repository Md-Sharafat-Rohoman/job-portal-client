import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    console.log(jobId, user)

    const handleJobApply = e =>{
        e.preventDefault();

        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume)
    }
    return (
        <div className='my-10 '>
            <h1 className='text-4xl '>Apply for this job : <Link to={`/jobs/${jobId}`}> Details</Link> </h1>
            <div>
                <form onSubmit={handleJobApply}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        {/* <legend className="fieldset-legend">Page details</legend> */}

                        <label className="label">LinkedIn Link</label>
                        <input type="url" name='linkedIn' className="input" placeholder="LinkedIn profile link" />

                        <label className="label">Github Link</label>
                        <input type="url" name='github' className="input" placeholder="Github Link" />

                        <label className="label">Resume</label>
                        <input type="url" name='resume' className="input" placeholder="Resume Link" />
                        <input type="submit" className='btn ' value="Apply" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;