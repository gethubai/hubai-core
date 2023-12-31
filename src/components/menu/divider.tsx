import { classNames } from '@/common/className';
import React from 'react';
import {
  defaultDividerClassName,
  defaultMenuItemClassName,
  disabledClassName,
} from './base';

function Divider() {
  return (
    <li
      className={classNames(defaultMenuItemClassName, disabledClassName)}
      role="separator"
    >
      <a className={defaultDividerClassName} />
    </li>
  );
}

export { Divider };
