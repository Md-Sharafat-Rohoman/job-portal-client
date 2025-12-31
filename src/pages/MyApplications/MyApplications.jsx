import React, { Suspense } from 'react';
import ApplicationsStat from './ApplicationsStat';
import useAuth from '../../hooks/useAuth';
import ApplicationsList from '../../pages/MyApplications/ApplicationsList'
import { myApplicationsPromise } from '../../API/myApplicationApi';




const MyApplications = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div>
            <ApplicationsStat></ApplicationsStat>
            <Suspense fallback={'loading your application'}>
                <ApplicationsList myApplicationsPromise ={myApplicationsPromise(user.email)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;