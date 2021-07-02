import React, { Component } from "react";
import parse from 'html-react-parser';

class Experience extends Component {
    render() {
        const formatDate = function (d) {
            if (d === "Present") {
                return "Present"
            } else if (d === null || d === undefined) {
                return ""
            }
            return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(d);
        }
        const work = this.props.work.map((exp) => {
            const link = exp.link ? (<h6><a href={exp.link}>{exp.link}</a></h6>) : (<></>)
            return (
                <div className="row">
                    <h3>{exp.name}</h3>
                    <h4>{exp.position}</h4>
                    <h5>{formatDate(exp.start)} {exp.end ? <span>&#8212;</span> : ""} {formatDate(exp.end)}</h5>
                    {link}
                    <p>{parse(exp.description)}</p>
                </div>
            )
        })

        return (
            <>

                <h1 className="text-center">{this.props.title}</h1>
                <hr></hr>
                <br></br>
                {work}
            </>
        );
    }
}

export default Experience;