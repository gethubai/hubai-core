# Interface: IActivityBarService

[services](../modules/services.md).IActivityBarService

## Hierarchy

- `Component`\<[`IActivityBar`](model.IActivityBar.md)\>

  ↳ **`IActivityBarService`**

## Table of contents

### Properties

- [state](services.IActivityBarService.md#state)

### Methods

- [add](services.IActivityBarService.md#add)
- [addContextMenu](services.IActivityBarService.md#addcontextmenu)
- [onChange](services.IActivityBarService.md#onchange)
- [onClick](services.IActivityBarService.md#onclick)
- [remove](services.IActivityBarService.md#remove)
- [removeContextMenu](services.IActivityBarService.md#removecontextmenu)
- [reset](services.IActivityBarService.md#reset)
- [setActive](services.IActivityBarService.md#setactive)
- [subscribe](services.IActivityBarService.md#subscribe)
- [toggleBar](services.IActivityBarService.md#togglebar)
- [toggleContextMenuChecked](services.IActivityBarService.md#togglecontextmenuchecked)
- [unsubscribe](services.IActivityBarService.md#unsubscribe)

## Properties

### state

• `Protected` `Abstract` **state**: [`IActivityBar`](model.IActivityBar.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`data`, `isActive?`): `void`

Add IActivityBarItem data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IActivityBarItem`](model.IActivityBarItem.md) \| [`IActivityBarItem`](model.IActivityBarItem.md)[] | - |
| `isActive?` | `boolean` | If provide, Activity Bar will set data active automatically. Only works in one data |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:18](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L18)

___

### addContextMenu

▸ **addContextMenu**(`data`): `void`

Add new contextMenus for the activityBar

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IActivityMenuItemProps`](model.IActivityMenuItemProps.md) \| [`IActivityMenuItemProps`](model.IActivityMenuItemProps.md)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:41](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L41)

___

### onChange

▸ **onChange**(`callback`): `any`

Called when activity bar item which is not global is changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`prevSelectedKey?`: `UniqueId`, `nextSelectedKey?`: `UniqueId`) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/activityBarService.ts:55](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L55)

___

### onClick

▸ **onClick**(`callback`): `any`

Add click event listener

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`selectedKey`: `UniqueId`, `item`: [`IActivityBarItem`](model.IActivityBarItem.md)) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/activityBarService.ts:51](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L51)

___

### remove

▸ **remove**(`id`): `void`

Remove the specific activity bar by id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` \| `UniqueId`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:27](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L27)

___

### removeContextMenu

▸ **removeContextMenu**(`id`): `void`

Remove the specific contextMenu item by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `UniqueId` \| `UniqueId`[] | contextmenu id |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:46](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L46)

___

### reset

▸ **reset**(): `void`

Reset the activityBar state data,
if you want to whole customize the activityBar, you can reset it first,
and then using the activityBar.add() method to fill the data you need.

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:13](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L13)

___

### setActive

▸ **setActive**(`id?`): `void`

Set active bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:22](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L22)

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

[src/common/event/eventBus.ts:11](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/event/eventBus.ts#L11)

___

### toggleBar

▸ **toggleBar**(`id`): `void`

Toggle the specific activity bar between show or hide

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `UniqueId` | activity bar id |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L32)

___

### toggleContextMenuChecked

▸ **toggleContextMenuChecked**(`id`): `void`

Toggle the contextMenu between checked or unchecked

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `UniqueId` | contextmenu id |

#### Returns

`void`

#### Defined in

[src/services/workbench/activityBarService.ts:37](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/activityBarService.ts#L37)

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

[src/common/event/eventBus.ts:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/event/eventBus.ts#L39)
