import React, { useEffect, useState } from 'react';
import CourseDemo from '../CourseDemo/CourseDemo';
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
            <div className=" container rounded mt-5 home-header p-4">
                <h1>LEARN FROM THE BEST</h1>
                <h2 className="bg-secondary text-white">Get Ahead, Improve Your Photography Skill with LightShot Training Academy</h2>
                <h3>Get Hands On Experience in Real World Software Development from Experts in the Industry. Get Ready for Professional Career.</h3>
            </div>
            <div className=" container demo-courses my-5">
            {
                courses.map(course=> <CourseDemo course={course}> </CourseDemo> )
            }
            </div>
        </div>
    );
};

export default Home;