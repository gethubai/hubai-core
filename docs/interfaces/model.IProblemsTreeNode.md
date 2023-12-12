# Interface: IProblemsTreeNode\<T\>

[model](../modules/model.md).IProblemsTreeNode

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `ITreeNodeItemProps`

  ↳ **`IProblemsTreeNode`**

## Table of contents

### Properties

- [children](model.IProblemsTreeNode.md#children)
- [data](model.IProblemsTreeNode.md#data)
- [disabled](model.IProblemsTreeNode.md#disabled)
- [icon](model.IProblemsTreeNode.md#icon)
- [id](model.IProblemsTreeNode.md#id)
- [isEditable](model.IProblemsTreeNode.md#iseditable)
- [isLeaf](model.IProblemsTreeNode.md#isleaf)
- [name](model.IProblemsTreeNode.md#name)
- [value](model.IProblemsTreeNode.md#value)

## Properties

### children

• `Optional` **children**: [`IProblemsTreeNode`](model.IProblemsTreeNode.md)\<`any`\>[]

#### Overrides

ITreeNodeItemProps.children

#### Defined in

[src/model/problems.tsx:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L31)

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

• `Optional` **value**: [`IRelatedInformation`](model.IRelatedInformation.md)

#### Defined in

[src/model/problems.tsx:30](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/problems.tsx#L30)
