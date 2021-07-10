import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Home extends Component {
    render() {
        return (
            <>
                <div className="jumbotron bg-transparent">
                    <h1 className="display-4">Hi, I'm Vishnu.</h1>
                    <p className="lead">I'm an undergraduate student at the University of Toronto studying computer science and mathematics. </p>
                    <hr className="my-4" />
                    <p>I'm interested in theoretical computer science research, and I'd love to explore how it might intersect with mathematical philosophy, the applied sciences, and the humanities.</p>
                    <p>
                        You can read about the <Link to="/research">research</Link> I've done, a few of the <Link to="/projects">projects</Link> I've worked on, and some of the <Link to="/organisations">organisations</Link> I've been a part of through the links embedded within this sentence.
                    </p>
                    <p>
                        Likewise for <Link to="/talks">videos or talks</Link>, my <a href="/resume.pdf" target="_blank">resume</a>, and my <Link to="/education">education</Link> (the institutions I've attended and my journey through online courses).
                    </p>
                    <hr />
                    <p>I also play the guitar and the piano. A great way to get to know me is through what music I listen to - here's my <a href="https://open.spotify.com/user/udc1jipiknantnf5uhhhn8boc">Spotify</a>.</p>
                    <p>The gradually unfolding diagram in the background, if you're interested, is called the Cayley fractal. It's self-containing, which I find absolutely wonderful. You'll find more visualisations of similar mathematical entities listed as interesting miscellaneous projects <HashLink to='/projects#fun'>here</HashLink>. </p>
                </div>
            </>
        );
    }
}

export default Home;