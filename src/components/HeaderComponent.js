import React, { Component } from "react";
import { Nav, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/home">Vishnu Nittoor</a>
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <div className="navbar-nav">
                            <NavLink className="nav-link px-3" to="/home">Home</NavLink>
                            <NavLink className="nav-link px-3" to="/research">Research</NavLink>
                            <NavLink className="nav-link px-3" to="/work">Work Experience</NavLink>
                            <NavLink className="nav-link px-3" to="/projects">Projects</NavLink>
                            <NavLink className="nav-link px-3" to="/talks">Talks/Videos</NavLink>
                            <NavLink className="nav-link px-3" to="/organisations">Organisations</NavLink>
                            <NavLink className="nav-link px-3" to="/education">Education</NavLink>
                            <NavLink className="nav-link px-3" to="/resume">Resume</NavLink>
                            <NavLink className="nav-link px-3" to="/blog">Blog</NavLink>
                        </div>
                    </Collapse>
                </div>
            </Nav>
        );
    }
}

export default Header;