import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Turor.css';


const Tutor = (props) => {
    // destructuring from props.tutor
    const {name,title,rating,url,students,totalCourse}=props.tutor;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="card-img" src={url} />
            <Card.Body>
                <Card.Title className="fw-bold fs-3">{name}</Card.Title>
                <Card.Text className="text-secondary">{title}</Card.Text>
                <div className="d-flex justify-content-around mt-auto">
                <Card.Text> <span className="fw-bold fs-5 text-success">{students}</span> Students</Card.Text>
                <Card.Text><span className="fw-bold fs-5 text-success">{totalCourse}</span> Courses</Card.Text>
                </div>
                <Card.Text>
                    <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                        readonly
                        />
                    ({rating})
                </Card.Text>
            </Card.Body>
    </Card>
    );
};

export default Tutor;