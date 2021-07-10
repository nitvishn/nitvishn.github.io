import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <>
                <div className="jumbotron bg-transparent">
                    <h1 className="display-4">Hi, I'm Vishnu.</h1>
                    <p className="lead">I'm an undergraduate student at the University of Toronto studying computer science and mathematics. </p>
                    <hr className="my-4"/>
                        <p>I'm interested in theoretical computer science research, and I'd love to explore how it might intersect with mathematical philosophy, the applied sciences, and the humanities.</p>
                        <p>
                            You can read about the research I've done, a few of the projects I've worked on, and some of the organisations I've been a part of through the links embedded within this sentence.
                        </p>
                        <p>
                        Likewise for videos or talks I've given, my resume, and my education (the institutions I've attended and my journey through online courses).  
                        </p>
                        <p className="lead text-center">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Show me a summary of everything</a>
                        </p>
                    <hr/>
                    <p>I also play the guitar and the piano. A great way to get to know me is through what music I listen to - here's my Spotify.</p>
                </div>
            </>
                );
    }
}

                export default Home;