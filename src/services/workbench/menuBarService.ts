import type { UniqueId } from '@/common/types';
import { IMenuBar, IMenuBarItem } from '@/model/workbench/menuBar';
import { Component } from '@/react';

export interface IMenuBarService extends Component<IMenuBar> {
  /**
   * Set the menus data
   * @param data
   */
  setMenus(data: IMenuBarItem[]): void;
  /**
   * Append a new menu into the specific menu found by `parentId`
   * @param menuItem the new menu
   * @param parentId
   */
  append(menuItem: IMenuBarItem, parentId: UniqueId): void;
  /**
   * Remove the specific menu item
   * @param menuId
   */
  remove(menuId: UniqueId): void;
  /**
   * Get the specific menu item
   * @param menuId
   */
  getMenuById(menuId: UniqueId): IMenuBarItem | undefined;
  /**
   * Update the specific menu item data
   * @param menuId
   * @param menuItem
   */
  update(menuId: UniqueId, menuItem: IMenuBarItem): void;
  /**
   * Reset menu bar data;
   */
  reset(): void;
  /**
   * listen to the onSelect event in menu
   * @param menuId
   */
  onSelect(callback: (menuId: UniqueId) => void): void;
}
