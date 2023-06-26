import { IColorTheme } from '@/model/colorTheme';
import { IExtension } from '@/model/extension';

const webStormIntelliJExtension: IExtension = require('./package.json');

// Default
const themeOneColors: IColorTheme = require('./themes/darcula-color-theme.json');

const themes = webStormIntelliJExtension.contributes?.themes || [];

const themeOne = themes[0];

themes[0] = { ...themeOne, ...themeOneColors };

export { webStormIntelliJExtension };
