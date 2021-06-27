import React, { Component } from "react";
import { Nav, NavbarToggler, Collapse, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: true,
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
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Vishnu Nittoor</a>
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <div className="navbar-nav text-center">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </Collapse>
                </div>
            </Nav>
        );
    }
}

export default Header;