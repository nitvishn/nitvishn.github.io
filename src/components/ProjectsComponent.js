import React, { Component } from "react";
import parse from 'html-react-parser';

class Projects extends Component {
    render() {
        console.log(this.props.projects);
        const formatDate = function (d) {
            if (d === null || d === undefined) {
                return ""
            }
            else {
                return d;
            }
            // return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(d);
        }
        const formatExperience = (exp) => {
            const link = exp.link ? (<h6><a href={exp.link}>{exp.link}</a></h6>) : (<></>)
            return (
                <div className="row">
                    <h3>{exp.type === "project" ? exp.name : ""}</h3>
                    <h4>{exp.type !== "project" ? exp.name : ""}</h4>
                    <h4>{exp.position}</h4>
                    <h5>{formatDate(exp.start)} {exp.end ? <span>&#8212;</span> : ""} {formatDate(exp.end)}</h5>
                    {link}
                    <p>{parse(exp.description ? exp.description : exp.shortdescription)}</p>
                </div>
            )
        }
        const projects = this.props.projects.filter((exp) => { return exp.type === "project" }).map(formatExperience)
        const programmingfun = this.props.projects.filter((exp) => { return exp.type !== "project" }).map(formatExperience)

        return (
            <>

                <h1 className="text-center">Projects</h1>
                <hr></hr>
                <br></br>
                {projects}

                <br></br>
                <br></br>
                <h2 className="text-center">Programming and Interesting Miscellaneous Fun <span>&#8482;</span></h2>
                <hr></hr>
                <br></br>
                {programmingfun}
            </>
        );
    }
}

export default Projects;