import * as React from 'react';

interface Props {
  image: string;
  width?: number;
  height?: number;
  className?: string;
  onChange?: (color: string, eventType: string) => unknown;
}

export const Dropper: React.FC<Readonly<Props>> = ({
  image,
  width = 300,
  height = 150,
  className = 'react-dropper',
  onChange = () => undefined
}: Props) => {
  const canvas: React.MutableRefObject<HTMLCanvasElement | null> = React.createRef();

  const drawImage = React.useCallback(() => {
    const imageElement: HTMLImageElement = new Image();

    imageElement.onload = () => {
      if (canvas.current && canvas.current.getContext('2d')) {
        canvas.current.getContext('2d')?.drawImage(imageElement, 0, 0, width, height);
      }
    };

    imageElement.src = image;
    imageElement.crossOrigin = 'Anonymous';
  }, [image, width, height, canvas]);

  const getImageData = React.useCallback((e: React.MouseEvent<HTMLCanvasElement>): Uint8ClampedArray | void => {
    const target = e.target as HTMLCanvasElement;

    if (target && target.getContext('2d')) {
      const offset = target.getBoundingClientRect();
      const canvasX = Math.floor(e.pageX - offset.left);
      const canvasY = Math.floor(e.pageY - offset.top);
      const imageData = target.getContext('2d')?.getImageData(canvasX, canvasY, 1, 1);

      return imageData?.data;
    }

    return;
  }, []);

  const setColor = React.useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>): void => {
      e.preventDefault();

      const data = getImageData(e);

      if (!data?.length) {
        onChange('', '');

        return;
      }

      const [r, g, b]: Uint8ClampedArray = data;
      const newColor: string = `#${(b + 256 * g + 65536 * r).toString(16)}`;

      onChange(newColor, e.type);
    },
    [onChange, getImageData]
  );

  React.useEffect(() => {
    drawImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default Dropper;
