import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css';
const Home = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('data.JSON')
        .then(res=>res.json())
        .then(data=> {
            const newData=data.filter(d=> d.id<=4 );
            setCourses(newData)
        } );
    },[])
    return (
        <div>
            <div className="home-header">
                <h1>LEARN FROM THE BEST</h1>
                <h2 className="bg-secondary text-white">Get Ahead, Improve Your Photography Skill with LightShot Training Academy</h2>
                <h3>Get Hands On Experience in Real World Software Development from Experts in the Industry. Get Ready for Professional Career.</h3>
            </div>
            <div className="d-flex">
            {
                courses.map(course=> <Course course={course}> </Course> )
            }
            </div>
        </div>
    );
};

export default Home;