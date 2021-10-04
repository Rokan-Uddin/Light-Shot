import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';
const Courses = () => {
    // load data and assign to courses variable using useState 
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('data.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    return (
        // send every child of courses to Course Component 
        <div className="container my-5">
            <div className="mb-3 row g-4">
                {
                    courses.map(course=><Course
                    key={course.id}
                    course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;