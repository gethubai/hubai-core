import React from 'react';
import { prefixClaName, classNames } from '@/common/className';
import { ActionBar, IActionBarProps } from '@/components/actionBar';

export interface IToolbarProps<T = any> extends IActionBarProps {}

const rootClassName = 'tool-bar';
export const toolbarClassName = prefixClaName(rootClassName);

export function Toolbar<T = any>(props: IToolbarProps<T>) {
  const { className, ...custom } = props;

  return (
    <div className={classNames(toolbarClassName, className)}>
      <ActionBar {...custom} />
    </div>
  );
}
