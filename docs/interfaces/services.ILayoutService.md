# Interface: ILayoutService

[services](../modules/services.md).ILayoutService

## Hierarchy

- `Component`\<`ILayout`\>

  ↳ **`ILayoutService`**

## Table of contents

### Properties

- [container](services.ILayoutService.md#container)
- [state](services.ILayoutService.md#state)

### Methods

- [getMenuBarMode](services.ILayoutService.md#getmenubarmode)
- [onWorkbenchDidMount](services.ILayoutService.md#onworkbenchdidmount)
- [reset](services.ILayoutService.md#reset)
- [setAuxiliaryBar](services.ILayoutService.md#setauxiliarybar)
- [setEditorGroupDirection](services.ILayoutService.md#seteditorgroupdirection)
- [setGroupSplitSize](services.ILayoutService.md#setgroupsplitsize)
- [setHorizontalPaneSize](services.ILayoutService.md#sethorizontalpanesize)
- [setMenuBarMode](services.ILayoutService.md#setmenubarmode)
- [setPaneSize](services.ILayoutService.md#setpanesize)
- [setSideBarPosition](services.ILayoutService.md#setsidebarposition)
- [subscribe](services.ILayoutService.md#subscribe)
- [toggleActivityBarVisibility](services.ILayoutService.md#toggleactivitybarvisibility)
- [toggleMenuBarVisibility](services.ILayoutService.md#togglemenubarvisibility)
- [togglePanelMaximized](services.ILayoutService.md#togglepanelmaximized)
- [togglePanelVisibility](services.ILayoutService.md#togglepanelvisibility)
- [toggleSidebarVisibility](services.ILayoutService.md#togglesidebarvisibility)
- [toggleStatusBarVisibility](services.ILayoutService.md#togglestatusbarvisibility)
- [unsubscribe](services.ILayoutService.md#unsubscribe)

## Properties

### container

• `Readonly` **container**: ``null`` \| `HTMLElement`

Get the container of the molecule

#### Defined in

[src/services/workbench/layoutService.ts:12](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L12)

___

### state

• `Protected` `Abstract` **state**: `ILayout`

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### getMenuBarMode

▸ **getMenuBarMode**(): ``"vertical"`` \| ``"horizontal"``

Get the mode of the MenuBar

#### Returns

``"vertical"`` \| ``"horizontal"``

#### Defined in

[src/services/workbench/layoutService.ts:67](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L67)

___

### onWorkbenchDidMount

▸ **onWorkbenchDidMount**(`callback`): `void`

Listen to the workbench did mount event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `Function` | callback function |

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:88](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L88)

___

### reset

▸ **reset**(): `void`

Reset all layout data as default value

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:83](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L83)

___

### setAuxiliaryBar

▸ **setAuxiliaryBar**(`hidden`): `boolean`

Set the visibility of auxiliary bar

Returns the next state of hidden

#### Parameters

| Name | Type |
| :------ | :------ |
| `hidden` | `boolean` \| (`preState`: `boolean`) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:79](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L79)

___

### setEditorGroupDirection

▸ **setEditorGroupDirection**(`direction`): `void`

Set the direction of editor group,default is `vertical`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | `MenuBarMode` \| (`prev`: `MenuBarMode`) => `MenuBarMode` |

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:71](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L71)

___

### setGroupSplitSize

▸ **setGroupSplitSize**(`groupSplitPos`): `void`

Set the sizes between editor groups

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupSplitPos` | (`string` \| `number`)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:57](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L57)

___

### setHorizontalPaneSize

▸ **setHorizontalPaneSize**(`horizontalSplitPanePos`): `void`

Set the sizes between the editor and the panel

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontalSplitPanePos` | (`string` \| `number`)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:46](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L46)

___

### setMenuBarMode

▸ **setMenuBarMode**(`mode`): `void`

Set the mode of the MenuBar, default is `vertical`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | ``"vertical"`` \| ``"horizontal"`` |

#### Returns

`void`

**`Unachieved`**

#### Defined in

[src/services/workbench/layoutService.ts:63](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L63)

___

### setPaneSize

▸ **setPaneSize**(`splitPanePos`): `void`

Set the sizes between the side bar and main content area

#### Parameters

| Name | Type |
| :------ | :------ |
| `splitPanePos` | (`string` \| `number`)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/layoutService.ts:41](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L41)

___

### setSideBarPosition

▸ **setSideBarPosition**(`position`): `void`

Set the position of the side bar, default is in `left`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | ``"right"`` \| ``"left"`` |

#### Returns

`void`

**`Unachieved`**

#### Defined in

[src/services/workbench/layoutService.ts:52](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L52)

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

### toggleActivityBarVisibility

▸ **toggleActivityBarVisibility**(): `boolean`

Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:28](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L28)

___

### toggleMenuBarVisibility

▸ **toggleMenuBarVisibility**(): `boolean`

Toggle the visibility of menu bar, returns the status of menu bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L16)

___

### togglePanelMaximized

▸ **togglePanelMaximized**(): `boolean`

Toggle the maximized status of the panel, returns the status of maximized panel

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L36)

___

### togglePanelVisibility

▸ **togglePanelVisibility**(): `boolean`

Toggle the visibility of the panel, returns the status of panel's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:24](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L24)

___

### toggleSidebarVisibility

▸ **toggleSidebarVisibility**(): `boolean`

Toggle the visibility of side bar, returns the status of side bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L20)

___

### toggleStatusBarVisibility

▸ **toggleStatusBarVisibility**(): `boolean`

Toggle the visibility of the status bar, returns the status of status bar's `hidden`

#### Returns

`boolean`

#### Defined in

[src/services/workbench/layoutService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/layoutService.ts#L32)

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
