import React from 'react';
import './Turor.css';
const Tutor = (props) => {
    const {name,title,rating,url,students,totalCourse}=props.tutor;
    return (
        <div className="tutor">
            <img src={url} alt="" />
            <div>
                <h2>{name}</h2>
                <p className="text-secondary">{title}</p>
                <p>{students} Students</p>
                <p>{totalCourse} Courses</p>
            </div>
        </div>
    );
};

export default Tutor;