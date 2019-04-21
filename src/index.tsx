import * as React from 'react';

interface IDropperProps {
	size: number;
	width: number;
	height: number;
	image: any;
	onSelect: (args: any) => any;
	onMouseMove: (args: any) => any;
	onTouchMove: (args: any) => any; // TODO support touch events
}

interface IDropperState {
	offsetTop: number;
	offsetLeft: number;
}

export class Dropper extends React.Component<IDropperProps, IDropperState> {
	private canvas: React.Ref<HTMLCanvasElement> = React.createRef();
	private ctx: CanvasRenderingContext2D;

	public state: IDropperState = {
		offsetTop: 0,
		offsetLeft: 0
	};

	public componentDidMount(): void {
		const { current } = this.canvas as any;
		const offset = current.getBoundingClientRect();

		this.ctx = current.getContext('2d');

		this.setState({
			offsetTop: offset.top,
			offsetLeft: offset.left
		});
	}

	public render(): React.ReactNode {
		this.drawImage();

		return (
			<canvas
				className="tile__colorpicker"
				width={this.props.width}
				height={this.props.height}
				ref={this.canvas}
				onClick={this.setColor}
				onMouseMove={this.setColor}
			/>
		);
	}

	private drawImage = () => {
		const { width, height, image } = this.props;
		const htmlImage: HTMLImageElement = new Image();

		htmlImage.onload = () => {
			this.ctx.drawImage(htmlImage, 0, 0, width, height);
		};

		htmlImage.src = image as any;
	};

	private getImageData = (e: React.MouseEvent<HTMLCanvasElement>): Uint8ClampedArray => {
		const canvasX = Math.floor(e.pageX - this.state.offsetLeft);
		const canvasY = Math.floor(e.pageY - this.state.offsetTop);
		const imageData = this.ctx.getImageData(canvasX, canvasY, 1, 1);

		return imageData.data;
	};

	private setColor = (e: React.MouseEvent<HTMLCanvasElement>): void => {
		e.preventDefault();

		const [r, g, b]: Uint8ClampedArray = this.getImageData(e);
		const color: string = `#${(b + 256 * g + 65536 * r).toString(16)}`;

		this.props.onSelect({
			...this.state,
			color
		});
	};
}

export default Dropper;
