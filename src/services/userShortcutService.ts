/**
 * Represents a user-defined shortcut.
 */
export type IUserShortcut = {
  /** Unique identifier for the shortcut. */
  id: string;

  /** Name of the shortcut. */
  name: string;

  /**
   * Keyboard accelerator for the shortcut, e.g., "Ctrl+Shift+N".
   * See https://www.electronjs.org/docs/latest/api/accelerator for more information.
   *
   */
  accelerator: string;
};

/**
 * Represents a subscription to a shortcut event, allowing for unsubscribing.
 */
export type IShortcutSubscription = {
  /** Function to call to unsubscribe from the shortcut event. */
  unsubscribe: () => void;
};

/**
 * Interface for managing user shortcuts.
 */
export type IUserShortcutService = {
  /**
   * Retrieves an existing shortcut or creates a new one if it does not exist.
   * @param shortcut The shortcut to get or create, either as a string(shortcutId) or IUserShortcut.
   * @param defaultShortcut The default shortcut to use if creating a new one.
   * @returns A promise resolving to the user shortcut.
   */
  getOrCreate: (
    shortcut: string | IUserShortcut,
    defaultShortcut: IUserShortcut
  ) => Promise<IUserShortcut>;

  /**
   * Retrieves a shortcut by its ID.
   * @param shortcutId The ID of the shortcut to retrieve.
   * @returns The shortcut if found, otherwise undefined.
   */
  get(shortcutId: string): IUserShortcut | undefined;

  /**
   * Updates an existing shortcut.
   * @param shortcut The IUserShortcut object to update.
   * @returns A promise resolving to a boolean indicating success or failure.
   */
  update: (shortcut: IUserShortcut) => Promise<boolean>;

  /**
   * Registers a new shortcut.
   * @param shortcut The IUserShortcut object to register.
   * @returns A promise resolving to a boolean indicating success or failure.
   */
  register: (shortcut: IUserShortcut) => Promise<boolean>;

  /**
   * Unregisters a shortcut.
   * @param id The ID of the shortcut to unregister.
   * @returns A promise resolving to a boolean indicating success or failure.
   */
  unregister: (id: string) => Promise<boolean>;

  /**
   * Retrieves all registered shortcuts.
   * @returns An array of IUserShortcut objects.
   */
  getShortcuts: () => IUserShortcut[];

  /**
   * Checks if a shortcut is registered.
   * @param acceleratorOrShortcut The accelerator or IUserShortcut to check.
   * @returns A boolean indicating if the shortcut is registered.
   */
  isRegistered: (acceleratorOrShortcut: string | IUserShortcut) => boolean;

  /**
   * Subscribes to an event that triggers when a specific shortcut is pressed.
   * @param shortcut The shortcut to listen for, either as a string or IUserShortcut.
   * @param callback The function to call when the shortcut is pressed.
   * @returns A subscription object for unsubscribing.
   */
  onShortcutPressed: (
    shortcut: string | IUserShortcut,
    callback: () => void
  ) => IShortcutSubscription;

  /**
   * Subscribes to an event that triggers when a shortcut is added.
   * @param callback The function to call with the added IUserShortcut.
   * @returns A subscription object for unsubscribing.
   */
  onShortcutAdded: (
    callback: (shortcut: IUserShortcut) => void
  ) => IShortcutSubscription;

  /**
   * Subscribes to an event that triggers when a shortcut is removed.
   * @param callback The function to call with the removed IUserShortcut.
   * @returns A subscription object for unsubscribing.
   */
  onShortcutRemoved: (
    callback: (shortcut: IUserShortcut) => void
  ) => IShortcutSubscription;

  /**
   * Subscribes to an event that triggers when a shortcut is updated.
   * @param callback The function to call with the updated IUserShortcut.
   * @returns A subscription object for unsubscribing.
   */
  onShortcutUpdated: (
    callback: (shortcut: IUserShortcut) => void
  ) => IShortcutSubscription;
};
