# Interface: IProblems\<T\>

[model](../modules/model.md).IProblems

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Implemented by

- [`ProblemsModel`](../classes/model.ProblemsModel.md)

## Table of contents

### Properties

- [data](model.IProblems.md#data)
- [id](model.IProblems.md#id)
- [name](model.IProblems.md#name)
- [onSelect](model.IProblems.md#onselect)
- [show](model.IProblems.md#show)

## Properties

### data

• **data**: [`IProblemsItem`](model.IProblemsItem.md)\<`T`\>[]

#### Defined in

[src/model/problems.tsx:37](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L37)

___

### id

• **id**: `UniqueId`

#### Defined in

[src/model/problems.tsx:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L35)

___

### name

• **name**: `string`

#### Defined in

[src/model/problems.tsx:36](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L36)

___

### onSelect

• `Optional` **onSelect**: (`node`: [`IProblemsTreeNode`](model.IProblemsTreeNode.md)\<`any`\>) => `void`

#### Type declaration

▸ (`node`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`IProblemsTreeNode`](model.IProblemsTreeNode.md)\<`any`\> |

##### Returns

`void`

#### Defined in

[src/model/problems.tsx:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L39)

___

### show

• `Optional` **show**: `boolean`

#### Defined in

[src/model/problems.tsx:38](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L38)
