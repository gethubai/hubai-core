# Class: ProblemsModel\<T\>

[model](../modules/model.md).ProblemsModel

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`IProblems`](../interfaces/model.IProblems.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](model.ProblemsModel.md#constructor)

### Properties

- [data](model.ProblemsModel.md#data)
- [id](model.ProblemsModel.md#id)
- [name](model.ProblemsModel.md#name)
- [show](model.ProblemsModel.md#show)

## Constructors

### constructor

• **new ProblemsModel**\<`T`\>(`id?`, `name?`, `data?`, `show?`): [`ProblemsModel`](model.ProblemsModel.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `UniqueId` | `''` |
| `name` | `string` | `''` |
| `data` | [`IProblemsItem`](../interfaces/model.IProblemsItem.md)\<`T`\>[] | `[]` |
| `show` | `boolean` | `false` |

#### Returns

[`ProblemsModel`](model.ProblemsModel.md)\<`T`\>

#### Defined in

[src/model/problems.tsx:51](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L51)

## Properties

### data

• **data**: [`IProblemsItem`](../interfaces/model.IProblemsItem.md)\<`T`\>[]

#### Implementation of

[IProblems](../interfaces/model.IProblems.md).[data](../interfaces/model.IProblems.md#data)

#### Defined in

[src/model/problems.tsx:47](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L47)

___

### id

• **id**: `UniqueId`

#### Implementation of

[IProblems](../interfaces/model.IProblems.md).[id](../interfaces/model.IProblems.md#id)

#### Defined in

[src/model/problems.tsx:43](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L43)

___

### name

• **name**: `string`

#### Implementation of

[IProblems](../interfaces/model.IProblems.md).[name](../interfaces/model.IProblems.md#name)

#### Defined in

[src/model/problems.tsx:45](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L45)

___

### show

• **show**: `boolean`

#### Implementation of

[IProblems](../interfaces/model.IProblems.md).[show](../interfaces/model.IProblems.md#show)

#### Defined in

[src/model/problems.tsx:49](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L49)
