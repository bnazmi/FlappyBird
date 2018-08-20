var canvas=document.getElementById('canvas');
var context = canvas.getContext('2d');

// load the images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src="./img/bird.png";
bg.src="img/bg.png";
fg.src="./img/fg.png";
pipeNorth.src="./img/pipeNorth.png";
pipeSouth.src="./img/pipeSouth.png";

// Draw Images

function draw() {
    context.drawImage(bg,0,0);
}

draw();