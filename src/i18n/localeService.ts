import { ILocale } from '@/i18n/localization';

export interface ILocaleService {
  /**
   * Initialize the locales data, and the current locale language,
   * @param locales
   * @param localeId
   */
  initialize(locales: ILocale[], localeId: string): void;
  /**
   * Set the current locale language by id
   * @param id
   */
  setCurrentLocale(id: string): boolean;
  /**
   * Get the current locale language
   */
  getCurrentLocale(): ILocale | undefined;
  /**
   * Get All locale languages
   */
  getLocales(): ILocale[];
  /**
   * Get a locale language by the id
   * @param id
   */
  getLocale(id: string): ILocale | undefined;
  /**
   * Add multiple local languages
   * @param locales
   */
  addLocales(locales: ILocale[]): void;
  /**
   * Remove a locale language by the id
   * @param id
   */
  removeLocale(id: string): ILocale | undefined;
  /**
   * Returns the international text located by source key，or the default value if it is not find
   * For examples:
   * ```ts
   * localize('id','default value'); // hello ${i}, ${i}
   * localize('id','default value', 'world'); // hello world, ${i}
   * localize('id','default value', 'world', 'molecule'); // hello world, molecule
   * ```
   * @param sourceKey The key value located in the source international text
   * @param defaultValue The default value to be used when not find the international text
   * @param args If provided, it will used as the values to be replaced in the international text
   * @returns
   */
  localize(sourceKey: string, defaultValue: string, ...args: string[]): string;
  /**
   * Listen to the local language changed event
   * @param callback
   */
  onChange(callback: (prev: ILocale, next: ILocale) => void): void;
  /**
   * Reset the LocaleService to the initial state
   */
  reset(): void;
}
