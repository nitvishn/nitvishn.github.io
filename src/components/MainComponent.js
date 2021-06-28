import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Work from "./WorkComponent";
import Projects from "./ProjectsComponent";
import Sidebar from "./SidebarComponent";
import Canvas from "./p5Component";

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        work: state.work,
        projects: state.projects,
    }
}


class Main extends Component {


    render() {
        const SetupWork = () => {
            return (
                <Work work={this.props.work}></Work>
            )
        }

        const SetupProjects = () => {
            return (
                <Projects projects={this.props.projects}></Projects>
            )
        }

        return (
            <>
                <Canvas />
                <Header />
                {/* <Sidebar></Sidebar> */}
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-12 col-sm-10 col-md-8">
                            <br></br>
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                <Route path="/work" component={SetupWork}></Route>
                                <Route path="/projects" component={SetupProjects}></Route>
                                <Redirect to="/home" />
                            </Switch>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));