const myCanvas = document.querySelector('canvas');
const ctx = myCanvas.getContext('2d');

myCanvas.width = 400;
myCanvas.height = 200;

const cw = myCanvas.width;
const ch = myCanvas.height;

const lineWidth = 5;
const lineHeight = 10;

function drawTable() {
	//table
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, cw, ch);
	//line in the middle
	for (let i = 0; i < ch; i++) {
		ctx.fillStyle = 'gray';
		ctx.fillRect(cw / 2 - lineWidth / 2,
			2 * lineHeight * i + lineHeight / 2,
			lineWidth,
			lineHeight);
	}
}

drawTable();
