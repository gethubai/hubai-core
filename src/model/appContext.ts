import {
  IActivityBarService,
  IAuxiliaryBarService,
  IBrainClientManager,
  IColorThemeService,
  IEditorService,
  IExtensionService,
  ILayoutService,
  IMenuBarService,
  INotificationService,
  IProblemsService,
  ISettingsService,
  ISidebarService,
} from '../services';

export class AppContext {
  public services: AppContextServices;

  constructor(services: AppContextServices) {
    this.services = services;
  }
}

export class AppContextServices {
  public sidebar: ISidebarService;
  public activityBar: IActivityBarService;
  public menuBar: IMenuBarService;
  public editor: IEditorService;
  public notification: INotificationService;
  public theme: IColorThemeService;
  public problems: IProblemsService;
  public settings: ISettingsService;
  public extension: IExtensionService;
  public layout: ILayoutService;
  public auxiliaryBar: IAuxiliaryBarService;
  public brainClientManager: IBrainClientManager;

  constructor(
    sidebar: ISidebarService,
    activityBar: IActivityBarService,
    menuBar: IMenuBarService,
    editor: IEditorService,
    notification: INotificationService,
    theme: IColorThemeService,
    problems: IProblemsService,
    settings: ISettingsService,
    extension: IExtensionService,
    layout: ILayoutService,
    auxiliaryBar: IAuxiliaryBarService,
    brainClientManager: IBrainClientManager
  ) {
    this.sidebar = sidebar;
    this.activityBar = activityBar;
    this.menuBar = menuBar;
    this.editor = editor;
    this.notification = notification;
    this.theme = theme;
    this.problems = problems;
    this.settings = settings;
    this.extension = extension;
    this.layout = layout;
    this.auxiliaryBar = auxiliaryBar;
    this.brainClientManager = brainClientManager;
  }
}
