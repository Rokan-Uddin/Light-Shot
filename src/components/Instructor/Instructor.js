import React, { useEffect, useState } from 'react';
import Tutor from '../Tutor/Tutor';
import './Instructor.css';
const Instructor = () => {
    const [tutors,setTutors]=useState([]);
    // load tutor data using useEffect 
    useEffect(()=>{
        fetch('tutor.JSON')
        .then(res=>res.json())
        .then(data=>setTutors(data))
    },[])
    return (
        <div>
            <h1 className="my-4">Popular Instructor</h1>
            <div className=" container mb-5">
                <div className="row g-4">
                {
                    tutors.map(tutor=> <Tutor 
                        key={tutor.id}
                        tutor={tutor}
                        >
                    </Tutor>)
                }
                </div>
            </div>
        </div>
    );
};

export default Instructor;