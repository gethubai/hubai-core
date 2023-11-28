import React from 'react';
import { Input } from '../input';

export type FormItemProps = {
  style?: React.CSSProperties;
  className?: string;
  label: string;
  name: string;
  id: string;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
};

export function FormItem(
  props: React.PropsWithChildren<Partial<FormItemProps>>
) {
  const { id, label, name, children, labelProps, ...restProps } = props;
  return (
    <div className="form-item" {...restProps} style={{ marginBottom: 10 }}>
      {label ? (
        <label
          className="form-item__label"
          title={label}
          htmlFor={id}
          style={{ lineHeight: 28 }}
          {...(labelProps ?? {})}
        >
          {label}
        </label>
      ) : null}
      {children || <Input id={id} name={name || label} autoComplete="false" />}
    </div>
  );
}
