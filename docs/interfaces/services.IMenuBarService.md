# Interface: IMenuBarService

[services](../modules/services.md).IMenuBarService

## Hierarchy

- `Component`\<[`IMenuBar`](model.IMenuBar.md)\>

  ↳ **`IMenuBarService`**

## Table of contents

### Properties

- [state](services.IMenuBarService.md#state)

### Methods

- [append](services.IMenuBarService.md#append)
- [getMenuById](services.IMenuBarService.md#getmenubyid)
- [onSelect](services.IMenuBarService.md#onselect)
- [remove](services.IMenuBarService.md#remove)
- [reset](services.IMenuBarService.md#reset)
- [setMenus](services.IMenuBarService.md#setmenus)
- [subscribe](services.IMenuBarService.md#subscribe)
- [unsubscribe](services.IMenuBarService.md#unsubscribe)
- [update](services.IMenuBarService.md#update)

## Properties

### state

• `Protected` `Abstract` **state**: [`IMenuBar`](model.IMenuBar.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### append

▸ **append**(`menuItem`, `parentId`): `void`

Append a new menu into the specific menu found by `parentId`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `menuItem` | [`IMenuBarItem`](model.IMenuBarItem.md) | the new menu |
| `parentId` | `UniqueId` |  |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/menuBarService.ts#L16)

___

### getMenuById

▸ **getMenuById**(`menuId`): `undefined` \| [`IMenuBarItem`](model.IMenuBarItem.md)

Get the specific menu item

#### Parameters

| Name | Type |
| :------ | :------ |
| `menuId` | `UniqueId` |

#### Returns

`undefined` \| [`IMenuBarItem`](model.IMenuBarItem.md)

#### Defined in

[src/services/workbench/menuBarService.ts:26](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/menuBarService.ts#L26)

___

### onSelect

▸ **onSelect**(`callback`): `void`

listen to the onSelect event in menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`menuId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:41](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/menuBarService.ts#L41)

___

### remove

▸ **remove**(`menuId`): `void`

Remove the specific menu item

#### Parameters

| Name | Type |
| :------ | :------ |
| `menuId` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:21](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/menuBarService.ts#L21)

___

### reset

▸ **reset**(): `void`

Reset menu bar data;

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/menuBarService.ts#L36)

___

### setMenus

▸ **setMenus**(`data`): `void`

Set the menus data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMenuBarItem`](model.IMenuBarItem.md)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:10](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/menuBarService.ts#L10)

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

### update

▸ **update**(`menuId`, `menuItem`): `void`

Update the specific menu item data

#### Parameters

| Name | Type |
| :------ | :------ |
| `menuId` | `UniqueId` |
| `menuItem` | [`IMenuBarItem`](model.IMenuBarItem.md) |

#### Returns

`void`

#### Defined in

[src/services/workbench/menuBarService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/menuBarService.ts#L32)
