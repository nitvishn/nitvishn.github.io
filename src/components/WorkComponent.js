import React, { Component } from "react";

class Work extends Component {
    render() {
        return (
            <>
                This is my work.
                {this.props.work[0].description}
            </>
        );
    }
}

export default Work;