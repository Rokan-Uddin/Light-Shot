import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <div className="d-flex justify-content-center align-items-center">
                    <div>
                    <span className="fs-3 text-danger fw-bolder text-start my-4">What is our vision</span>
                    <h1>Higher Education at Lower Cost.</h1>
                    <p className="mt-5">Lightshot academy offers education without limitations. Whether you are a full time professional,
                         part-time worker, someone looking for a career change or starting your own venture, 
                         it’s never too late to learn. We make it easy to get real qualifications which lead to real success, 
                         empowering hundreds of thousands of new students each month all over the world.</p>
                    </div>
                </div>
                    </div>
                <div className="col-lg-6 col-sm-12">
                    <img src="https://www.shawacademy.com/images/about/new/about-banner-img.png" alt="" />
                </div>
                </div>
 
            </div>

            <div className="container d-flex justify-content-around my-5 fs-5">
                <p><span className="fs-1 text-danger fw-bold">100</span>+ Courses</p>
                <p><span className="fs-1 text-danger fw-bold">3</span> Thousand hours of content</p>
                <p><span className="fs-1 text-danger fw-bold">8</span> years of Teaching</p>
                <p><span className="fs-1 text-danger fw-bold">9</span> Million Students</p>
            </div>
            
        </div>
    );
};

export default AboutUs;