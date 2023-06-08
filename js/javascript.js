"use strict";
let canvas;
let context;

window.onload = init;

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    window.requestAnimationFrame(gameLoop);
}

let secondsPassed;
let oldTimeStamp;
let fps;
let rectX = 0;
let rectY = 0;
let moveSpeed = 0;

function gameLoop(timeStamp) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    secondsPassed = Math.min(secondsPassed, 0.1);
    oldTimeStamp = timeStamp;

    update(secondsPassed);
    draw();

    window.requestAnimationFrame(gameLoop);
}

class Player extends GameObject {
    constructor(context, x, y, vx, vy) {
        super(context, x, y, vx, vy);

        this.width = 32;
        this.height = 32;
    }

    draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#ff8080';
        context.fillRect(rectX, rectY, 10, 10);
    }

    update(secondsPassed) {
        rectX += (moveSpeed * secondsPassed);
        rectY += (moveSpeed * secondsPassed);
    }
}