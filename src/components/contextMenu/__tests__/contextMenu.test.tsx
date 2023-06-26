import React from 'react';
import { render } from '@testing-library/react';

import { act } from 'react-test-renderer';
import { IContextMenu, useContextMenu } from '../index';

describe('Test ContextMenu Component', () => {
  const container = render(<div data-testid="anchor" />);
  const anchorEle = container.getByTestId('anchor');
  let contextMenu: IContextMenu | undefined;

  test('the useContextMenu anchor is null', () => {
    contextMenu = useContextMenu({
      anchor: null,
      render: () => <></>,
    });
    expect(contextMenu).toBeUndefined();
  });

  test('the useContextMenu method', () => {
    act(() => {
      contextMenu = useContextMenu({
        anchor: anchorEle,
        render() {
          return <span data-testid="menuitem">Test context menu</span>;
        },
      });
    });
    expect(contextMenu).not.toBeUndefined();
  });

  test('the useContextMenu show method', () => {
    act(() => {
      contextMenu?.show({
        x: anchorEle.offsetTop,
        y: anchorEle.offsetLeft,
      });
    });
    const content = container.getByTestId('menuitem');
    expect(content).not.toBeUndefined();
    expect(contextMenu?.view?.style.visibility).toEqual('visible');
  });

  test('the useContextMenu hide method', () => {
    act(() => {
      contextMenu?.hide();
    });
    expect(contextMenu?.view?.style.visibility).toEqual('hidden');
  });
});
