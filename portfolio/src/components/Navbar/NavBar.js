import React from "react";
import { useState, useEffect } from "react";
import {NavBar, Container} from "react-bootstrap";
import { GrProjects } from "react-icons/gr";

import logo from '../Assets/img/';

export const NavBar = () => {

    //finds buttons
    const [activeLink, setActiveLink] = useState('Home');
    
    //scroll funtion, determines if user has scrolled or not
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    //does the button return thinggy
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src="" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" 
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills"
                        className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects"
                        className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href=""><img src=""/></a>
                            <a href=""><img src=""/></a>
                            <a href=""><img src=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('')}><span>Let's Connect!</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 