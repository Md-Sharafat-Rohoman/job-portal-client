import React, { use } from 'react';
import JobApplicationRow from '../JobApplicationRow/JobApplicationRow';

const ApplicationsList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);
    console.log(applications);
    return (
        <div>
            <h1>Applications List : {applications.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    No
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        applications.map((jobApplication,index) => <JobApplicationRow
                        jobApplication={jobApplication}
                        index={index}

                        ></JobApplicationRow>)
                       }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationsList;