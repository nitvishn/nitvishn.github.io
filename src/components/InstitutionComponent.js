import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function Institutions() {
    return (
        <>
            <h3>Institutions</h3>
            <hr></hr>
            <br></br>
            <div className='col'></div>
            <div className="col-12">
                <div className="col-12">
                    <center>
                        <h4>University of Toronto</h4>
                        <h6>September 2021 <span>&#8212;</span> April 2025 </h6>
                    </center>
                    I plan to pursue a <strong>Computer Science specialist</strong> with a <strong>Focus</strong> in <strong>Theory of Computation</strong>, alongside a <strong>Mathematics major</strong>.
                </div>
                <hr></hr>
                <div className="col-12">
                    <center>
                        <h4>The International School Bangalore</h4>
                        <h6>August 2015 <span>&#8212;</span> May 2021 </h6>
                    </center>
                    I studied in the the International Baccalaureate (IB) Diploma Programme in years 11 and 12, and for Cambdridge IGCSE in years 9 and 10. My subjects and final grades in either programme are listed below.
                    <div className="row">
                        <div className="col"></div>
                        <Accordion className="col-12 col-md-12 col-lg-11">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <center>
                                        <h5>IB Programme</h5>
                                        <h6>August 2019 <span>&#8212;</span> May 2021 </h6>
                                    </center>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="col-12">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Subject Name</th>
                                                        <th scope="col">Level</th>
                                                        <th scope="col">Grade (1-7)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Mathematics Analysis and Approaches</td>
                                                        <td>HL</td>
                                                        <td>7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Physics</td>
                                                        <td>HL</td>
                                                        <td>7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Economics</td>
                                                        <td>HL</td>
                                                        <td>7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chemistry</td>
                                                        <td>SL</td>
                                                        <td>7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>English Language and Literature</td>
                                                        <td>SL</td>
                                                        <td>7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Spanish ab initio</td>
                                                        <td>SL</td>
                                                        <td>7</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <center>
                                        <h5>Cambridge IGCSE</h5>
                                        <h6>August 2019 <span>&#8212;</span> May 2021 </h6>
                                    </center>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <div className="col-12">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Subject Name</th>
                                                        <th scope="col">Grade (A*-G)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Additional Mathematics</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Computer Science</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Economics</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chemistry</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Physics</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>English Language</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>English Literature</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Global Perspectives</td>
                                                        <td>A*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hindi</td>
                                                        <td>A</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
            <div className='col'></div>
        </>
    )
}

export default Institutions;