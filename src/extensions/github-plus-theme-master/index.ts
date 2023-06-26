import { IColorTheme } from '@/model/colorTheme';
import { IExtension } from '@/model/extension';

const githubPlusExtension: IExtension = require('./package.json');

// Default
const themeOneColors: IColorTheme = require('./themes/github-plus-theme.json');

const themes = githubPlusExtension.contributes?.themes || [];

const themeOne = themes[0];

themes[0] = { ...themeOne, ...themeOneColors };

export { githubPlusExtension };
