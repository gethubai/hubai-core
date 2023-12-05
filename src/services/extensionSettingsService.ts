/**
 * Service injected into the package context to get/set the settings of the current package.
 */
export interface IPackageSettingsService {
  /**
   * Get the settings of the current package.
   */
  get<TSettings = any>(): TSettings;

  /**
   * Save the settings of the current package.
   * @param settings Settings to save.
   */
  save<TSettings = any>(settings: TSettings): void;

  /**
   * Subscribe to the settings updated event.
   * @param callback Callback function.
   */
  onUpdated<TSettings = any>(callback: (settings: TSettings) => void): void;
}
