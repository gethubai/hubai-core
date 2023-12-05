/**
 * Represents a global keyboard shortcut.
 */
export type IGlobalShortcut = {
  /** 
   * The keyboard accelerator for the global shortcut, e.g., "Ctrl+Shift+N".
   * See https://www.electronjs.org/docs/latest/api/accelerator for more information.
   */
  accelerator: string;

  /** Indicates whether the global shortcut is enabled. */
  enabled: boolean;
};

/**
 * Options for registering a global shortcut.
 */
export type IGlobalShortcutRegistrationOptions = {
  /** Optional identifier for the global shortcut registration. */
  id?: string;
};

/**
 * Interface for managing global shortcuts.
 */
export interface IGlobalShortcutService {
  /**
   * Registers a global shortcut.
   * @param accelerator The accelerator string for the global shortcut. See https://www.electronjs.org/docs/latest/api/accelerator for more information.
   * @param callback The function to execute when the global shortcut is activated.
   * @param options Optional settings for the global shortcut registration.
   * @returns A promise resolving to the registration ID if successful, otherwise undefined.
   */
  register(
    accelerator: string,
    callback: () => void,
    options?: IGlobalShortcutRegistrationOptions
  ): Promise<string | undefined>;

  /**
   * Unregisters a global shortcut.
   * @param accelerator The accelerator string for the global shortcut to unregister.
   * @returns A promise resolving to a boolean indicating success or failure.
   */
  unregister(accelerator: string): Promise<boolean>;

  /**
   * Checks if a global shortcut is registered.
   * @param accelerator The accelerator string for the global shortcut to check.
   * @returns A boolean indicating if the global shortcut is registered.
   */
  isRegistered(accelerator: string): boolean;

  /**
   * Retrieves all registered global shortcuts.
   * @returns An array of IGlobalShortcut objects.
   */
  getRegistered(): IGlobalShortcut[];

  /**
   * Unregisters all global shortcuts.
   */
  unregisterAll(): void;

  /**
   * Validates an accelerator string to see if it can be used as a global shortcut.
   * @param accelerator The accelerator string to validate.
   * @returns A boolean indicating if the accelerator is valid for a global shortcut.
   */
  isValid(accelerator: string): boolean;
}
