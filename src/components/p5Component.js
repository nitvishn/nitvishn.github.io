import React, { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Sketch from "react-p5";


class Canvas extends Component {
    render() {
        var cayley = []
        var userpoints = [[]]
        var toopopulated = false
        var length_proportion = 0.25;
        var incrCount = 1;

        function getLastElement(list) {
            if (list.length > 0) {
                var prev = list[list.length - 1]
            } else {
                var prev = null
            }
            return prev
        }

        function drawCayley(p5) {
            p5.translate(p5.windowWidth / 2, p5.windowHeight / 2);
            p5.rotate(Math.PI / 180 * 45);
            // p5.background(255);
            console.log("drawing.")
            p5.stroke(0)
            const imgHeight = Math.sqrt(2 * Math.pow(p5.windowHeight, 2));
            for (var j = 0; j < cayley.length; j++) {
                var prevY = 0
                var prevX = 0
                var points = cayley[j]
                var length = Math.floor(imgHeight * length_proportion)
                var currentX, currentY;
                for (var i = 0; i < points.length; i++) {
                    if (points[i] == 'U') {
                        currentX = prevX
                        currentY = prevY - length
                    } else if (points[i] == 'D') {
                        currentX = prevX
                        currentY = prevY + length
                    } else if (points[i] == 'L') {
                        currentX = prevX - length
                        currentY = prevY
                    } else if (points[i] == 'R') {
                        currentX = prevX + length
                        currentY = prevY
                    }
                    p5.line(prevX, prevY, currentX, currentY)
                    prevX = currentX
                    prevY = currentY
                    length = Math.floor(length / 2)
                    if (length == 0) {
                        toopopulated = true
                    }
                }
            }
        }

        let setup = (p5, canvasParentRef) => {
            //Canvas of size 1000x800 
            let xyz = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        };
        let draw = (p5) => {
            // drawCayley(p5)
        };

        let mouseClicked = (p5, thing) => {
            if (toopopulated) {
                return false
            }
            console.log("adding.")
            cayley.push([])
            var moveList = ['U', 'D', 'L', 'R'];
            var tempcayley = []
            for (var i = 0; i < cayley.length; i++) {
                for (var j = 0; j < moveList.length; j++) {
                    const prev = getLastElement(cayley[i])
                    const move = moveList[j]
                    if (prev === null) {
                        tempcayley.push(cayley[i].concat([move]))
                    } else if (!((move == 'L' && prev == 'R') || (move == 'D' && prev == 'U') || (move == 'U' && prev == 'D') || (move == 'R' && prev == 'L'))) {
                        tempcayley.push(cayley[i].concat([move]))
                    }
                }
            }
            cayley = tempcayley
            drawCayley(p5);
            // console.log(cayley);
            // console.log("Userpoints" + JSON.stringify(userpoints));
            console.log(incrCount);
            p5.saveCanvas("cayley" + incrCount.toString(), "png");
            incrCount += 1;
        }

        return (
            <>
                <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked}></Sketch>
            </>
        );
    }
};

export default Canvas;