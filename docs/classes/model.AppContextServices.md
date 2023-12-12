# Class: AppContextServices

[model](../modules/model.md).AppContextServices

## Table of contents

### Constructors

- [constructor](model.AppContextServices.md#constructor)

### Properties

- [activityBar](model.AppContextServices.md#activitybar)
- [auxiliaryBar](model.AppContextServices.md#auxiliarybar)
- [brainClientManager](model.AppContextServices.md#brainclientmanager)
- [chatAssistantsManager](model.AppContextServices.md#chatassistantsmanager)
- [editor](model.AppContextServices.md#editor)
- [extension](model.AppContextServices.md#extension)
- [layout](model.AppContextServices.md#layout)
- [menuBar](model.AppContextServices.md#menubar)
- [notification](model.AppContextServices.md#notification)
- [problems](model.AppContextServices.md#problems)
- [settings](model.AppContextServices.md#settings)
- [sidebar](model.AppContextServices.md#sidebar)
- [theme](model.AppContextServices.md#theme)
- [toast](model.AppContextServices.md#toast)
- [userShortcut](model.AppContextServices.md#usershortcut)

## Constructors

### constructor

• **new AppContextServices**(`sidebar`, `activityBar`, `menuBar`, `editor`, `notification`, `theme`, `problems`, `settings`, `extension`, `layout`, `auxiliaryBar`, `brainClientManager`, `toast`, `userShortcut`, `chatAssistantsManager`): [`AppContextServices`](model.AppContextServices.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebar` | [`ISidebarService`](../interfaces/services.ISidebarService.md) |
| `activityBar` | [`IActivityBarService`](../interfaces/services.IActivityBarService.md) |
| `menuBar` | [`IMenuBarService`](../interfaces/services.IMenuBarService.md) |
| `editor` | [`IEditorService`](../interfaces/services.IEditorService.md) |
| `notification` | [`INotificationService`](../interfaces/services.INotificationService.md) |
| `theme` | [`IColorThemeService`](../interfaces/services.IColorThemeService.md) |
| `problems` | [`IProblemsService`](../interfaces/services.IProblemsService.md) |
| `settings` | [`ISettingsService`](../interfaces/services.ISettingsService.md) |
| `extension` | [`IExtensionService`](../interfaces/services.IExtensionService.md) |
| `layout` | [`ILayoutService`](../interfaces/services.ILayoutService.md) |
| `auxiliaryBar` | [`IAuxiliaryBarService`](../interfaces/services.IAuxiliaryBarService.md) |
| `brainClientManager` | [`IBrainClientManager`](../interfaces/services.IBrainClientManager.md) |
| `toast` | [`IToastService`](../interfaces/services.IToastService.md) |
| `userShortcut` | [`IUserShortcutService`](../modules/services.md#iusershortcutservice) |
| `chatAssistantsManager` | [`IChatAssistantsManagement`](../interfaces/services.IChatAssistantsManagement.md) |

#### Returns

[`AppContextServices`](model.AppContextServices.md)

#### Defined in

[src/model/appContext.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L44)

## Properties

### activityBar

• **activityBar**: [`IActivityBarService`](../interfaces/services.IActivityBarService.md)

#### Defined in

[src/model/appContext.ts:29](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L29)

___

### auxiliaryBar

• **auxiliaryBar**: [`IAuxiliaryBarService`](../interfaces/services.IAuxiliaryBarService.md)

#### Defined in

[src/model/appContext.ts:38](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L38)

___

### brainClientManager

• **brainClientManager**: [`IBrainClientManager`](../interfaces/services.IBrainClientManager.md)

#### Defined in

[src/model/appContext.ts:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L39)

___

### chatAssistantsManager

• **chatAssistantsManager**: [`IChatAssistantsManagement`](../interfaces/services.IChatAssistantsManagement.md)

#### Defined in

[src/model/appContext.ts:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L42)

___

### editor

• **editor**: [`IEditorService`](../interfaces/services.IEditorService.md)

#### Defined in

[src/model/appContext.ts:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L31)

___

### extension

• **extension**: [`IExtensionService`](../interfaces/services.IExtensionService.md)

#### Defined in

[src/model/appContext.ts:36](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L36)

___

### layout

• **layout**: [`ILayoutService`](../interfaces/services.ILayoutService.md)

#### Defined in

[src/model/appContext.ts:37](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L37)

___

### menuBar

• **menuBar**: [`IMenuBarService`](../interfaces/services.IMenuBarService.md)

#### Defined in

[src/model/appContext.ts:30](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L30)

___

### notification

• **notification**: [`INotificationService`](../interfaces/services.INotificationService.md)

#### Defined in

[src/model/appContext.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L32)

___

### problems

• **problems**: [`IProblemsService`](../interfaces/services.IProblemsService.md)

#### Defined in

[src/model/appContext.ts:34](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L34)

___

### settings

• **settings**: [`ISettingsService`](../interfaces/services.ISettingsService.md)

#### Defined in

[src/model/appContext.ts:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L35)

___

### sidebar

• **sidebar**: [`ISidebarService`](../interfaces/services.ISidebarService.md)

#### Defined in

[src/model/appContext.ts:28](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L28)

___

### theme

• **theme**: [`IColorThemeService`](../interfaces/services.IColorThemeService.md)

#### Defined in

[src/model/appContext.ts:33](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L33)

___

### toast

• **toast**: [`IToastService`](../interfaces/services.IToastService.md)

#### Defined in

[src/model/appContext.ts:40](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L40)

___

### userShortcut

• **userShortcut**: [`IUserShortcutService`](../modules/services.md#iusershortcutservice)

#### Defined in

[src/model/appContext.ts:41](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/appContext.ts#L41)
