import 'reflect-metadata';
import { Controller } from '@/react/controller';
import { IMenuItemProps } from '@/components/menu';

import type { UniqueId } from '@/common/types';
import { IActivityBarItem } from '..';

export interface IActivityBarController extends Partial<Controller> {
  /**
   * Called when activity bar item is clicked
   */
  onClick?: (selectedKey: UniqueId, selectedNode: IActivityBarItem) => void;
  /**
   * Called when activity bar item which is not global is changed
   */
  onChange?: (prevSelected?: UniqueId, nextSelected?: UniqueId) => void;
  onContextMenuClick?: (
    e: React.MouseEvent,
    item: IMenuItemProps | undefined
  ) => void;
}
