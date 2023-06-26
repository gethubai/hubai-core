import { IDisposable } from '@/monaco/common';
import type { UniqueId } from '@/common/types';
import { Action2 } from '@/monaco/action';
import { IExtension } from '..';

export interface IExtensionService {
  /**
   * Load the extension instances and then activate them.
   * Notice: The ExtensionService doesn't load an existed Extension, if you want inactivate
   * someone extension, there can use the `ExtensionService.inactive` method, also if you want
   * remove a extension, you can use the `ExtensionService.dispose` method.
   * @param extensions The extension array
   */
  load(extensions: IExtension[]): void;
  /**
   * Add the extensions to ExtensionService, but no activated.
   * @param extensions The Extensions wait to added
   * @returns Unload Extensions
   */
  add(extensions: IExtension[]): IExtension[] | null;
  /**
   * Activate the extensions (includes `contributes` type).
   * Notice: this method only do  the `activate` work, not store the data into ExtensionService,
   * which means you can't get the Extension by the `ExtensionService. getExtension` method.
   * @param extensions
   */
  activate(extensions: IExtension[]): void;
  /**
   * Get an extension by the ID
   * @param name The extension ID
   */
  getExtension(id: UniqueId): IExtension | undefined;
  /**
   * Get All loaded extensions
   * @return Extension Array
   */
  getAllExtensions(): IExtension[];
  /**
   * Dispose the specific extension, and remove it from the ExtensionService
   * @param extension The extension id is required
   */
  dispose(extensionId: UniqueId): void;
  /**
   * Dispose all extensions, and reset the ExtensionService
   */
  disposeAll(): void;
  /**
   * Disable to activate some extensions, make use of it to filter some
   * extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.
   * @example
   * ```ts
   *  molecule.extension.inactive((extension: IExtension) => {
   *      if (/^(idA|idB)$/.test(extension.id)) {
   *          return true;
   *      }
   *  });
   *  <MoleculeProvider extensions={[]}></MoleculeProvider>
   * ```
   * @param predicate The predicate function
   */
  inactive(predicate: (extension: IExtension) => boolean): void;
  /**
   * Register a new action which is extends the Action2, and return a disposable instance.
   * @example
   * ```ts
   * const action = class Action extends Action2 {};
   * const disposableAction = registerAction(action);
   * disposableAction.dispose(); // Dispose the action
   * ```
   * @param actionClass The action class
   * @return IDisposable The Disposable instance
   */
  registerAction(actionClass: { new (): Action2 }): IDisposable;
  /**
   * Execute the registered command
   * @param id The command ID
   * @param args
   */
  executeCommand(id: string, ...args: any): void;
  /**
   * Reset the extensions to `[]`
   */
  reset(): void;
  /**
   * Distinguish the language extensions from extensions
   * @param extensions
   * @returns [ languagesExts, otherExtensions ]
   */
  splitLanguagesExts(extensions: IExtension[]): [IExtension[], IExtension[]];
  /**
   * whether the extensions are loaded
   */
  isLoaded(): boolean;
  /**
   * Set the extensions are loaded
   */
  setLoaded(flag?: boolean): void;
}