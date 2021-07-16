import React, { Component } from "react";
import parse from 'html-react-parser';
import Institutions from "./InstitutionComponent";

class Education extends Component {
    render() {
        const formatDate = function (d) {
            if (d === null || d === undefined) {
                return ""
            }
            else {
                return d;
            }
            // return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(d);
        }
        const courses = this.props.courses.map((course) => {
            return (
                <div className="col-12 col-sm-6 col-lg-4">
                    <h5><a href={course.link}>{course.name}</a></h5>
                    <h6>From <strong>{course.institution}</strong> on <strong>{course.platform}</strong></h6>
                    <h6>Completed {formatDate(course.date)}</h6>
                    <br></br>
                </div>
            )
        })
        const completed = (date) => {
            if (date) {
                return (<h6>Completed {formatDate(date)}</h6>)
            } else {
                return (<h6> In Progress </h6>)
            }
        }
        const specs = this.props.specs.map((spec) => {
            const specCourses = spec.courses.map((course) => {
                return (
                    <div className="col-12 col-md-6">
                        <h5><a href={course.link}>{course.name}</a></h5>
                        {completed(course.date)}
                        <br></br>
                    </div>
                )
            })
            return (
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h4><a href={spec.link}>{spec.name}</a></h4>
                        <h6>From <strong>{spec.institution}</strong> on <strong>{spec.platform}</strong></h6>
                        {completed(spec.date)}
                        <br></br>
                    </div>
                    {specCourses}
                    <hr></hr>
                </div>
            )
        })

        return (
            <>
                <div className="container">
                    <h1 class="text-center">Education</h1>
                    <hr></hr>
                    <br></br>
                    <div className="row">
                        <Institutions />
                    </div>
                    <div className="row">
                        <h3>Online Courses</h3>
                    </div>
                    <hr></hr>
                    <br></br>
                    <div className="row justify-content-center">
                        {courses}
                    </div>
                    <div className="row">
                        <h3>Online Specialisations</h3>
                    </div>
                    <hr></hr>
                    <br></br>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-12 col-md-11">
                            {specs}
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Education;