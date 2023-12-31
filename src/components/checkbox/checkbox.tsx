import React from 'react';
import { prefixClaName, classNames, getBEMElement } from '@/common/className';
import type { HTMLElementProps, UniqueId } from '@/common/types';
import { getDataAttributionsFromProps } from '@/common/dom';

export interface ICheckboxProps extends HTMLElementProps {
  id: UniqueId;
  value?: string;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?(e: React.ChangeEvent, options?: ICheckboxProps): void;

  [key: string]: any;
}

export const checkboxClassName = prefixClaName('checkbox');
const checkboxLabelClassName = getBEMElement(checkboxClassName, 'label');
const checkboxInputClassName = getBEMElement(checkboxClassName, 'input');

export function Checkbox(props: ICheckboxProps) {
  const {
    className,
    id,
    children,
    value,
    onChange,
    title,
    role,
    style,
    checked,
    ...custom
  } = props;

  const claNames = classNames(checkboxClassName, className);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e, { id, value: e.target.value });
  };

  const dataAttrs = getDataAttributionsFromProps(custom);

  return (
    <div
      className={claNames}
      role={role}
      style={style}
      title={title}
      {...dataAttrs}
    >
      <input
        id={id.toString()}
        type="checkbox"
        className={checkboxInputClassName}
        value={value}
        onChange={handleCheckboxChange}
        checked={checked}
      />
      <label
        htmlFor={id.toString()}
        className={classNames(checkboxLabelClassName, 'codicon')}
      >
        {children}
      </label>
    </div>
  );
}
