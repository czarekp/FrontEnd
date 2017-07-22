//take canvas and set its context
const myCanvas = document.querySelector('canvas');
const ctx = myCanvas.getContext('2d');

//set canvas width and height
myCanvas.width = 1000;
myCanvas.height = 500;

//set canvas width and height to shorter variables
const cw = myCanvas.width;
const ch = myCanvas.height;

//width and height of single rect making line in the middle
const lineWidth = 5;
const lineHeight = 20;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;
let ballSpeedX = -2;
let ballSpeedY = 2;

const paddleHeight = 100;
const paddleWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

function drawTable() {
	//table
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, cw, ch);

	//line in the middle
	for (let linePos = 0; linePos < ch; linePos += 40) {
		ctx.fillStyle = 'gray';
		ctx.fillRect(cw / 2 - lineWidth / 2, linePos, lineWidth, lineHeight);
	}
}

function drawBall() {
	ctx.fillStyle = '#FFF';
	ctx.fillRect(ballX, ballY, ballSize, ballSize);

	ballX += ballSpeedX;
	ballY += ballSpeedY;

	if (ballY === ch - ballSize / 2) {
		ballSpeedY = -2;
	} else if (ballY === -ballSize / 2) {
		ballSpeedY = 2;
	}

	if (ballX === cw - ballSize / 2) {
		ballSpeedX = -2;
	} else if (ballX === -ballSize / 2) {
		ballSpeedX = 2;
	}
}

function drawPlayer() {
	ctx.fillStyle = '#076f88';
	ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);

	myCanvas.onmousemove = function (e) {
		playerY = e.offsetY;
	}
}

function drawAI() {
	ctx.fillStyle = '#18b59d';
	ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);
}

function drawGame() {
	drawTable();
	drawBall();
	drawPlayer();
	drawAI();
}

setInterval(drawGame, 1000 / 60);
