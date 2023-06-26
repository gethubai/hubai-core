import 'reflect-metadata';
import {
  INotification,
  INotificationItem,
} from '@/model/notification';
import { Component } from '@/react';
import type { UniqueId } from '@/common/types';

export interface INotificationService extends Component<INotification> {
  /**
   * Add new notification items
   * @param items
   */
  add<T>(items: INotificationItem<T>[]): null | INotificationItem<T>[];
  /**
   * Remove the specific notification item by id
   * @param id
   */
  remove(id: UniqueId): void;
  /**
   * Update the specific notification item
   * @param item notification item, the id field is required
   */
  update<T>(item: INotificationItem<T>): null | INotificationItem<T>;
  /**
   * Toggle the Notification view between display or hidden
   */
  toggleNotification(): void;
  /**
   * Clear the notifications
   */
  clear(): void;
  /**
   * Reset notifications, this will clear the pending notifications
   */
  reset(): void;
}