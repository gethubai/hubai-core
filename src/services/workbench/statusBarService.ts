import 'reflect-metadata';
import {
  Float,
  IStatusBar,
  IStatusBarItem,
} from '@/model/workbench/statusBar';
import { Component } from '@/react';
import type { UniqueId } from '@/common/types';

export interface IStatusBarService extends Component<IStatusBar> {
  /**
   * Add a new StatusBar item into right or left status
   * @param item
   * @param float position the item to left or right
   */
  add(item: IStatusBarItem, float: Float): void;
  /**
   * Remove the specific StatusBar item
   * @param id
   * @param float if provided, it'll remove the item in spcific position
   */
  remove(id: UniqueId, float?: Float): void;
  /**
   * Update the specific StatusBar item, it'll update the item found in left
   * @param item the id field is required
   * @param float if provided, it'll update the item in specific position
   */
  update(item: IStatusBarItem, float?: Float): void;
  /**
   * Get the specific StatusBar item
   * @param id
   */
  getStatusBarItem(id: UniqueId, float?: Float): IStatusBarItem | null;
  /**
   * Reset the contextMenu data and the StatusBar data , including right and left
   */
  reset(): void;
  /**
   * Listen to the StatusBar click event
   * @param callback
   */
  onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void);
}
