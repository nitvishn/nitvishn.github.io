import React, { Component } from "react";
import { Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        const {width, height} = getWindowDimensions();
        if(width<=990){
            this.setState({
                isNavOpen: !this.state.isNavOpen
            });
        }
    }

    render() {
        return (
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="nav-link navbar-brand" to="/home">Vishnu Nittoor</NavLink>
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <div className="navbar-nav">
                            <NavLink className="nav-link px-3" to="/home" onClick={this.toggleNav}>Home</NavLink>
                            <NavLink className="nav-link px-3" to="/research" onClick={this.toggleNav}>Research and Work</NavLink>
                            {/* <NavLink className="nav-link px-3" to="/work">Work Experience</NavLink> */}
                            <NavLink className="nav-link px-3" to="/projects" onClick={this.toggleNav}>Projects</NavLink>
                            <NavLink className="nav-link px-3" to="/talks" onClick={this.toggleNav}>Talks/Videos</NavLink>
                            <NavLink className="nav-link px-3" to="/organisations" onClick={this.toggleNav}>Organisations</NavLink>
                            <NavLink className="nav-link px-3" to="/education" onClick={this.toggleNav}>Education</NavLink>
                            <a className="nav-link px-3" target="_blank" href="/resume.pdf">Resume</a>
                        </div>
                    </Collapse>
                </div>
            </Nav>
        );
    }
}

export default Header;