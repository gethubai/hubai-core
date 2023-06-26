import { ISettings } from '@/model/settings';

import { IEditorTab } from '@/model';
import { modules } from './builtinService/const';
export type BuiltInSettingsTabType = ReturnType<
  typeof modules.BuiltInSettingsTab
>;

export interface ISettingsService {
  /**
   * Append new Settings object
   * eg: `
   *  append({ project: { name: 'example' } })
   * `
   * @param settings object
   */
  append(settings: ISettings): void;
  /**
   * To update a settings object, it's going to overwrite
   * a settings item if it existed.
   * @param settings
   */
  update(settings: ISettings): void;
  /**
   * Get the settings object
   */
  getSettings(): ISettings;
  /**
   * It converts an object to a flatted object,
   * eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }.
   * @param obj object
   */
  flatObject(obj: object): object;
  /**
   * It converts an object to a flatted json string,
   * eg: { a: { b: 'test' }}, result is : `{ 'a.b': 'test' }`.
   * @param obj object
   */
  flatObject2JSONString(obj: object): string;
  /**
   * It converts a flatted JSON string to a normal object,
   * eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.
   * @param jsonStr string
   * @return T
   */
  normalizeFlatObject<T = ISettings>(jsonStr: string): T;
  /**
   * It converts an object to JSON string
   */
  toJSONString(obj: object, space?: number): string;
  /**
   * Open the `settings.json` in the Editor Panel
   */
  openSettingsInEditor(): void;
  /**
   * Apply the nextSettings configuration
   * @param nextSettings
   */
  applySettings(nextSettings: ISettings): void;
  /**
   * Listen to the Settings change event.
   * @param callback
   */
  onChangeSettings(
    callback: (tab: IEditorTab<BuiltInSettingsTabType>) => void
  ): void;
  /**
   * Get the default Settings Tab object
   */
  getDefaultSettingsTab(): BuiltInSettingsTabType;

  saveSettings(): void;

  onSettingsSaved(callback: (settings: ISettings) => void): void;
}

