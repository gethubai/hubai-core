import { editor as MonacoEditor } from 'monaco-editor';
import { Component } from '@/react';
import { IPanel, IPanelItem } from '@/model/workbench/panel';

import { IActionBarItemProps } from '@/components/actionBar';
import type { UniqueId } from '@/common/types';

export interface IPanelService extends Component<IPanel> {
  /**
   * The editorInstance of Output
   */
  readonly outputEditorInstance: MonacoEditor.IStandaloneCodeEditor | undefined;
  /**
   * Set the current active panel
   *
   * This method will log error when couldn't find target panel in state data.
   * So if you want to add a panel and meanwhile active it, please use the `open` method
   * @param id target panel id
   */
  setActive(id: UniqueId): void;
  /**
   * Open a new or existing panel item as the active in Panel view
   * @param panel
   */
  open(panel: IPanelItem): void;
  /**
   * Get the specific panel
   * @param id
   */
  getPanel(id: UniqueId): IPanelItem | undefined;
  /**
   * Add new Panel items
   * @param data
   */
  add(data: IPanelItem | IPanelItem[]): void;
  /**
   * Update the specific panel
   * @param panel the id field is required
   */
  update(panel: IPanelItem): IPanelItem | undefined;
  /**
   * Update the Output panel, except the value
   *
   * If you want to update the value of this panel, please use the `appendOutput` method
   * @param panel
   */
  updateOutput(panel: IPanelItem): IPanelItem | undefined;
  /**
   * Remove the specific panel
   * @param id
   */
  remove(id: UniqueId): IPanelItem | undefined;
  /**
   * Toggle the panel between maximized or normal
   */
  toggleMaximize(): void;
  /**
   * Listen to the Panel tabs onChange event
   * @param callback
   */
  onTabChange(callback: (panelId: UniqueId) => void): void;
  /**
   * Listen to the Panel toolbar click event
   * @param callback
   */
  onToolbarClick(
    callback: (e: React.MouseEvent, item: IActionBarItemProps) => void
  ): void;
  /**
   * Listen to the Panel tabs close event
   * @param callback
   */
  onTabClose(callback: (panelId: UniqueId) => void): void;
  /**
   * Get the value of Output Panel
   */
  getOutputValue(): string;
  /**
   * Append the content into Output panel
   * @param content
   */
  appendOutput(content: string): void;
  /**
   * Clean the Output content
   */
  cleanOutput(): void;
  /**
   * Reset data in state
   */
  reset(): void;
}
