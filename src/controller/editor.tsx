import 'reflect-metadata';
import React from 'react';

import {
  IEditorTab,
  IEditorActionsProps,
} from '@/model/workbench/editor';
import { Controller } from '@/react/controller';
import { IMenuItemProps } from '@/components/menu';
import { IMonacoEditorProps } from '@/components/monaco';
import { editor as MonacoEditor } from '@/monaco';

import type { UniqueId } from '@/common/types';

export interface IEditorController extends Partial<Controller> {
  open?<T = any>(tab: IEditorTab<T>, groupId?: UniqueId): void;
  onClickContextMenu?: (
    e: React.MouseEvent,
    item: IMenuItemProps,
    tabItem?: IEditorTab
  ) => void;
  onCloseAll?: (group: UniqueId) => void;
  onCloseTab?: (tabId: UniqueId, group: UniqueId) => void;
  onCloseToLeft?: (tab: IEditorTab, group: UniqueId) => void;
  onCloseToRight?: (tab: IEditorTab, group: UniqueId) => void;
  onCloseOther?: (tab: IEditorTab, group: UniqueId) => void;
  onCloseSaved?: (group: UniqueId) => void;
  onChangeEditorProps?: (
    preProps: IMonacoEditorProps,
    nextProps: IMonacoEditorProps
  ) => void;
  onMoveTab?: <T = any>(updateTabs: IEditorTab<T>[], group: UniqueId) => void;
  onSelectTab?: (tabId: UniqueId, group: UniqueId) => void;
  onClickActions: (action: IEditorActionsProps) => void;
  onUpdateEditorIns?: (editorInstance: any, groupId: UniqueId) => void;
  onPaneSizeChange?: (newSize: number[]) => void;
  initEditorEvents?: (
    editorInstance: MonacoEditor.IStandaloneCodeEditor,
    groupId: UniqueId
  ) => void;
  getViewState?: (id: UniqueId) => MonacoEditor.ICodeEditorViewState;
}
