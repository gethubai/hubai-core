import { IEditorOptions } from './workbench';

/**
 * The Settings configuration event definition
 */
export enum SettingsEvent {
  /**
   * The settings content changed
   */
  OnChange = 'settings.onchange',
  OnSave = 'settings.onsave',
}

export interface IExtensionsConfiguration {
  [index: string]: any;
}

export interface IBrainConfiguration {
  [index: string]: any;
}

export interface ISettings {
  colorTheme?: string;
  editor?: IEditorOptions;
  locale?: string;
  extension: IExtensionsConfiguration;
  brain: IBrainConfiguration;
  [index: string]: any;
}

export class SettingsModel implements ISettings {
  colorTheme: string;
  editor: IEditorOptions;
  locale?: string;
  extension: IExtensionsConfiguration;
  brain: IBrainConfiguration;
  [key: string]: any;

  constructor(
    colorTheme: string,
    editor: IEditorOptions,
    locale?: string,
    extension?: IExtensionsConfiguration,
    brain?: IBrainConfiguration
  ) {
    this.colorTheme = colorTheme;
    this.editor = editor;
    this.locale = locale;
    this.extension = extension ?? {};
    this.brain = brain ?? {};
  }

}
