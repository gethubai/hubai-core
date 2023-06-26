import 'reflect-metadata';
import React from 'react';
import { IStatusBarItem } from '@/model';
import { Controller } from '@/react/controller';
import { IMenuItemProps } from '@/components/menu';

export interface IStatusBarController extends Partial<Controller> {
  onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
  onContextMenuClick?: (
    e: React.MouseEvent,
    item: IMenuItemProps | undefined
  ) => void;
}