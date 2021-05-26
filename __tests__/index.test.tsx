import * as React from 'react';
import { JSDOM } from 'jsdom';
import { shallow } from 'enzyme';

import { Dropper } from '../src';

global.Image = new JSDOM('').window.Image;

describe('React Dropper component', () => {
  it('should render successfully with default props', () => {
    const dropper = shallow(<Dropper />);

    expect(dropper).toMatchSnapshot();
  });

  it('should render successfully', () => {
    const dropper = shallow(<Dropper width={200} height={200} image="" color="#000000" onChange={jest.fn()} />);

    dropper.find('canvas').simulate('click', {
      pageX: 300,
      pageY: 200,
      preventDefault: jest.fn()
    });

    expect(dropper).toMatchSnapshot();

    dropper.find('canvas').simulate('mousemove', {
      pageX: 300,
      pageY: 200,
      preventDefault: jest.fn()
    });

    expect(dropper).toMatchSnapshot();

    dropper.find('canvas').simulate('mouseleave', {
      pageX: 300,
      pageY: 200,
      preventDefault: jest.fn()
    });

    expect(dropper).toMatchSnapshot();
  });

  it('should render successfully with mocked DOM', () => {
    const dropper = shallow(<Dropper width={200} height={200} image="" color="#000000" onChange={jest.fn()} />);

    // @ts-ignore
    dropper.instance().current = {
      getBoundingClientRect(): any {
        return {
          top: 100,
          left: 100
        };
      },
      getContext(): any {
        return {
          drawImage(): string {
            return 'image';
          },
          getImageData(): number[] {
            return [100, 100, 50];
          }
        };
      }
    };

    expect(dropper).toMatchSnapshot();
  });
});
