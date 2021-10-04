import React, { useEffect, useState } from 'react';
import Tutor from '../Tutor/Tutor';
import './Instructor.css';
const Instructor = () => {
    const [tutors,setTutors]=useState([]);
    useEffect(()=>{
        fetch('tutor.JSON')
        .then(res=>res.json())
        .then(data=>setTutors(data))
    },[])
    return (
        <div>
            <h1>Popular Tutor</h1>
                    <div className=" container tutors mb-5">
            {
                tutors.map(tutor=> <Tutor 
                    key={tutor.id}
                    tutor={tutor}
                     ></Tutor>  )
            }
        </div>
        </div>
    );
};

export default Instructor;