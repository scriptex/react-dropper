import * as React from 'react';

interface Props {
  readonly width: number;
  readonly height: number;
  readonly color: string;
  readonly image: string;
  readonly className: string;
  readonly onChange: (color: string, sync: boolean) => any;
}

export const Dropper: React.FC<Readonly<Props>> = ({ width, height, color, image, className, onChange }: Props) => {
  const canvas: React.MutableRefObject<HTMLCanvasElement | null> = React.createRef();
  const [oldColor, setOldColor] = React.useState(color);

  const drawImage = React.useCallback(() => {
    const imageElement: HTMLImageElement = new Image();

    imageElement.onload = () => {
      if (canvas.current && canvas.current.getContext('2d')) {
        canvas.current.getContext('2d')?.drawImage(imageElement, 0, 0, width, height);
      }
    };

    imageElement.src = image as any;
    imageElement.crossOrigin = 'Anonymous';
  }, []);

  const getImageData = React.useCallback((e: React.MouseEvent<HTMLCanvasElement>): Uint8ClampedArray | void => {
    if (canvas.current && canvas.current.getContext('2d')) {
      const offset = canvas.current.getBoundingClientRect();
      const canvasX = Math.floor(e.pageX - offset.left);
      const canvasY = Math.floor(e.pageY - offset.top);
      const imageData = canvas.current.getContext('2d')?.getImageData(canvasX, canvasY, 1, 1);

      return imageData?.data;
    }

    return;
  }, []);

  const setColor = React.useCallback((e: React.MouseEvent<HTMLCanvasElement>): void => {
    e.preventDefault();

    const data = getImageData(e);

    if (!data?.length) {
      onChange(oldColor, false);

      return;
    }

    const [r, g, b]: Uint8ClampedArray = data;
    const newColor: string = `#${(b + 256 * g + 65536 * r).toString(16)}`;

    if (e.type === 'mousemove') {
      onChange(newColor, false);
    }

    if (e.type === 'click') {
      onChange(newColor, true);
    }
  }, []);

  React.useEffect(() => {
    drawImage();
  }, []);

  return (
    <canvas
      ref={canvas}
      width={width}
      height={height}
      className={className}
      onClick={setColor}
      onMouseMove={setColor}
    />
  );
};

Dropper.defaultProps = {
  width: 300,
  height: 150,
  color: '#ffffff',
  image: '',
  className: 'react-dropper',
  onChange: (color: string, sync: boolean): any => undefined
};

export default Dropper;
