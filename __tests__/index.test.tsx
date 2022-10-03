import * as React from 'react';
import { act, render, waitFor, fireEvent, RenderResult } from '@testing-library/react';

import { Dropper } from '../src';

const snapshotTest = (
  Component: React.FC<Readonly<React.ComponentProps<any>>>,
  callback?: (result: RenderResult) => void
): void => {
  const { name } = Component;

  describe(`${name} component`, () => {
    it(`Should render the ${name} component`, async () => {
      let result!: RenderResult;

      await act(async () => {
        result = await waitFor(() => render(<Component />));
      });

      const { asFragment } = result;

      expect(asFragment()).toMatchSnapshot();

      if (typeof callback === 'function') {
        callback(result);
      }
    });

    it(`Should unmount the ${name} component`, async () => {
      let result: RenderResult;

      await act(async () => {
        result = await waitFor(() => render(<Component />));
      });

      // @ts-ignore
      const { unmount, asFragment } = result;

      unmount();

      expect(asFragment()).toMatchSnapshot();
    });
  });
};

snapshotTest(Dropper, (result: RenderResult) => {
  const { container, asFragment } = result;

  fireEvent.click(container.querySelector('canvas')!, {
    pageX: 300,
    pageY: 200,
    preventDefault: jest.fn()
  });

  expect(asFragment()).toMatchSnapshot();

  fireEvent.mouseMove(container.querySelector('canvas')!, {
    pageX: 300,
    pageY: 200,
    preventDefault: jest.fn()
  });

  expect(asFragment()).toMatchSnapshot();
});
