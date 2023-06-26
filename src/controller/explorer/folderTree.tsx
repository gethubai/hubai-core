import 'reflect-metadata';
import { Controller } from '@/react/controller';
import { IMenuItemProps } from '@/components/menu';
import {
  FileType,
  IFolderTreeNodeProps,
} from '@/model';
import type { UniqueId } from '@/common/types';

export interface IFolderTreeController extends Partial<Controller> {
  readonly createTreeNode?: (type: FileType, id?: UniqueId) => void;
  readonly onClickContextMenu?: (
    contextMenu: IMenuItemProps,
    treeNode?: IFolderTreeNodeProps
  ) => void;
  readonly onUpdateFileName?: (file: IFolderTreeNodeProps) => void;
  readonly onSelectFile?: (file?: IFolderTreeNodeProps) => void;
  readonly onDropTree?: (
    source: IFolderTreeNodeProps,
    target: IFolderTreeNodeProps
  ) => void;
  readonly onLoadData?: (treeNode: IFolderTreeNodeProps) => Promise<void>;
  readonly onExpandKeys?: (expandKeys: UniqueId[]) => void;
  readonly onRightClick?: (treeNode: IFolderTreeNodeProps) => IMenuItemProps[];
}