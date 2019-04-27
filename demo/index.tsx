import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Dropper } from '../src';

// @ts-ignore
import * as Avatar from './atanas.jpeg';

const get = (id: string): HTMLElement | null => document.getElementById(id);

ReactDOM.render(
  <Dropper
    width={400}
    height={400}
    color="#000000"
    image={Avatar}
    className="react-dropper"
    onChange={(color, sync) => {
      if (get('result')) {
        get('result')!.style.backgroundColor = color;
      }

      if (sync) {
        alert('Color set to ' + color);
      }
    }}
  />,
  get('demo')
);
