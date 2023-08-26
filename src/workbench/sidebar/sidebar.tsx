import React, { memo } from 'react';
import { getBEMElement, prefixClaName } from '@/common/className';
//import { ISidebar, ISidebarPane } from '@/model/workbench/sidebar';

export interface IHeaderProps {
  title: React.ReactNode;
  toolbar: React.ReactNode;
}

const defaultClassName = prefixClaName('sidebar');
const headerClassName = getBEMElement(defaultClassName, 'header');
const titleClassName = getBEMElement(defaultClassName, 'title');
const contentClassName = getBEMElement(defaultClassName, 'content');
const toolbarClassName = getBEMElement(defaultClassName, 'toolbar');

export const Header = memo<IHeaderProps>(function Header(props: IHeaderProps) {
  return (
    <header className={headerClassName}>
      <div className={titleClassName}>
        <h2>{props.title}</h2>
      </div>
      <div className={toolbarClassName}>{props.toolbar || null}</div>
    </header>
  );
});

export function Content({children, ...rest}: React.ComponentProps<any>) {
  return <div className={contentClassName} {...rest}>{children}</div>;
}