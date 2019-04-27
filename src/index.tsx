import * as React from 'react';

interface Props {
  readonly width: number;
  readonly height: number;
  readonly color: string;
  readonly image: string;
  readonly className: string;
  readonly onChange: (color: string, sync: boolean) => any;
}

interface State {
  oldColor: string;
}

export class Dropper extends React.Component<Props, State> {
  private canvas: React.Ref<HTMLCanvasElement> = React.createRef();

  public static defaultProps: Props = {
    width: 300,
    height: 150,
    color: '#ffffff',
    image: '',
    className: 'react-dropper',
    onChange: (color: string, sync: boolean): any => undefined
  };

  public state: State = {
    oldColor: ''
  };

  public componentWillMount(): void {
    this.setState({
      oldColor: this.props.color
    });
  }

  public render(): React.ReactNode {
    this.drawImage();

    return (
      <canvas
        className={this.props.className}
        width={this.props.width}
        height={this.props.height}
        ref={this.canvas}
        onClick={this.setColor}
        onMouseMove={this.setColor}
        onMouseLeave={this.setColor}
      />
    );
  }

  private drawImage = () => {
    const imageElement: HTMLImageElement = new Image();
    const { width, height, image } = this.props;

    imageElement.onload = () => {
      const canvas = (this.canvas as any).current;

      if (canvas && canvas.getContext('2d')) {
        canvas.getContext('2d').drawImage(imageElement, 0, 0, width, height);
      }
    };

    imageElement.src = image as any;
    imageElement.crossOrigin = 'Anonymous';
  };

  private getImageData = (e: React.MouseEvent<HTMLCanvasElement>): number[] => {
    const canvas = (this.canvas as any).current;

    if (canvas && canvas.getContext('2d')) {
      const offset = canvas.getBoundingClientRect();
      const canvasX = Math.floor(e.pageX - offset.left);
      const canvasY = Math.floor(e.pageY - offset.top);
      const imageData = canvas.getContext('2d').getImageData(canvasX, canvasY, 1, 1);

      return imageData.data;
    }

    return [];
  };

  private setColor = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    e.preventDefault();

    const data = this.getImageData(e);

    if (!data.length) {
      this.props.onChange(this.state.oldColor, false);

      return;
    }

    const [r, g, b]: number[] = this.getImageData(e);
    const newColor: string = `#${(b + 256 * g + 65536 * r).toString(16)}`;

    if (e.type === 'mousemove') {
      this.props.onChange(newColor, false);
    }

    if (e.type === 'mouseleave') {
      this.props.onChange(this.state.oldColor, true);
    }

    if (e.type === 'click') {
      this.props.onChange(newColor, false);
    }
  };
}
