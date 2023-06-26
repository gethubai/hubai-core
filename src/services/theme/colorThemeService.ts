/**
 * VSCode theme extends guides: https://code.visualstudio.com/api/extension-guides/color-theme
 * https://code.visualstudio.com/api/references/theme-color
 */

import {
  IColorTheme,
  ColorThemeMode,
} from '@/model/colorTheme';

export interface IColorThemeService {
  /**
   * Add themes into `colorThemes`
   *
   * This will update the duplicated themes found in `colorThemes`
   * @param themes
   */
  addThemes(themes: IColorTheme | IColorTheme[]): void;
  /**
   * Set the current Color Theme via id,
   * Please ensure the theme could be found in `colorThemes`
   * @param id The `id` is required
   */
  setTheme(id: string): void;
  /**
   * Update specific theme,
   * @param theme The `id` is required in theme
   */
  updateTheme(theme: IColorTheme): void;
  /**
   * Get all themes in `colorThemes`
   */
  getThemes(): IColorTheme[];
  /**
   * Get specific theme via id
   * @param id
   */
  getThemeById(id: string): IColorTheme | undefined;
  /**
   * Get the current Color Theme
   */
  getColorTheme(): IColorTheme;
  /**
   * Reload current theme
   */
  reload(): void;
  /**
   * Reset theme
   */
  reset(): void;
  /**
   * Get the mode('dark' or 'light') of the current Color Theme
   */
  getColorThemeMode(): ColorThemeMode;
  /**
   * Listen to the theme changed event
   * @param callback
   */
  onChange(
    callback: (
      prev: IColorTheme,
      next: IColorTheme,
      themeMode: ColorThemeMode
    ) => void
  ): void;
}

