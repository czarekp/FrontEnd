const myCanvas = document.createElement("canvas");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
myCanvas.style.backgroundColor = "black";
document.body.appendChild(myCanvas);

let ctx = myCanvas.getContext("2d");
const fps = 60;
let lastTime = 0;
let allSquares = [];
const howManySquares = 5;

function rand(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function animationLoop(time) {
	requestAnimationFrame(animationLoop);
	lastTime = time;

	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

	for (var i = 0; i < howManySquares; i++) {
		allSquares.push({
			xStart: myCanvas.width / 2,
			yStart: myCanvas.height / 4,
			h: rand(5, 10),
			xSpeed: rand(-1000, 1000) / 100,
			ySpeed: rand(-1000, 1000) / 100,
			r: 255,
			g: rand(10, 180),
			b: rand(10, 180)
		});
	}

	if (time - lastTime < 1000 / fps) {
		for (var i = 0; i < allSquares.length; i++) {
			let square = allSquares[i];

			square.xStart += square.xSpeed;
			square.yStart += square.ySpeed;

			square.ySpeed += 0.6;

			ctx.fillStyle = 'rgb(' + square.r + ', ' + square.g + ', ' + square.b + ')';

			ctx.fillRect(square.xStart - square.h / 2, square.yStart - square.h / 2, square.h, square.h);

			if (square.xStart > myCanvas.width ||
				square.xStart < 0 ||
				square.yStart > myCanvas.height ||
				square.yStart < 0) {
				allSquares.splice(i, 1);
			}
		}
	}

}

animationLoop();
