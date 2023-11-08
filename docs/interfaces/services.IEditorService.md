# Interface: IEditorService

[services](../modules/services.md).IEditorService

## Hierarchy

- `Component`\<[`IEditor`](model.IEditor.md)\>

  ↳ **`IEditorService`**

## Table of contents

### Properties

- [editorInstance](services.IEditorService.md#editorinstance)
- [state](services.IEditorService.md#state)

### Methods

- [cloneGroup](services.IEditorService.md#clonegroup)
- [closeAll](services.IEditorService.md#closeall)
- [closeOther](services.IEditorService.md#closeother)
- [closeTab](services.IEditorService.md#closetab)
- [closeToLeft](services.IEditorService.md#closetoleft)
- [closeToRight](services.IEditorService.md#closetoright)
- [getDefaultActions](services.IEditorService.md#getdefaultactions)
- [getDefaultMenus](services.IEditorService.md#getdefaultmenus)
- [getGroupById](services.IEditorService.md#getgroupbyid)
- [getGroupIdByTab](services.IEditorService.md#getgroupidbytab)
- [getTabById](services.IEditorService.md#gettabbyid)
- [isOpened](services.IEditorService.md#isopened)
- [onActionsClick](services.IEditorService.md#onactionsclick)
- [onCloseAll](services.IEditorService.md#oncloseall)
- [onCloseOther](services.IEditorService.md#oncloseother)
- [onCloseTab](services.IEditorService.md#onclosetab)
- [onCloseToLeft](services.IEditorService.md#onclosetoleft)
- [onCloseToRight](services.IEditorService.md#onclosetoright)
- [onMoveTab](services.IEditorService.md#onmovetab)
- [onOpenTab](services.IEditorService.md#onopentab)
- [onSelectTab](services.IEditorService.md#onselecttab)
- [onUpdateTab](services.IEditorService.md#onupdatetab)
- [open](services.IEditorService.md#open)
- [setActive](services.IEditorService.md#setactive)
- [setDefaultActions](services.IEditorService.md#setdefaultactions)
- [setDefaultMenus](services.IEditorService.md#setdefaultmenus)
- [setEntry](services.IEditorService.md#setentry)
- [setGroupEditorValue](services.IEditorService.md#setgroupeditorvalue)
- [subscribe](services.IEditorService.md#subscribe)
- [unsubscribe](services.IEditorService.md#unsubscribe)
- [updateActions](services.IEditorService.md#updateactions)
- [updateCurrentGroup](services.IEditorService.md#updatecurrentgroup)
- [updateEditorOptions](services.IEditorService.md#updateeditoroptions)
- [updateGroup](services.IEditorService.md#updategroup)
- [updateTab](services.IEditorService.md#updatetab)

## Properties

### editorInstance

• `Readonly` **editorInstance**: `IStandaloneCodeEditor`

The instance of MonacoEditor

#### Defined in

[src/services/workbench/editorService.ts:191](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L191)

___

### state

• `Protected` `Abstract` **state**: [`IEditor`](model.IEditor.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### cloneGroup

▸ **cloneGroup**(`groupId?`): [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>

Clone a specific group, if the argument `groupId` is undefined,
there default clone the current group

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId?` | `UniqueId` |

#### Returns

[`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>

#### Defined in

[src/services/workbench/editorService.ts:87](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L87)

___

### closeAll

▸ **closeAll**(`groupId`): `void`

Close the specific group all opened tabs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:76](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L76)

___

### closeOther

▸ **closeOther**(`tab`, `groupId`): `void`

Close other opened tabs in Editor Group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tab` | [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\> | The id is required |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:59](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L59)

___

### closeTab

▸ **closeTab**(`tabId`, `groupId`): `void`

Close the specific Tab opened in Editor Group view

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tabId` | `UniqueId` | The tabId is required |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:53](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L53)

___

### closeToLeft

▸ **closeToLeft**(`tab`, `groupId`): `void`

Close the left opened Tabs in Editor Group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tab` | [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\> | The id is required, the start point of close to left |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:71](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L71)

___

### closeToRight

▸ **closeToRight**(`tab`, `groupId`): `void`

Close the right opened tabs in Editor Group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tab` | [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\> | The id is required, the start point of close to right |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:65](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L65)

___

### getDefaultActions

▸ **getDefaultActions**(): [`IEditorActionsProps`](model.IEditorActionsProps.md)[]

Get the default group actions

#### Returns

[`IEditorActionsProps`](model.IEditorActionsProps.md)[]

#### Defined in

[src/services/workbench/editorService.ts:178](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L178)

___

### getDefaultMenus

▸ **getDefaultMenus**(): `IMenuItemProps`[]

Get the default group menus

#### Returns

`IMenuItemProps`[]

#### Defined in

[src/services/workbench/editorService.ts:182](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L182)

___

### getGroupById

▸ **getGroupById**(`groupId`): `undefined` \| [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>

Get the specific group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `UniqueId` | The groupId is required |

#### Returns

`undefined` \| [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>

#### Defined in

[src/services/workbench/editorService.ts:81](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L81)

___

### getGroupIdByTab

▸ **getGroupIdByTab**(`tabId`): ``null`` \| `UniqueId`

Get the group's id which contains the tab

#### Parameters

| Name | Type |
| :------ | :------ |
| `tabId` | `UniqueId` |

#### Returns

``null`` \| `UniqueId`

#### Defined in

[src/services/workbench/editorService.ts:196](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L196)

___

### getTabById

▸ **getTabById**\<`T`\>(`tabId`, `groupId`): `undefined` \| [`IEditorTab`](model.IEditorTab.md)\<`T`\>

Get a tab from a specific group via the tab ID

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tabId` | `UniqueId` |
| `groupId` | `UniqueId` |

#### Returns

`undefined` \| [`IEditorTab`](model.IEditorTab.md)\<`T`\>

#### Defined in

[src/services/workbench/editorService.ts:26](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L26)

___

### isOpened

▸ **isOpened**(`tabId`): `boolean`

Judge the specific tabs whether opened in Editor view

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tabId` | `UniqueId` | The tabId is required |

#### Returns

`boolean`

#### Defined in

[src/services/workbench/editorService.ts:47](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L47)

___

### onActionsClick

▸ **onActionsClick**(`callback`): `void`

Listen to the Group Actions click event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`menuId`: `UniqueId`, `currentGroup`: [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:139](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L139)

___

### onCloseAll

▸ **onCloseAll**(`callback`): `any`

Listen to the all tabs close event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:114](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L114)

___

### onCloseOther

▸ **onCloseOther**(`callback`): `any`

Listen to the other tabs close event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabItem`: [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:124](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L124)

___

### onCloseTab

▸ **onCloseTab**(`callback`): `any`

Listen to the tab close event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabId`: `UniqueId`, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:119](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L119)

___

### onCloseToLeft

▸ **onCloseToLeft**(`callback`): `any`

Listen to the left tabs close event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabItem`: [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:129](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L129)

___

### onCloseToRight

▸ **onCloseToRight**(`callback`): `any`

Listen to the right tabs close event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabItem`: [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:134](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L134)

___

### onMoveTab

▸ **onMoveTab**(`callback`): `any`

Listen to the tab move event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`updateTabs`: [`IEditorTab`](model.IEditorTab.md)\<`any`\>[], `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:102](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L102)

___

### onOpenTab

▸ **onOpenTab**(`callback`): `void`

Listen to the tab opening event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tab`: [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:97](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L97)

___

### onSelectTab

▸ **onSelectTab**(`callback`): `any`

Listen to the tab select event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabId`: `UniqueId`, `groupId?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:109](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L109)

___

### onUpdateTab

▸ **onUpdateTab**(`callback`): `void`

Listen to the Editor tab changed event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tab`: [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:92](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L92)

___

### open

▸ **open**\<`T`\>(`tab`, `groupId?`): `void`

Open a new tab in a specific group

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tab` | [`IEditorTab`](model.IEditorTab.md)\<`T`\> | Tab data |
| `groupId?` | `UniqueId` | Group ID |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L20)

___

### setActive

▸ **setActive**(`groupId`, `tabId`): `any`

Set active group and tab

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `UniqueId` | Target group ID |
| `tabId` | `UniqueId` | Target tab ID |

#### Returns

`any`

#### Defined in

[src/services/workbench/editorService.ts:147](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L147)

___

### setDefaultActions

▸ **setDefaultActions**(`actions`): `void`

Set default actions when create a new group

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`IEditorActionsProps`](model.IEditorActionsProps.md)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:158](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L158)

___

### setDefaultMenus

▸ **setDefaultMenus**(`menus`): `void`

Set default menus when create a new group

#### Parameters

| Name | Type |
| :------ | :------ |
| `menus` | `IMenuItemProps`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:163](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L163)

___

### setEntry

▸ **setEntry**(`component`): `void`

Specify the Entry page of Workbench

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `Element` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:42](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L42)

___

### setGroupEditorValue

▸ **setGroupEditorValue**(`group`, `value`): `void`

Updates the editor content for a specific group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\> | The editorInstance is required |
| `value` | `string` |  |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:38](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L38)

___

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` \| `string`[] | Event name |
| `listener` | `Function` | Listener function |

#### Returns

`void`

#### Inherited from

Component.subscribe

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/event/eventBus.ts#L11)

___

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `any` | The event name |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

Component.unsubscribe

#### Defined in

[src/common/event/eventBus.ts:39](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/event/eventBus.ts#L39)

___

### updateActions

▸ **updateActions**(`actions`, `groupId?`): `void`

Update actions in specific group

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `IMenuItemProps`[] |
| `groupId?` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:169](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L169)

___

### updateCurrentGroup

▸ **updateCurrentGroup**(`currentValues`): `void`

Update the current group

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentValues` | `any` |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:174](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L174)

___

### updateEditorOptions

▸ **updateEditorOptions**(`options`): `void`

Update the editor options

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IEditorOptions`](../modules/model.md#ieditoroptions) |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:187](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L187)

___

### updateGroup

▸ **updateGroup**(`groupId`, `groupValues`): `void`

Update the specific group

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `UniqueId` |
| `groupValues` | `Omit`\<[`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>, ``"id"``\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/editorService.ts:153](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L153)

___

### updateTab

▸ **updateTab**(`tab`, `groupId?`): [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>

Update the specific tab, if the groupId provide, then update the tab of specific group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tab` | [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\> | The id is required |
| `groupId?` | `UniqueId` |  |

#### Returns

[`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>

#### Defined in

[src/services/workbench/editorService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/editorService.ts#L32)
