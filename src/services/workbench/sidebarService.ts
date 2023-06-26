import 'reflect-metadata';
import { ISidebar, ISidebarPane } from '@/model/workbench/sidebar';
import type { UniqueId } from '@/common/types';
import { Component } from '@/react/component';

export interface ISidebarService extends Component<ISidebar> {
  /**
   * Get a specific pane via id
   * @param id
   */
  get(id: UniqueId): ISidebarPane | undefined;
  /**
   * Add a new Sidebar pane
   * @param pane
   * @param isActive Whether to activate the current pane
   */
  add(pane: ISidebarPane, isActive?: boolean): void;
  /**
   * Update a specific pane
   * @param pane
   */
  update(pane: ISidebarPane): void;
  /**
   * Remove a pane
   * @param id
   */
  remove(id: UniqueId): void;
  /**
   * Set the specific pane as active
   * @param id
   */
  setActive(id?: UniqueId): void;
  /**
   * Reset the sidebar data
   */
  reset(): void;
}
