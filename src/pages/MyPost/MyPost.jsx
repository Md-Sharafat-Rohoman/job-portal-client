import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../API/jobsApi';

const MyPost = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>My Post :</h1>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPost;