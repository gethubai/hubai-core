# Class: AuxiliaryModel

[model](../modules/model.md).AuxiliaryModel

## Implements

- [`IAuxiliaryBar`](../interfaces/model.IAuxiliaryBar.md)

## Table of contents

### Constructors

- [constructor](model.AuxiliaryModel.md#constructor)

### Properties

- [children](model.AuxiliaryModel.md#children)
- [current](model.AuxiliaryModel.md#current)
- [data](model.AuxiliaryModel.md#data)
- [mode](model.AuxiliaryModel.md#mode)

## Constructors

### constructor

• **new AuxiliaryModel**(`mode?`, `data?`, `current?`, `children?`): [`AuxiliaryModel`](model.AuxiliaryModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mode` | [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode) | `'default'` |
| `data` | [`IAuxiliaryData`](../modules/model.md#iauxiliarydata)[] | `[]` |
| `current?` | `UniqueId` | `undefined` |
| `children?` | `ReactNode` | `undefined` |

#### Returns

[`AuxiliaryModel`](model.AuxiliaryModel.md)

#### Defined in

[src/model/workbench/auxiliaryBar.ts:28](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/auxiliaryBar.ts#L28)

## Properties

### children

• **children**: `ReactNode`

#### Implementation of

[IAuxiliaryBar](../interfaces/model.IAuxiliaryBar.md).[children](../interfaces/model.IAuxiliaryBar.md#children)

#### Defined in

[src/model/workbench/auxiliaryBar.ts:22](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/auxiliaryBar.ts#L22)

___

### current

• `Optional` **current**: `UniqueId`

#### Implementation of

[IAuxiliaryBar](../interfaces/model.IAuxiliaryBar.md).[current](../interfaces/model.IAuxiliaryBar.md#current)

#### Defined in

[src/model/workbench/auxiliaryBar.ts:26](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/auxiliaryBar.ts#L26)

___

### data

• **data**: [`IAuxiliaryData`](../modules/model.md#iauxiliarydata)[] = `[]`

#### Implementation of

[IAuxiliaryBar](../interfaces/model.IAuxiliaryBar.md).[data](../interfaces/model.IAuxiliaryBar.md#data)

#### Defined in

[src/model/workbench/auxiliaryBar.ts:24](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/auxiliaryBar.ts#L24)

___

### mode

• **mode**: [`IAuxiliaryBarMode`](../modules/model.md#iauxiliarybarmode) = `'default'`

#### Implementation of

[IAuxiliaryBar](../interfaces/model.IAuxiliaryBar.md).[mode](../interfaces/model.IAuxiliaryBar.md#mode)

#### Defined in

[src/model/workbench/auxiliaryBar.ts:20](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/auxiliaryBar.ts#L20)
