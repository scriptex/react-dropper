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
  });
});
