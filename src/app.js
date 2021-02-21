class Canvas {
	constructor(node, width, height) {
		this.node = node;
		this.width = width;
		this.height = height;
		this.id = Math.round(Math.random() * 100);
		this.outerHTML = `<canvas width=${width} height=${height} id="${node.id}__canvas-${this.id}"></canvas>`

		node.insertAdjacentHTML('beforeend', this.outerHTML);
	}

	getCanvas() {
		return document.getElementById(`${this.node.id}__canvas-${this.id}`);
	}

	getCtx(ctx) {
		return this.getCanvas().getContext(ctx);
	}

	set style(StyleOfText) {
		this.getCanvas().style = StyleOfText;
	}
}



//constants
const node = document.getElementById('js-insert-canvas');
const canvas = new Canvas(node, 20, 100);
const ctx = canvas.getCtx('2d');
//end constants

//style
canvas.node.style.position = 'relative';
canvas.style = `
	position: absolute;
	bottom: -1px;
	left: -1px;
	background-color: #fff;
`;
// end style

const randomNum = max => Math.random() * max;

function drawLine(ctx, startPoint, endPoint, countPoint = 5) {
	ctx.moveTo(startPoint.x, startPoint.y); //начальная точка
	
	for (let i = 0; i < countPoint; i++) {
		ctx.lineTo(
			randomNum(ctx.canvas.width - 10),
			randomNum(ctx.canvas.height),
		);
	}

	ctx.lineTo(endPoint.x, endPoint.y)
	ctx.stroke(); //нарисовать линию
}

drawLine(ctx, {x: 0, y: 0}, {x: canvas.width, y: canvas.height}, 3);