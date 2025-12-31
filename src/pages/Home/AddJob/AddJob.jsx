import React from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth();
    const handleAddJob = e => {
        e.preventDefault();
        console.log('faru moni is a best friend')
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };
        console.log(newJob);
        // process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;
        // console.log(requirementsClean);
        // responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
        newJob.status = 'active';

        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h2>please add a job</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" className="input" name='company' placeholder="Company Name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />

                    <label className="label">Company logo</label>
                    <input type="text" className="input" name='company_logo' placeholder="Company Location URL" />
                </fieldset>
                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter">
                        <input className="btn btn-square" type="reset" value="×" name='jobType' />
                        <input className="btn" type="radio" name="jobType" value='On-Site' aria-label="Svelte" />
                        <input className="btn" type="radio" name="jobType" value='Remote' aria-label="Vue" />
                        <input className="btn" type="radio" name="jobType" value={'Hybrid'} aria-label="React" />
                    </div>
                </fieldset>
                {/* job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select defaultValue="Job Category" name='jobCategory' className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </fieldset>
                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" className="input" />

                </fieldset>
                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='min' className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="JSelect a Currency" name='Currency' className="select">
                                <option disabled={true}>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                {/* job description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" name='jobDescription' placeholder="Job Description"></textarea>


                </fieldset>
                {/* Job Requirement */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirement</legend>
                    <textarea className="textarea" name='requirements' placeholder="Job Requirements"></textarea>

                </fieldset>
                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job Responsibilities"></textarea>

                </fieldset>
                {/* Hr Related Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Hr Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="email" className="input" name='hr_email' defaultValue={user.email} placeholder="HR Email" />
                </fieldset>
                <input type="submit" value="Add Job" className='btn mx-auto' />

            </form>
        </div>
    );
};

export default AddJob;