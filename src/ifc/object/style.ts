import { CanvasColor, FillAndStroke } from '../index';

export interface Rectangle extends FillAndStroke { }
export interface Triangle extends FillAndStroke { }
export interface Ellipse extends FillAndStroke { }
export interface Point extends FillAndStroke { }
export interface Text extends FillAndStroke {
	fontName: string;
}
export interface Line {
	stroke: CanvasColor;
}
