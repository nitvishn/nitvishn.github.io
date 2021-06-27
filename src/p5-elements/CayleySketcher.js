import { faBackspace, faMarsStroke } from "@fortawesome/free-solid-svg-icons";
import { propTypes } from "react-bootstrap/esm/Image";

let images = [];
let imgSize, scaleFactor;
const N = 9
var currentNum = 0;
var incr = 1
var X = [];
var Y = [];
var laggingCursor;

export function preload(p5) {
    for (var i = 1; i <= N; i++) {
        const img = p5.loadImage("/assets/cayley/cayley" + i.toString() + ".png");
        images.push(img);
    }
}

export function setup(p5, canvasParentRef) {
    let xyz = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    // imgSize = Math.max(p5.windowWidth, p5.windowHeight) / 2;
    imgSize = 500;
    scaleFactor = 3;
    loadImagePositions(p5);
    laggingCursor = {
        position: p5.createVector(p5.mouseX, p5.mouseY),
        velocity: p5.createVector(0, 0)
    }
};

export function draw(p5) {
    p5.background(255);
    p5.imageMode(p5.CENTER);
    p5.stroke(255, 0, 0)
    p5.fill(255, 0, 0)
    // p5.circle(laggingCursor.position.x, laggingCursor.position.y, 50)
    const offset = getOffset(p5, 300);
    p5.translate(offset.x, offset.y);
    for (var i = 0; i < X.length; i++) {
        for (var j = 0; j < Y.length; j++) {
            drawCayley(p5, X[i], Y[j]);
        };
    };
    // console.log(laggingCursor.position);
    updateLaggingCursor(p5);
    // console.log(p5.deltaTime);
};

function updateLaggingCursor(p5) {
    const easing = 0.05;
    let targetX = p5.mouseX;
    let dx = targetX - laggingCursor.position.x;
    laggingCursor.position.x += dx * easing;

    let targetY = p5.mouseY;
    let dy = targetY - laggingCursor.position.y;
    laggingCursor.position.y += dy * easing;
}

function magnitude(vec) {
    return Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2))
}

function getOffset(p5) {
    const mouse = {
        x: laggingCursor.position.x,
        y: laggingCursor.position.y
    }
    const center = {
        x: p5.windowWidth / 2,
        y: p5.windowHeight / 2
    }
    const Dmax = magnitude(center);

    const arrow = {
        x: (mouse.x - center.x) / scaleFactor,
        y: (mouse.y - center.y) / scaleFactor
    }

    return arrow
}

function drawCayley(p5, x, y) {
    if (currentNum !== 0) {
        const img = images[currentNum - 1]
        const h = img.height;
        const w = img.width;
        const scaleFactor = h / imgSize;
        p5.image(img, x, y, w / scaleFactor, h / scaleFactor);
    }
}

export function mouseClicked(p5, thing) {
    if (currentNum === 0 && incr === -1) {
        incr = 1;
    }
    if (currentNum === N && incr === 1) {
        incr = -1;
    }
    currentNum += incr;
    // console.log(currentNum, incr);
}

function loadImagePositions(p5) {
    var currX = p5.windowWidth / 2;
    X.push(currX);
    while (currX <= p5.windowWidth + imgSize) {
        currX += imgSize;
        X.push(currX);
    };
    currX = p5.windowWidth / 2;
    while (currX >= -imgSize) {
        currX -= imgSize;
        X.push(currX);
    }
    var currY = p5.windowHeight / 2;
    Y.push(currY);
    while (currY <= p5.windowHeight + imgSize) {
        currY += imgSize;
        Y.push(currY);
    };
    currY = p5.windowHeight / 2;
    while (currY >= -imgSize) {
        currY -= imgSize;
        Y.push(currY);
    }
}