# Interface: IProblemsService

[services](../modules/services.md).IProblemsService

## Hierarchy

- `Component`\<[`IProblems`](model.IProblems.md)\>

  ↳ **`IProblemsService`**

## Table of contents

### Properties

- [state](services.IProblemsService.md#state)

### Methods

- [add](services.IProblemsService.md#add)
- [onSelect](services.IProblemsService.md#onselect)
- [remove](services.IProblemsService.md#remove)
- [reset](services.IProblemsService.md#reset)
- [subscribe](services.IProblemsService.md#subscribe)
- [toggleProblems](services.IProblemsService.md#toggleproblems)
- [unsubscribe](services.IProblemsService.md#unsubscribe)
- [update](services.IProblemsService.md#update)

## Properties

### state

• `Protected` `Abstract` **state**: [`IProblems`](model.IProblems.md)\<`any`\>

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`data`): `void`

Add single or multiple items data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IProblemsItem`](model.IProblemsItem.md)\<`any`\> \| [`IProblemsItem`](model.IProblemsItem.md)\<`any`\>[] |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/problemsService.ts#L16)

___

### onSelect

▸ **onSelect**(`callback`): `void`

Listen to select a problem tree node

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: [`IProblemsTreeNode`](model.IProblemsTreeNode.md)\<`any`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:39](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/problemsService.ts#L39)

___

### remove

▸ **remove**(`id`): `void`

Remove the specific problem items

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `UniqueId` \| `UniqueId`[] | single or multiple ids |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:21](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/problemsService.ts#L21)

___

### reset

▸ **reset**(): `void`

Reset the ProblemsService state data

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:25](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/problemsService.ts#L25)

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

### toggleProblems

▸ **toggleProblems**(): `void`

Toggle the Problems view between display or hidden

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:34](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/problemsService.ts#L34)

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

▸ **update**\<`T`\>(`data`): `void`

Update the specific data

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IProblemsItem`](model.IProblemsItem.md)\<`T`\> \| [`IProblemsItem`](model.IProblemsItem.md)\<`T`\>[] | single or multiple problems |

#### Returns

`void`

#### Defined in

[src/services/problemsService.ts:30](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/problemsService.ts#L30)
