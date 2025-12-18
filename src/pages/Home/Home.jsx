import React from 'react';
import Bannar from './Bannar';
import HotJobs from './HotJobs';


const jobPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

const Home = () => {



    return (
        <div>
            <Bannar></Bannar>
            <HotJobs jobPromise={jobPromise}></HotJobs>
        </div>
    );
};

export default Home;