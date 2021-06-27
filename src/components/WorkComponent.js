import React, { Component } from "react";


class Work extends Component {
    render() {
        const formatDate = function (d) {
            return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(d);
        }
        const work = this.props.work.map((exp) => {
            return (
                <div className="row">
                    <h3>{exp.name}</h3>
                    <h4>{exp.position}</h4>
                    <h5>{formatDate(exp.start)} <span>&#8212;</span> {formatDate(exp.end)}</h5>
                    <p>{exp.description}</p>
                </div>
            )
        })

        return (
            <>

                <h1 className="text-center">Work Experience</h1>
                <hr></hr>
                <br></br>
                {work}
            </>
        );
    }
}

export default Work;