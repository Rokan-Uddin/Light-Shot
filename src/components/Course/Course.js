import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css';
const Course = (props) => {
    const {title,details,url,rating,price,level,totalrating,instructor}=props.course;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="course">
            <img src={url} alt="" />
            <div className="d-flex justify-content-between px-3 level">
                <p className="mt-2">Online</p>
                <p className="text-secondary mt-2"> <FontAwesomeIcon icon={faCircle} ></FontAwesomeIcon> {level}</p>
            </div>
            <h4 className="text-start ms-3">{title}</h4>
            <h6 className="text-start ms-3 mb-4 fw-bold">By <span className="text-info">{instructor}</span></h6>
            <p className="details text-secondary">{details}</p>
            <div className="d-flex justify-content-between px-3 mt-4">
                <div>
                {rating}
                <Rating 
            initialRating={rating}
            emptySymbol="far fa-star text-warning"
            fullSymbol="fas fa-star text-warning"
            readonly
            />
            ({totalrating})
                </div>
                <h4 className="text-success">${price}</h4>
            </div>
            <Button className="w-50 mb-2" variant="success">Enroll Now</Button>
        </div>
        </div>
    );
};

export default Course;