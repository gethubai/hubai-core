import 'reflect-metadata';
import { Component } from '@/react';
import {
  IEditor,
  IEditorGroup,
  IEditorTab,
  IEditorActionsProps,
  IEditorOptions,
} from '@/model';
import { editor as MonacoEditor } from '@/monaco';
import { IMenuItemProps } from '@/components';
import type { UniqueId } from '@/common/types';

export interface IEditorService extends Component<IEditor> {
  /**
   * Open a new tab in a specific group
   * @param tab Tab data
   * @param groupId Group ID
   */
  open<T = any>(tab: IEditorTab<T>, groupId?: UniqueId): void;
  /**
   * Get a tab from a specific group via the tab ID
   * @param tabId
   * @param groupId
   */
  getTabById<T>(tabId: UniqueId, groupId: UniqueId): IEditorTab<T> | undefined;
  /**
   * Update the specific tab, if the groupId provide, then update the tab of specific group
   * @param tab The id is required
   * @param groupId
   */
  updateTab(tab: IEditorTab, groupId?: UniqueId): IEditorTab;
  /**
   * Updates the editor content for a specific group
   * @param group The editorInstance is required
   * @param value
   */
  setGroupEditorValue(group: IEditorGroup, value: string): void;
  /**
   * Specify the Entry page of Workbench
   */
  setEntry(component: JSX.Element): void;
  /**
   * Judge the specific tabs whether opened in Editor view
   * @param tabId The tabId is required
   */
  isOpened(tabId: UniqueId): boolean;
  /**
   * Close the specific Tab opened in Editor Group view
   * @param tabId The tabId is required
   * @param groupId The groupId is required
   */
  closeTab(tabId: UniqueId, groupId: UniqueId): void;
  /**
   * Close other opened tabs in Editor Group
   * @param tab The id is required
   * @param groupId The groupId is required
   */
  closeOther(tab: IEditorTab, groupId: UniqueId): void;
  /**
   * Close the right opened tabs in Editor Group
   * @param tab The id is required, the start point of close to right
   * @param groupId The groupId is required
   */
  closeToRight(tab: IEditorTab, groupId: UniqueId): void;
  /**
   * Close the left opened Tabs in Editor Group
   * @param tab The id is required, the start point of close to left
   * @param groupId The groupId is required
   */
  closeToLeft(tab: IEditorTab, groupId: UniqueId): void;
  /**
   * Close the specific group all opened tabs
   * @param groupId The groupId is required
   */
  closeAll(groupId: UniqueId): void;
  /**
   * Get the specific group
   * @param groupId The groupId is required
   */
  getGroupById(groupId: UniqueId): IEditorGroup | undefined;
  /**
   * Clone a specific group, if the argument `groupId` is undefined,
   * there default clone the current group
   * @param groupId
   */
  cloneGroup(groupId?: UniqueId): IEditorGroup;
  /**
   * Listen to the Editor tab changed event
   * @param callback
   */
  onUpdateTab(callback: (tab: IEditorTab) => void): void;
  /**
   * Listen to the tab opening event
   * @param callback
   */
  onOpenTab(callback: (tab: IEditorTab) => void): void;
  /**
   * Listen to the tab move event
   * @param callback
   */
  onMoveTab(
    callback: (updateTabs: IEditorTab<any>[], groupId?: UniqueId) => void
  );
  /**
   * Listen to the tab select event
   * @param callback
   */
  onSelectTab(callback: (tabId: UniqueId, groupId?: UniqueId) => void);
  /**
   * Listen to the all tabs close event
   * @param callback
   */
  onCloseAll(callback: (groupId?: UniqueId) => void);
  /**
   * Listen to the tab close event
   * @param callback
   */
  onCloseTab(callback: (tabId: UniqueId, groupId?: UniqueId) => void);
  /**
   * Listen to the other tabs close event
   * @param callback
   */
  onCloseOther(callback: (tabItem: IEditorTab, groupId?: UniqueId) => void);
  /**
   * Listen to the left tabs close event
   * @param callback
   */
  onCloseToLeft(callback: (tabItem: IEditorTab, groupId?: UniqueId) => void);
  /**
   * Listen to the right tabs close event
   * @param callback
   */
  onCloseToRight(callback: (tabItem: IEditorTab, groupId?: UniqueId) => void);
  /**
   * Listen to the Group Actions click event
   * @param callback
   */
  onActionsClick(
    callback: (menuId: UniqueId, currentGroup: IEditorGroup) => void
  ): void;
  /**
   * Set active group and tab
   * @param groupId Target group ID
   * @param tabId Target tab ID
   */
  setActive(groupId: UniqueId, tabId: UniqueId);
  /**
   * Update the specific group
   * @param groupId
   * @param groupValues
   */
  updateGroup(groupId: UniqueId, groupValues: Omit<IEditorGroup, 'id'>): void;
  /**
   * Set default actions when create a new group
   * @param actions
   */
  setDefaultActions(actions: IEditorActionsProps[]): void;
  /**
   * Set default menus when create a new group
   * @param menus
   */
  setDefaultMenus(menus: IMenuItemProps[]): void;
  /**
   * Update actions in specific group
   * @param actions
   * @param groupId
   */
  updateActions(actions: IMenuItemProps[], groupId?: UniqueId): void;
  /**
   * Update the current group
   * @param currentValues
   */
  updateCurrentGroup(currentValues): void;
  /**
   * Get the default group actions
   */
  getDefaultActions(): IEditorActionsProps[];
  /**
   * Get the default group menus
   */
  getDefaultMenus(): IMenuItemProps[];
  /**
   * Update the editor options
   * @param options
   */
  updateEditorOptions(options: IEditorOptions): void;
  /**
   * The instance of MonacoEditor
   */
  readonly editorInstance: MonacoEditor.IStandaloneCodeEditor;
  /**
   * Get the group's id which contains the tab
   * @param tabId
   */
  getGroupIdByTab(tabId: UniqueId): UniqueId | null;
}
