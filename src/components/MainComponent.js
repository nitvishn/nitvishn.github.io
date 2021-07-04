import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Experience from "./ExperienceComponent";
import Projects from "./ProjectsComponent";
import Sidebar from "./SidebarComponent";
import Canvas from "./p5Component";

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Education from "./EducationComponent";

const mapStateToProps = state => {
    return {
        work: state.work,
        research: state.research,
        projects: state.projects,
        organisations: state.organisations,
        courses: state.courses,
        specs: state.specs,
    }
}


class Main extends Component {


    render() {
        const SetupWork = () => {
            return (
                <Experience title="Work Experience" work={this.props.work}></Experience>
            )
        }

        const SetupResearchAndWork = () => {
            return (
                <Experience title="Research and Work Experience" work={this.props.research.concat(this.props.work)}></Experience>
            )
        }

        const SetupProjects = () => {
            return (
                <Projects projects={this.props.projects}></Projects>
            )
        }

        const SetupOrganisations = () => {
            return (
                <Experience title="Organisations" work={this.props.organisations}></Experience>
            )
        }

        const SetupEducation = () => {
            return (
                <Education courses={this.props.courses} specs={this.props.specs}></Education>
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
                        <div className="col-12">
                            <br></br>
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                <Route path="/research" component={SetupResearchAndWork}></Route>
                                <Redirect from="/work" to="/research" />
                                <Route path="/projects" component={SetupProjects}></Route>
                                <Route path="/organisations" component={SetupOrganisations}></Route>
                                <Route path="/education" component={SetupEducation}></Route>
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