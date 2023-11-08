# Interface: IAuxiliaryBarService

[services](../modules/services.md).IAuxiliaryBarService

## Hierarchy

- `Component`\<[`IAuxiliaryBar`](model.IAuxiliaryBar.md)\>

  ↳ **`IAuxiliaryBarService`**

## Table of contents

### Properties

- [onTabClick](services.IAuxiliaryBarService.md#ontabclick)
- [reset](services.IAuxiliaryBarService.md#reset)
- [setChildren](services.IAuxiliaryBarService.md#setchildren)
- [setMode](services.IAuxiliaryBarService.md#setmode)
- [state](services.IAuxiliaryBarService.md#state)

### Methods

- [addAuxiliaryBar](services.IAuxiliaryBarService.md#addauxiliarybar)
- [getCurrentTab](services.IAuxiliaryBarService.md#getcurrenttab)
- [setActive](services.IAuxiliaryBarService.md#setactive)
- [subscribe](services.IAuxiliaryBarService.md#subscribe)
- [unsubscribe](services.IAuxiliaryBarService.md#unsubscribe)

## Properties

### onTabClick

• **onTabClick**: (`callback`: (`key`: `UniqueId`) => `void`) => `void`

#### Type declaration

▸ (`callback`): `void`

Called when auxiliary tab title clicked

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`key`: `UniqueId`) => `void` |

##### Returns

`void`

#### Defined in

[src/services/workbench/auxiliaryBarService.ts:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/auxiliaryBarService.ts#L36)

___

### reset

• **reset**: () => `void`

#### Type declaration

▸ (): `void`

Reset all states

##### Returns

`void`

#### Defined in

[src/services/workbench/auxiliaryBarService.ts:40](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/auxiliaryBarService.ts#L40)

___

### setChildren

• **setChildren**: (`children`: `ReactNode`) => `void`

#### Type declaration

▸ (`children`): `void`

Set the children of auxiliary bar

##### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `ReactNode` |

##### Returns

`void`

#### Defined in

[src/services/workbench/auxiliaryBarService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/auxiliaryBarService.ts#L32)

___

### setMode

• **setMode**: (`mode`: [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode) \| (`preState`: [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode)) => [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode)) => [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode)

#### Type declaration

▸ (`mode`): [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode)

Set the mode of auxiliary bar

##### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode) \| (`preState`: [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode)) => [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode) |

##### Returns

[`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode)

#### Defined in

[src/services/workbench/auxiliaryBarService.ts:24](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/auxiliaryBarService.ts#L24)

___

### state

• `Protected` `Abstract` **state**: [`IAuxiliaryBar`](model.IAuxiliaryBar.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### addAuxiliaryBar

▸ **addAuxiliaryBar**(`tabs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tabs` | [`IAuxiliaryData`](../modules/model.md#iauxiliarydata) \| [`IAuxiliaryData`](../modules/model.md#iauxiliarydata)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/auxiliaryBarService.ts:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/auxiliaryBarService.ts#L16)

___

### getCurrentTab

▸ **getCurrentTab**(): `undefined` \| [`IAuxiliaryData`](../modules/model.md#iauxiliarydata)

Get the current tab

#### Returns

`undefined` \| [`IAuxiliaryData`](../modules/model.md#iauxiliarydata)

#### Defined in

[src/services/workbench/auxiliaryBarService.ts:15](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/auxiliaryBarService.ts#L15)

___

### setActive

▸ **setActive**(`current`): `void`

Set the active one on data

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `undefined` \| `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/auxiliaryBarService.ts:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/auxiliaryBarService.ts#L20)

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
