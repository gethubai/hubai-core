import React from 'react';
import { classNames } from '@/common/className';
import { IActivityBarItem } from '@/model/workbench/activityBar';
import { IMenuItemProps, Menu } from '@/components/menu';
import { IActivityBarController } from '@/controller/activityBar';

import { Icon, useContextViewEle } from '@/components';
import { KeybindingHelper } from '@/services/keybinding';
import {
  indicatorClassName,
  labelClassName,
  itemClassName,
  itemCheckedClassName,
  itemDisabledClassName,
} from './base';

export function ActivityBarItem(
  props: IActivityBarItem & IActivityBarController
) {
  const {
    checked = false,
    disabled = false,
    title = '',
    data = {},
    render,
    icon,
    id,
    onClick,
    contextMenu = [],
    className,
    onContextMenuClick,
  } = props;

  const renderContextMenu = () => (
    <Menu
      onClick={onClickMenuItem}
      role="menu"
      data={contextMenu.map((menu) => {
        if (menu.id) {
          const keybindingObj = KeybindingHelper.queryGlobalKeybinding(
            menu.id.toString()
          );
          if (keybindingObj) {
            menu.keybinding =
              KeybindingHelper.convertSimpleKeybindingToString(keybindingObj);
          }
        }
        return menu;
      })}
    />
  );

  const contextView = useContextViewEle({ render: renderContextMenu });

  const onClickMenuItem = (
    e: React.MouseEvent,
    item: IMenuItemProps | undefined
  ) => {
    onContextMenuClick?.(e, item);
    contextView?.hide();
  };

  const onClickItem = function (event) {
    if (onClick) {
      onClick(props.id, props);
    }
    if (contextMenu.length > 0) {
      contextView?.show({ x: event.pageX, y: event.pageY });
    }
  };

  const content = (
    <Icon type={icon} className={labelClassName} title={title}>
      {render?.() || null}
    </Icon>
  );

  return (
    <li
      id={id.toString()}
      onClick={onClickItem}
      className={classNames(
        className,
        itemClassName,
        checked ? itemCheckedClassName : '',
        disabled ? itemDisabledClassName : ''
      )}
      data-id={data.id}
    >
      {content}
      {checked ? <div className={indicatorClassName} /> : null}
    </li>
  );
}
