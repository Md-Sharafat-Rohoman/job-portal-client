import React, { Suspense } from 'react';
import Bannar from './Bannar';
import HotJobs from './HotJobs';


const jobPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

const Home = () => {



    return (
        <div className=' max-w-6xl mx-auto space-y-10'>
            <Bannar></Bannar>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <HotJobs jobPromise={jobPromise}></HotJobs>
            </Suspense>

        </div>
    );
};

export default Home;