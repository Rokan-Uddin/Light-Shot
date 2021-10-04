import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to="/" className="navbar-brand">
                <h2>LIGHTSHOT</h2>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/instructor" className="nav-link">Instructor</Link>
                    <Link to="/about" className="nav-link">About-Us</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
};

export default Header;