export enum SettingType {
  /**
   * Represents a setting type for string values.
   */
  STRING = 'string',
  /**
   * Represents a setting type for numeric values.
   */
  NUMBER = 'number',
  /**
   * Represents a setting type for boolean values (true/false).
   */
  BOOLEAN = 'boolean',
  /**
   * Represents a setting type for integer values.
   */
  INTEGER = 'integer',
}

export interface ISettingMap {
  /**
   * The internal name of the setting.
   */
  name: string;

  /**
   * The display name of the setting, used in user interfaces.
   */
  displayName: string;

  /**
   * The type of the setting, as defined in the SettingType enum.
   */
  type: SettingType;

  /**
   * Optional array of possible values for the setting. Can be a static array or a function returning an array.
   */
  enumValues?: string[] | (() => string[]);

  /**
   * Default value of the setting.
   */
  defaultValue?: string;

  /**
   * Indicates whether the setting is required.
   */
  required: boolean;

  /**
   * Optional description of the setting, explaining its purpose or usage.
   */
  description?: string;

  /**
   * Indicates if the setting is a secret, such as a password or API key. (If true, the setting value will be masked in user interfaces.)
   */
  isSecret?: boolean;
}
