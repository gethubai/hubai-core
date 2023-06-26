import 'reflect-metadata';
import {
  IProblems,
  IProblemsItem,
  IProblemsTreeNode,
} from '@/model/problems';

import { Component } from '@/react';
import type { UniqueId } from '@/common/types';

export interface IProblemsService extends Component<IProblems> {
  /**
   * Add single or multiple items data
   * @param data
   */
  add(data: IProblemsItem | IProblemsItem[]): void;
  /**
   * Remove the specific problem items
   * @param id single or multiple ids
   */
  remove(id: UniqueId | UniqueId[]): void;
  /**
   * Reset the ProblemsService state data
   */
  reset(): void;
  /**
   * Update the specific data
   * @param data single or multiple problems
   */
  update<T>(data: IProblemsItem<T> | IProblemsItem<T>[]): void;
  /**
   * Toggle the Problems view between display or hidden
   */
  toggleProblems(): void;
  /**
   * Listen to select a problem tree node
   * @param callback
   */
  onSelect(callback: (node: IProblemsTreeNode) => void): void;
}