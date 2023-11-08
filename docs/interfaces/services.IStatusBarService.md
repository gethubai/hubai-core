# Interface: IStatusBarService

[services](../modules/services.md).IStatusBarService

## Hierarchy

- `Component`\<[`IStatusBar`](model.IStatusBar.md)\>

  ↳ **`IStatusBarService`**

## Table of contents

### Properties

- [state](services.IStatusBarService.md#state)

### Methods

- [add](services.IStatusBarService.md#add)
- [getStatusBarItem](services.IStatusBarService.md#getstatusbaritem)
- [onClick](services.IStatusBarService.md#onclick)
- [remove](services.IStatusBarService.md#remove)
- [reset](services.IStatusBarService.md#reset)
- [subscribe](services.IStatusBarService.md#subscribe)
- [unsubscribe](services.IStatusBarService.md#unsubscribe)
- [update](services.IStatusBarService.md#update)

## Properties

### state

• `Protected` `Abstract` **state**: [`IStatusBar`](model.IStatusBar.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`item`, `float`): `void`

Add a new StatusBar item into right or left status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\> |  |
| `float` | [`Float`](../enums/model.Float.md) | position the item to left or right |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/statusBarService.ts#L16)

___

### getStatusBarItem

▸ **getStatusBarItem**(`id`, `float?`): ``null`` \| [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\>

Get the specific StatusBar item

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |
| `float?` | [`Float`](../enums/model.Float.md) |

#### Returns

``null`` \| [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\>

#### Defined in

[src/services/workbench/statusBarService.ts:33](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/statusBarService.ts#L33)

___

### onClick

▸ **onClick**(`callback`): `any`

Listen to the StatusBar click event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`e`: `MouseEvent`, `item`: [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\>) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/statusBarService.ts:42](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/statusBarService.ts#L42)

___

### remove

▸ **remove**(`id`, `float?`): `void`

Remove the specific StatusBar item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `UniqueId` |  |
| `float?` | [`Float`](../enums/model.Float.md) | if provided, it'll remove the item in spcific position |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:22](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/statusBarService.ts#L22)

___

### reset

▸ **reset**(): `void`

Reset the contextMenu data and the StatusBar data , including right and left

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:37](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/statusBarService.ts#L37)

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

▸ **update**(`item`, `float?`): `void`

Update the specific StatusBar item, it'll update the item found in left

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\> | the id field is required |
| `float?` | [`Float`](../enums/model.Float.md) | if provided, it'll update the item in specific position |

#### Returns

`void`

#### Defined in

[src/services/workbench/statusBarService.ts:28](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/statusBarService.ts#L28)
