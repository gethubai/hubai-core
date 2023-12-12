# Interface: IFolderTreeNodeProps

[model](../modules/model.md).IFolderTreeNodeProps

## Hierarchy

- `ITreeNodeItemProps`\<`any`\>

  ↳ **`IFolderTreeNodeProps`**

## Implemented by

- [`TreeNodeModel`](../classes/model.TreeNodeModel.md)

## Table of contents

### Properties

- [children](model.IFolderTreeNodeProps.md#children)
- [content](model.IFolderTreeNodeProps.md#content)
- [data](model.IFolderTreeNodeProps.md#data)
- [disabled](model.IFolderTreeNodeProps.md#disabled)
- [fileType](model.IFolderTreeNodeProps.md#filetype)
- [icon](model.IFolderTreeNodeProps.md#icon)
- [id](model.IFolderTreeNodeProps.md#id)
- [isEditable](model.IFolderTreeNodeProps.md#iseditable)
- [isLeaf](model.IFolderTreeNodeProps.md#isleaf)
- [location](model.IFolderTreeNodeProps.md#location)
- [name](model.IFolderTreeNodeProps.md#name)

## Properties

### children

• `Optional` **children**: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)[]

#### Overrides

ITreeNodeItemProps.children

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:51](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/folderTree.tsx#L51)

___

### content

• `Optional` **content**: `string`

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:49](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/folderTree.tsx#L49)

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

### fileType

• `Optional` **fileType**: ``"File"`` \| ``"Folder"`` \| ``"RootFolder"``

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:50](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/folderTree.tsx#L50)

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

### location

• `Optional` **location**: `string`

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/folderTree.tsx#L48)

___

### name

• `Optional` **name**: `string`

The name of this tree node

#### Inherited from

ITreeNodeItemProps.name

#### Defined in

[src/components/tree/index.tsx:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tree/index.tsx#L31)
