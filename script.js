let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = Math.random()*15;
window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    let framesPerSecond = 30;
    setInterval(callBoth, 1000 / framesPerSecond);

};

function callBoth() {
    moveEverything();
    drawEverything();
}

function moveEverything() {
    ballX += ballSpeedX;
    if (ballX >= canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything() {
    // sets the canvas. grabs the height/width from html
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(10, 210, 10, 100, 'white');
    // ball
    canvasContext.fillStyle = 'red';
    canvasContext.beginPath();
    canvasContext.arc(ballX, 100, 10, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height); 
}