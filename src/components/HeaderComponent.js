import React, { Component, useState, useEffect } from "react";
import { Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

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
        <Nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
            <div className="navbar-container-custom">
                <NavLink className="nav-link navbar-brand" to="/home">Vishnu Nittoor</NavLink>
                <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                <Collapse className="custom-collapse" isOpen={this.state.isNavOpen} navbar>
                    <div className="navbar-nav">
                        {/* <NavLink className="nav-link px-3" to="/home" >Home</NavLink> */}
                        <NavLink className="nav-link px-3" to="/research" >Research</NavLink>
                        <NavLink className="nav-link px-3" to="/organisations" >Organisations</NavLink>
                        {/* <NavLink className="nav-link px-3" to="/work">Work Experience</NavLink> */}
                        <NavLink className="nav-link px-3" to="/projects" >Projects</NavLink>
                        {/* <NavLink className="nav-link px-3" to="/talks" >Talks/Videos</NavLink> */}
                        {/* <NavLink className="nav-link px-3" to="/education">Education</NavLink> */}
                        <a className="nav-link px-3" target="_blank" href="/cv.pdf">CV</a>
                    </div>
                </Collapse>
            </div>
        </Nav>
        );
    }
}

export default Header;
