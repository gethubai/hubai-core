# Interface: IProblemsItem\<T\>

[model](../modules/model.md).IProblemsItem

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `ITreeNodeItemProps`

  ↳ **`IProblemsItem`**

## Table of contents

### Properties

- [children](model.IProblemsItem.md#children)
- [data](model.IProblemsItem.md#data)
- [disabled](model.IProblemsItem.md#disabled)
- [icon](model.IProblemsItem.md#icon)
- [id](model.IProblemsItem.md#id)
- [isEditable](model.IProblemsItem.md#iseditable)
- [isLeaf](model.IProblemsItem.md#isleaf)
- [name](model.IProblemsItem.md#name)
- [value](model.IProblemsItem.md#value)

## Properties

### children

• **children**: [`IProblemsItem`](model.IProblemsItem.md)\<`any`\>[]

#### Overrides

ITreeNodeItemProps.children

#### Defined in

[src/model/problems.tsx:26](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L26)

___

### data

• `Optional` **data**: `any`

Store the custom data

#### Inherited from

ITreeNodeItemProps.data

#### Defined in

[src/components/tree/index.tsx:55](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L55)

___

### disabled

• `Optional` **disabled**: `boolean`

The status of disabled

#### Inherited from

ITreeNodeItemProps.disabled

#### Defined in

[src/components/tree/index.tsx:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L39)

___

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Inherited from

ITreeNodeItemProps.icon

#### Defined in

[src/components/tree/index.tsx:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L35)

___

### id

• **id**: `UniqueId`

The unique id in tree node

**`Aware`**

Please be aware of that id should be global unique

#### Inherited from

ITreeNodeItemProps.id

#### Defined in

[src/components/tree/index.tsx:27](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L27)

___

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Inherited from

ITreeNodeItemProps.isEditable

#### Defined in

[src/components/tree/index.tsx:47](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L47)

___

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Inherited from

ITreeNodeItemProps.isLeaf

#### Defined in

[src/components/tree/index.tsx:43](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L43)

___

### name

• `Optional` **name**: `string`

The name of this tree node

#### Inherited from

ITreeNodeItemProps.name

#### Defined in

[src/components/tree/index.tsx:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L31)

___

### value

• **value**: [`IRelatedInformation`](model.IRelatedInformation.md)

#### Defined in

[src/model/problems.tsx:25](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L25)
