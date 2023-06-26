import 'reflect-metadata';
import React from 'react';
import { Controller } from '@/react/controller';
import { IMenuItemProps } from '@/components/menu';
import {
  IExplorerPanelItem,
} from '@/model/workbench/explorer/explorer';
import { IActionBarItemProps } from '@/components/actionBar';

export interface IExplorerController extends Partial<Controller> {
  onActionsContextMenuClick?: (
    e: React.MouseEvent,
    item?: IMenuItemProps
  ) => void;
  onCollapseChange?: (keys) => void;
  onToolbarClick?: (
    item: IActionBarItemProps,
    panel: IExplorerPanelItem
  ) => void;
  onClick?: (event, item) => void;
}