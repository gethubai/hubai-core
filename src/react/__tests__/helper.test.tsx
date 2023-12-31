import React from 'react';
import { cloneReactChildren } from '@/react';
import { fireEvent, render } from '@testing-library/react';

describe('Test helper.ts', () => {
  test('Clone the React children', () => {
    const fn = jest.fn();
    const Test = <span data-testid="test">test</span>;

    const newTest = cloneReactChildren(Test, { onClick: fn });

    const { getByTestId } = render(<>{newTest}</>);
    const span = getByTestId('test');
    expect(span).not.toBeNull();
    fireEvent.click(span);

    expect(fn).toHaveBeenCalled();
  });

  test('Clone the invalid React element', () => {
    const newTest = cloneReactChildren('abc', {});
    expect(newTest).toEqual(['abc']);
  });
});
