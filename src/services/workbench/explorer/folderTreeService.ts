import { Component } from '@/react/component';
import {
  FileType,
  IFolderTree,
  IFolderTreeNodeProps,
} from '@/model/workbench/explorer/folderTree';
import { IMenuItemProps } from '@/components';
import type { UniqueId } from '@/common/types';

export interface IFolderTreeService extends Component<IFolderTree> {
  /**
   * Reset the FolderTreeService state
   */
  reset(): void;
  /**
   * Add data into folder tree
   * @param data
   * @param id - Except adding a root folder, the id is required
   */
  add(data: IFolderTreeNodeProps, id?: UniqueId): void;
  /**
   * Remove specific data in folder tree
   * @param id
   */
  remove(id: UniqueId): void;
  /**
   * Update specific data in folder tree
   * @param data - The `id` property is required in data
   */
  update(data: IFolderTreeNodeProps): void;
  /**
   * Get specific data in folder tree
   * @param id
   */
  get(id: UniqueId): IFolderTreeNodeProps | null;
  /**
   * get the current treeNode's parentNode
   * @param id
   */
  getParentNode(id: UniqueId): IFolderTreeNodeProps | null;
  /**
   * Get the context menus for file
   */
  getFileContextMenu: () => IMenuItemProps[];
  /**
   * Get the context menus for folder
   */
  getFolderContextMenu: () => IMenuItemProps[];
  /**
   * Get the expandKeys in folderTree
   */
  getExpandKeys: () => UniqueId[];
  /**
   * Set the expandKeys for folderTree
   */
  setExpandKeys: (expandKeys: UniqueId[]) => void;
  /**
   * Get the loadedKeys for folderTree
   */
  getLoadedKeys: () => string[];
  /**
   * Set the loadedKeys for folderTree
   */
  setLoadedKeys: (loadedKeys: string[]) => void;
  /**
   * Active specific node,
   * or unactive any node in folder tree
   * @param id
   */
  setActive(id?: UniqueId): void;
  /**
   * Set a entry page for folder tree
   * @param entry
   */
  setEntry(entry: React.ReactNode): void;
  /**
   * Set the context menus for file
   * @param menus
   */
  setFileContextMenu: (menus: IMenuItemProps[]) => void;
  /**
   * Set the context menus for folder
   * @param menus
   */
  setFolderContextMenu: (menus: IMenuItemProps[]) => void;
  /**
   * Listen to event about clicking rename button
   * @param callback
   */
  onRename(callback: (id: UniqueId) => void): void;
  /**
   * Listen to remove a node
   * @param callback
   */
  onRemove(callback: (id: UniqueId) => void): void;
  /**
   * Listen to update file or folder name
   * @param callback
   */
  onUpdateFileName(callback: (file: IFolderTreeNodeProps) => void): void;
  /**
   * Listen to select a file
   * @param callback
   */
  onSelectFile(callback: (file: IFolderTreeNodeProps) => void): void;
  /**
   * Listen to drop event
   * @param treeData
   */
  onDropTree(
    callback: (
      source: IFolderTreeNodeProps,
      target: IFolderTreeNodeProps
    ) => void
  ): void;
  /**
   * Listen to right click event
   * @param callback
   */
  onRightClick(
    callback: (treeData: IFolderTreeNodeProps, menus: IMenuItemProps[]) => void
  ): void;
  /**
   * Listen to create a node for folder tree
   * @param callback
   */
  onCreate(callback: (type: FileType, nodeId?: UniqueId) => void): void;
  /**
   * Listen to the click event about the context menu except for built-in menus
   * @param callback
   */
  onContextMenu(
    callback: (
      contextMenu: IMenuItemProps,
      treeNode?: IFolderTreeNodeProps
    ) => void
  ): void;
  /**
   * Callback for load folder tree data
   * @param callback
   */
  onLoadData(
    callback: (
      treeNode: IFolderTreeNodeProps,
      callback: (treeNode: IFolderTreeNodeProps) => void
    ) => void
  ): void;
  /**
   * Callback for expanding tree node
   * @param callback
   */
  onExpandKeys(callback: (expandKeys: UniqueId[]) => void): void;
  /**
   * Toggle whether to enable sorting, which is disabled by default.
   */
  toggleAutoSort(): void;
}