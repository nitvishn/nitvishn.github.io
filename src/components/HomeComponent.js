import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Home extends Component {
    render() {
        return (
            <div className="container flex-center">
                <div className="jumbotron bg-transparent">
                    <h1 className="display-4 fade-out-10">Hi, I'm Vishnu.</h1>
                    <p className="lead fade-out-15">I'm an undergraduate student at the University of Toronto studying computer science and mathematics. </p>
                    <br></br>
                    <p className="lead fade-out-20">This website is under reconstruction. Come back soon!</p>
                    {/* <br></br> */}
                    <div className="fade-out-30">
                    <p style={{ color: "gray" }}>I am reachable at nitvishn [at] gmail [dot] com.</p>
                    </div>
                    {/* <p>I am pursuing a research career in computer science! My interests are broad and theory-driven, and I currently spend my time working across two very different areas: computer graphics and formal verification. A general theme for my research is <i> seeing mathematics come alive in computation. </i> </p>
                    <p>My mathematics background is rich and expansive, encompassing studies in mathematical analysis,
                    modern algebra, abstract linear algebra, probability theory, topology, and geometry. My commitment
                    to mathematics both inspires and is informed by my research in computer science.</p> */}
{/* <p>I care deeply about learning and teaching &mdash; read about my work with the Fields Institute and other organisations <HashLink to='/organisations'>here</HashLink>. </p> */}
                    {/* <p>
                        You can read about the <Link to="/research">research</Link> I've done, a few of the <Link to="/projects">projects</Link> I've worked on, and some of the <Link to="/organisations">organisations</Link> I've been a part of through the links embedded within this sentence.
                    </p> */}
                    {/* <p> */}
                        {/* Likewise for <Link to="/talks">videos or talks</Link>, my <a href="/resume.pdf" target="_blank">resume</a>, and my <Link to="/education">education</Link> (the institutions I've attended and my journey through online courses). */}
                    {/* </p> */}
                    {/* <p>This website is under reconstruction</p> */}
                    {/* <hr /> */}
                    {/* <p> Progressive rock, electronic, Indian Carnatic, and classical music form large parts of my life. I also love to climb! </p>  */}
                    {/* <p>The gradually unfolding diagram in the background is the <Link to="https://en.wikipedia.org/wiki/Cayley_graph">Cayley graph</Link> of the free group on two generators. More visualisations of similar mathematical entities are listed <HashLink to='/projects#fun'>here</HashLink> :) </p> */}
                </div>
            </div>
        );
    }
}

export default Home;