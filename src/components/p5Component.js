import React, { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Sketch from "react-p5";
import { preload, setup, draw, mouseClicked } from "../p5-elements/CayleySketcher.js"

class Canvas extends Component {
    render() {


        return (
            <>
                <Sketch preload={preload} setup={setup} draw={draw} mouseClicked={mouseClicked}></Sketch>
            </>
        );
    }
};

export default Canvas;