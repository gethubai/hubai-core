import 'reflect-metadata';
import React from 'react';
import { Component } from '@/react/component';
import {
  IAuxiliaryBar,
  IAuxiliaryBarMode,
  IAuxiliaryData,
} from '@/model';
import type { UniqueId } from '@/common/types';

export interface IAuxiliaryBarService extends Component<IAuxiliaryBar> {
  /**
   * Get the current tab
   */
  getCurrentTab(): IAuxiliaryData | undefined;
  addAuxiliaryBar(tabs: IAuxiliaryData[] | IAuxiliaryData): void;
  /**
   * Set the active one on data
   */
  setActive(current: UniqueId | undefined): void;
  /**
   * Set the mode of auxiliary bar
   */
  setMode: (
    mode:
      | IAuxiliaryBarMode
      | ((preState: IAuxiliaryBarMode) => IAuxiliaryBarMode)
  ) => IAuxiliaryBarMode;
  /**
   * Set the children of auxiliary bar
   */
  setChildren: (children: React.ReactNode) => void;
  /**
   * Called when auxiliary tab title clicked
   */
  onTabClick: (callback: (key: UniqueId) => void) => void;
  /**
   * Reset all states
   */
  reset: () => void;
}