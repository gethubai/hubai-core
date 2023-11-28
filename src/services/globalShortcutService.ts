export type IGlobalShortcut = {
    accelerator: string;
    enabled: boolean;
  };
  export type IGlobalShortcutRegistrationOptions = {
    id?: string;
  };
  
  export interface IGlobalShortcutService {
    /* Register a global shortcut. Returns the id of the registration if successful (used for unregistering), otherwise null. */
    register(
      accelerator: string,
      callback: () => void,
      options?: IGlobalShortcutRegistrationOptions
    ): Promise<string | undefined>;
    unregister(accelerator: string): Promise<boolean>;
    isRegistered(accelerator: string): boolean;
    getRegistered(): IGlobalShortcut[];
    unregisterAll(): void;
    isValid(accelerator: string): boolean;
  }
  