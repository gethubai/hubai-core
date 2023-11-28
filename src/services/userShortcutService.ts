export type IUserShortcut = {
    id: string;
    name: string;
    accelerator: string;
  };
  
  export type IShortcutSubscription = {
    unsubscribe: () => void;
  };
  
  export type IUserShortcutService = {
    getOrCreate: (
      shortcut: string | IUserShortcut,
      defaultShortcut: IUserShortcut
    ) => Promise<IUserShortcut>;
    update: (shortcut: IUserShortcut) => Promise<boolean>;
    register: (shortcut: IUserShortcut) => Promise<boolean>;
    unregister: (id: string) => Promise<boolean>;
    getShortcuts: () => IUserShortcut[];
    isRegistered: (acceleratorOrShortcut: string | IUserShortcut) => boolean;
    onShortcutPressed: (
      shortcut: string | IUserShortcut,
      callback: () => void
    ) => IShortcutSubscription;
    onShortcutAdded: (
      callback: (shortcut: IUserShortcut) => void
    ) => IShortcutSubscription;
    onShortcutRemoved: (
      callback: (shortcut: IUserShortcut) => void
    ) => IShortcutSubscription;
    onShortcutUpdated: (
      callback: (shortcut: IUserShortcut) => void
    ) => IShortcutSubscription;
  };
  