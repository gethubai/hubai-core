import { createContext } from 'react';
import { ILocale } from '@/i18n';
import { AppContextServices, ColorThemeMode, IColorTheme } from '@/model';

export type I18nContext = {
  /**
   * Gets the current locale language
   * @returns The current locale language
   */
  getCurrentLocale: () => ILocale;

  /**
   * Gets the available locale languages
   * @returns All locale languages
   */
  getLocales: () => ILocale[];
  /**
   * Returns the international text located by source key，or the default value if it is not find
   * @param sourceKey The key value located in the source international text
   * @param defaultValue The default value to be used when not find the international text
   * @param args If provided, it will used as the values to be replaced in the international text
   * @returns The localized text
   * @example
   * ```ts
   * localize('id','default value'); // hello ${i}, ${i}
   * localize('id','default value', 'world'); // hello world, ${i}
   * localize('id','default value', 'world', 'hubai'); // hello world, hubai
   * ```
   */
  localize: (
    sourceKey: string,
    defaultValue: string,
    ...args: string[]
  ) => string;
};

/**
 * The theme context
 */
export type ThemeContext = {
  /**
   * Gets the current color theme
   * @returns The current color theme
   */
  getCurrent: () => IColorTheme;

  /**
   * Gets the current color theme mode (dark/light/hc)
   * @returns The current color theme mode
   */
  getColorThemeMode: () => ColorThemeMode;
};


type Props = {
  /**
   * The AppContextServices instance
   * @see AppContextServices
   * @see AppContext
   *
   * @example
   * ```ts
   * import { useHubaiContext } from 'mo-lib/context';
   *
   * const { services } = useHubaiContext();
   * ```
   */
  services: AppContextServices;
  theme: ThemeContext;
  i18n: I18nContext;
};

const HubaiContext = createContext<Props>(null as any);
export default HubaiContext;
