import 'reflect-metadata';
import React from 'react';
import { IStatusBarItem } from '@/model';
import { Controller } from '@/react/controller';
import { IActionBarItemProps } from '@/components/actionBar';
import { INotificationItem } from '@/model/notification';

export interface INotificationController extends Partial<Controller> {
  onCloseNotification(item: INotificationItem): void;
  onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
  onActionBarClick?(
    event: React.MouseEvent<Element, MouseEvent>,
    item: IActionBarItemProps<any>
  ): void;
  /**
   * Toggle the Notifications visibility
   */
  toggleNotifications(): void;
}