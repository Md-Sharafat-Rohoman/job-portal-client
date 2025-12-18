import React from 'react';
import { motion } from "motion/react"
import team1 from '../../../src/assets/celebrate/team1.jpg'
import team2 from '../../../src/assets/celebrate/team1.jpg'

const Bannar = () => {
    return (
        <div className="hero bg-base-200 min-h-screen max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm shadow-2xl rounded-t-4xl border-s-8 rounded-br-4xl border-b-8 border-blue-500"
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 5, delay: 20, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm shadow-2xl rounded-t-4xl border-s-8 rounded-br-4xl border-b-8 border-blue-500"
                    />

                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-5xl font-bold">Remote <motion.span animate={{ color: ['#275EF5', '#B207F5', '#F5071F'], transition: { duration: 4, repeat: Infinity } }}>jobs</motion.span> for your !</motion.h1>
                    {/* <motion.h1
                    animate = {{rotate: 360, scale : 4, transition:{duration:2}}}
                    className="text-5xl font-bold">Latest job for your !</motion.h1> */}
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;