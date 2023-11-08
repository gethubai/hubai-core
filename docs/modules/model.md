# Module: model

## Table of contents

### Enumerations

- [ActivityBarEvent](../enums/model.ActivityBarEvent.md)
- [AuxiliaryEventKind](../enums/model.AuxiliaryEventKind.md)
- [ColorScheme](../enums/model.ColorScheme.md)
- [ColorThemeEvent](../enums/model.ColorThemeEvent.md)
- [ColorThemeMode](../enums/model.ColorThemeMode.md)
- [EditorEvent](../enums/model.EditorEvent.md)
- [EditorTreeEvent](../enums/model.EditorTreeEvent.md)
- [ExplorerEvent](../enums/model.ExplorerEvent.md)
- [FileTypes](../enums/model.FileTypes.md)
- [Float](../enums/model.Float.md)
- [FolderTreeEvent](../enums/model.FolderTreeEvent.md)
- [IContributeType](../enums/model.IContributeType.md)
- [IExtensionType](../enums/model.IExtensionType.md)
- [MarkerSeverity](../enums/model.MarkerSeverity.md)
- [MenuBarEvent](../enums/model.MenuBarEvent.md)
- [NotificationStatus](../enums/model.NotificationStatus.md)
- [PanelEvent](../enums/model.PanelEvent.md)
- [ProblemsEvent](../enums/model.ProblemsEvent.md)
- [SearchEvent](../enums/model.SearchEvent.md)
- [SettingsEvent](../enums/model.SettingsEvent.md)
- [StatusBarEvent](../enums/model.StatusBarEvent.md)

### Classes

- [ActivityBarModel](../classes/model.ActivityBarModel.md)
- [AppContext](../classes/model.AppContext.md)
- [AppContextServices](../classes/model.AppContextServices.md)
- [AuxiliaryModel](../classes/model.AuxiliaryModel.md)
- [EditorGroupModel](../classes/model.EditorGroupModel.md)
- [EditorModel](../classes/model.EditorModel.md)
- [EditorTree](../classes/model.EditorTree.md)
- [IExplorerModel](../classes/model.IExplorerModel.md)
- [IFolderTreeModel](../classes/model.IFolderTreeModel.md)
- [MenuBarModel](../classes/model.MenuBarModel.md)
- [NotificationModel](../classes/model.NotificationModel.md)
- [PanelModel](../classes/model.PanelModel.md)
- [ProblemsModel](../classes/model.ProblemsModel.md)
- [SearchModel](../classes/model.SearchModel.md)
- [SettingsModel](../classes/model.SettingsModel.md)
- [SidebarModel](../classes/model.SidebarModel.md)
- [StatusBarModel](../classes/model.StatusBarModel.md)
- [TreeNodeModel](../classes/model.TreeNodeModel.md)

### Interfaces

- [BuiltInEditorTabDataType](../interfaces/model.BuiltInEditorTabDataType.md)
- [IActivityBar](../interfaces/model.IActivityBar.md)
- [IActivityBarItem](../interfaces/model.IActivityBarItem.md)
- [IActivityMenuItemProps](../interfaces/model.IActivityMenuItemProps.md)
- [IAuxiliaryBar](../interfaces/model.IAuxiliaryBar.md)
- [IBrainConfiguration](../interfaces/model.IBrainConfiguration.md)
- [IColorTheme](../interfaces/model.IColorTheme.md)
- [IColors](../interfaces/model.IColors.md)
- [IContribute](../interfaces/model.IContribute.md)
- [IEditor](../interfaces/model.IEditor.md)
- [IEditorAction](../interfaces/model.IEditorAction.md)
- [IEditorActionsProps](../interfaces/model.IEditorActionsProps.md)
- [IEditorGroup](../interfaces/model.IEditorGroup.md)
- [IEditorTab](../interfaces/model.IEditorTab.md)
- [IExplorer](../interfaces/model.IExplorer.md)
- [IExplorerPanelItem](../interfaces/model.IExplorerPanelItem.md)
- [IExtension](../interfaces/model.IExtension.md)
- [IExtensionsConfiguration](../interfaces/model.IExtensionsConfiguration.md)
- [IFolderInputEvent](../interfaces/model.IFolderInputEvent.md)
- [IFolderTree](../interfaces/model.IFolderTree.md)
- [IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md)
- [IFolderTreeSubItem](../interfaces/model.IFolderTreeSubItem.md)
- [IIconTheme](../interfaces/model.IIconTheme.md)
- [IMenuBar](../interfaces/model.IMenuBar.md)
- [IMenuBarItem](../interfaces/model.IMenuBarItem.md)
- [INotification](../interfaces/model.INotification.md)
- [INotificationItem](../interfaces/model.INotificationItem.md)
- [IOutput](../interfaces/model.IOutput.md)
- [IPanel](../interfaces/model.IPanel.md)
- [IPanelItem](../interfaces/model.IPanelItem.md)
- [IProblems](../interfaces/model.IProblems.md)
- [IProblemsItem](../interfaces/model.IProblemsItem.md)
- [IProblemsTreeNode](../interfaces/model.IProblemsTreeNode.md)
- [IRelatedInformation](../interfaces/model.IRelatedInformation.md)
- [ISearchProps](../interfaces/model.ISearchProps.md)
- [ISettings](../interfaces/model.ISettings.md)
- [ISidebar](../interfaces/model.ISidebar.md)
- [ISidebarPane](../interfaces/model.ISidebarPane.md)
- [ISimpleKeybinding](../interfaces/model.ISimpleKeybinding.md)
- [IStatusBar](../interfaces/model.IStatusBar.md)
- [IStatusBarItem](../interfaces/model.IStatusBarItem.md)
- [IWorkbench](../interfaces/model.IWorkbench.md)
- [TokenColor](../interfaces/model.TokenColor.md)

### Type Aliases

- [FileType](model.md#filetype)
- [IAuxiliaryBarMode](model.md#iauxiliarybarmode)
- [IAuxiliaryData](model.md#iauxiliarydata)
- [IEditorOptions](model.md#ieditoroptions)
- [RenderFunctionProps](model.md#renderfunctionprops)

### Variables

- [KeyCodeString](model.md#keycodestring)

## Type Aliases

### FileType

Ƭ **FileType**: keyof typeof [`FileTypes`](../enums/model.FileTypes.md)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:13](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L13)

___

### IAuxiliaryBarMode

Ƭ **IAuxiliaryBarMode**: ``"default"`` \| ``"tabs"``

#### Defined in

[src/model/workbench/auxiliaryBar.ts:8](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/auxiliaryBar.ts#L8)

___

### IAuxiliaryData

Ƭ **IAuxiliaryData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `UniqueId` |
| `title` | `React.ReactNode` |

#### Defined in

[src/model/workbench/auxiliaryBar.ts:10](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/auxiliaryBar.ts#L10)

___

### IEditorOptions

Ƭ **IEditorOptions**: `MonacoEditor.IEditorOptions` & `MonacoEditor.IGlobalEditorOptions`

#### Defined in

[src/model/workbench/editor.ts:31](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L31)

___

### RenderFunctionProps

Ƭ **RenderFunctionProps**: (`props`: `any`) => `React.ReactNode`

#### Type declaration

▸ (`props`): `React.ReactNode`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

##### Returns

`React.ReactNode`

#### Defined in

[src/model/workbench/explorer/explorer.tsx:13](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/explorer.tsx#L13)

## Variables

### KeyCodeString

• `Const` **KeyCodeString**: `Partial`\<\{ [key in KeyCode]: string }\>

#### Defined in

[src/model/keybinding.ts:3](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/keybinding.ts#L3)
