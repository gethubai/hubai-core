import { Component } from '@/react/component';
import {
  IExplorerPanelItem,
  IExplorer,
} from '@/model/workbench/explorer/explorer';
import { IMenuItemProps } from '@/components/menu';
import { IActionBarItemProps } from '@/components';
import type { UniqueId } from '@/common/types';

export interface IExplorerService extends Component<IExplorer> {
  /**
   * Add a new panel, as well as add a new data for toolbar data
   */
  addPanel(panel: IExplorerPanelItem | IExplorerPanelItem[]): void;
  /**
   * Update the panels data, as well as modify toolbar data
   */
  updatePanel(data: Partial<IExplorerPanelItem>): void;
  /**
   *
   * Set expanded Panels of Explore
   */
  setExpandedPanels(activePanelKeys: UniqueId[]): void;
  /**
   * Remove a panel via id, as well as remove the corresponding action bar
   */
  removePanel(id: UniqueId): void;
  /**
   * Toggle panel hidden, as well as toggle the toolbar status
   */
  togglePanel(id: UniqueId): void;
  /**
   * Only toggle the toolbar status
   */
  toggleHeaderBar(id: UniqueId): void;
  /**
   * Only add an action in toolbar actions
   */
  addAction(action: IMenuItemProps): void;
  /**
   * Get the specific action in toolbar actions
   * @param id
   */
  getAction(id: UniqueId): IMenuItemProps | undefined;
  /**
   * Update the action in toolbar actions
   * @param action
   */
  updateAction(action: Partial<IMenuItemProps>): void;
  /**
   * Remove the specific header toolbar action
   * @param id action id
   */
  removeAction(id: UniqueId): void;
  /**
   * Reset the ExplorerService state, it's mainly for customizing the Explorer
   */
  reset(): void;
  /**
   * Listen to the Explorer header toolbar click event
   * @param callback
   */
  onClick(callback: (e: MouseEvent, item: IActionBarItemProps) => void);
  /**
   * Listen to the Explorer panel remove event
   * @param callback
   */
  onRemovePanel(callback: (panel: IExplorerPanelItem) => void): void;
  /**
   * Listen to the FolderTree Panel collapse all folders event
   * @param callback
   */
  onCollapseAllFolders(callback: () => void): void;
  /**
   * Listen to the Explorer panel toolbar click event
   * @param callback
   */
  onPanelToolbarClick(
    callback: (panel: IExplorerPanelItem, toolbarId: string) => void
  ): void;
}