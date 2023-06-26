import { Component } from '@/react';
import {
  ILayout,
  Position,
  MenuBarMode,
} from '@/model/workbench/layout';

export interface ILayoutService extends Component<ILayout> {
  /**
   * Get the container of the molecule
   */
  readonly container: HTMLElement | null;
  /**
   * Toggle the visibility of menu bar, returns the status of menu bar's `hidden`
   */
  toggleMenuBarVisibility(): boolean;
  /**
   * Toggle the visibility of side bar, returns the status of side bar's `hidden`
   */
  toggleSidebarVisibility(): boolean;
  /**
   * Toggle the visibility of the panel, returns the status of panel's `hidden`
   */
  togglePanelVisibility(): boolean;
  /**
   * Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`
   */
  toggleActivityBarVisibility(): boolean;
  /**
   * Toggle the visibility of the status bar, returns the status of status bar's `hidden`
   */
  toggleStatusBarVisibility(): boolean;
  /**
   * Toggle the maximized status of the panel, returns the status of maximized panel
   */
  togglePanelMaximized(): boolean;
  /**
   * Set the sizes between the side bar and main content area
   * @param splitPanePos
   */
  setPaneSize(splitPanePos: (number | string)[]): void;
  /**
   * Set the sizes between the editor and the panel
   * @param horizontalSplitPanePos
   */
  setHorizontalPaneSize(horizontalSplitPanePos: (number | string)[]): void;
  /**
   * Set the position of the side bar, default is in `left`
   * @param position
   * @unachieved
   */
  setSideBarPosition(position: keyof typeof Position): void;
  /**
   * Set the sizes between editor groups
   * @param groupSplitPos
   */
  setGroupSplitSize(groupSplitPos: (number | string)[]): void;
  /**
   * Set the mode of the MenuBar, default is `vertical`
   * @param mode
   * @unachieved
   */
  setMenuBarMode(mode: keyof typeof MenuBarMode): void;
  /**
   * Get the mode of the MenuBar
   */
  getMenuBarMode(): keyof typeof MenuBarMode;
  /**
   * Set the direction of editor group,default is `vertical`
   */
  setEditorGroupDirection(
    direction: MenuBarMode | ((prev: MenuBarMode) => MenuBarMode)
  ): void;
  /**
   * Set the visibility of auxiliary bar
   *
   * Returns the next state of hidden
   */
  setAuxiliaryBar(hidden: boolean | ((preState: boolean) => boolean)): boolean;
  /**
   * Reset all layout data as default value
   */
  reset(): void;
  /**
   * Listen to the workbench did mount event
   * @param callback callback function
   */
  onWorkbenchDidMount(callback: Function): void;
}