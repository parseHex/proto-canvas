import defaults from '../defaults';

export function rectangle(opts: ObjectPartialOptions.Rectangle): ObjectOptions.Rectangle {
	return {
		pos: copyPos(opts.pos),
		width: opts.width,
		height: opts.height,
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.fill,
	};
}
export function triangle(opts: ObjectPartialOptions.Triangle): ObjectOptions.Triangle {
	return {
		pos: [
			copyPos(opts.pos[0]),
			copyPos(opts.pos[1]),
			copyPos(opts.pos[2]),
		],
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.fill,
	};
}
export function ellipse(opts: ObjectPartialOptions.Ellipse): ObjectOptions.Ellipse {
	return {
		pos: copyPos(opts.pos),
		rx: opts.rx,
		ry: opts.ry,
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function line(opts: ObjectPartialOptions.Line): ObjectOptions.Line {
	return {
		pos: [
			copyPos(opts.pos[0]),
			copyPos(opts.pos[1]),
		],
		lineWidth: opts.lineWidth || defaults.lineWidth,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function text(opts: ObjectPartialOptions.Text): ObjectOptions.Text {
	return {
		pos: copyPos(opts.pos),
		text: opts.text,
		fontName: opts.fontName || defaults.fontName,
		sizePX: opts.sizePX || defaults.sizePX,
		fill: opts.fill || defaults.textFill,
		stroke: opts.stroke || defaults.textStroke,
	};
}
export function point(opts: ObjectPartialOptions.Point): ObjectOptions.Point {
	return {
		pos: copyPos(opts.pos),
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function polygon(opts: ObjectPartialOptions.Polygon): ObjectOptions.Polygon {
	return {
		pos: copyPosArr(opts.pos),
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.stroke,
	};
}

// cant get this to work on anything other than polygon (since other shapes have fixed length of pos)
function copyPosArr(posArr: Coordinate[]) {
	const arr = [];
	for (let i = 0; i < posArr.length; i++) {
		arr.push(copyPos(posArr[i]));
	}
	return arr;
}

function copyPos(posObject: Coordinate) {
	return {
		x: posObject.x,
		y: posObject.y,
	};
}
