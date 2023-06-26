import { Controller } from '@/react/controller';
import { IActionBarItemProps, IMenuItemProps, ITabProps } from '@/components';
import type { UniqueId } from '@/common/types';

export interface IEditorTreeController extends Partial<Controller> {
  readonly onClose?: (tabId: UniqueId, groupId: UniqueId) => void;
  readonly onSelect?: (tabId: UniqueId, groupId: UniqueId) => void;
  readonly onCloseGroup?: (groupId: UniqueId) => void;
  readonly onSaveGroup?: (groupId: UniqueId) => void;
  readonly onToolbarClick?: (
    toolbar: IActionBarItemProps,
    groupId: UniqueId
  ) => void;
  /**
   * Trigger by context menu click event
   * When click the context menu from group header, it doesn't have file info
   */
  readonly onContextMenu?: (
    menu: IMenuItemProps,
    groupId: UniqueId,
    file?: ITabProps
  ) => void;
}