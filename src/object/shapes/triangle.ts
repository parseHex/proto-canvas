import * as draw from '../../draw';
import BaseObjectShape from './_base';

export default class Triangle extends BaseObjectShape {
	shape = 'triangle' as Possible.ShapeLabel;
	props: ObjectOptions.Triangle;

	constructor(opts: ObjectOptions.Triangle) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.triangle(this.props, true);
	}

	/**
	 * Change the position of the triangle by moving each of its points.
	 */
	move(newPos: ObjectPosition.Triangle) {
		for (let i = 0; i < newPos.length; i++) {
			this.props.pos[i].x = newPos[i].x;
			this.props.pos[i].y = newPos[i].y;
		}
	}

	/**
	 * No-Op: Can't resize triangles, must manually move each point using `.move()`
	 */
	resize(newDim: null) {
		console.error('Cannot resize a triangle, use `.move()` instead.');
	}

	/**
	 * Change the triangle's `fill` and/or `stroke`.
	 */
	restyle(newStyle: Partial<ObjectStyle.Triangle>) {
		if (newStyle.fill !== undefined) this.props.fill = newStyle.fill;
		if (newStyle.stroke !== undefined) this.props.stroke = newStyle.stroke;
	}
}
