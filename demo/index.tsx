import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Dropper } from '../dist';

// @ts-ignore
import Image from './image.jpg';

const App = () => {
  const [color, setColor] = React.useState('');
  const [event, setEvent] = React.useState('');

  return (
    <>
      <h4>Mousemove or click on the image below</h4>

      <Dropper
        width={400}
        height={600}
        image={Image}
        onChange={(c: string, e: string) => {
          setColor(c);
          setEvent(e);
        }}
      />

      <h4>
        <small>
          Photo by{' '}
          <a rel="noopener noreferrer" href="https://unsplash.com/@gstevens0884" target="_blank">
            guy stevens
          </a>{' '}
          on{' '}
          <a rel="noopener noreferrer" href="https://unsplash.com/images/nature/rainbow" target="_blank">
            Unsplash
          </a>
        </small>
      </h4>

      {!!color && !!event && (
        <div className="result">
          <p>
            The event type is: <code>{event}</code>
          </p>

          <p>
            The selected color is:
            <span
              style={{
                width: '1rem',
                height: '1rem',
                display: 'inline-block',
                backgroundColor: color,
                margin: '0 0.25rem -0.125rem 0.25rem'
              }}
            />
            <code>{color}</code>
          </p>
        </div>
      )}
    </>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
