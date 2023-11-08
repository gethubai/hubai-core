# Class: TreeNodeModel

[model](../modules/model.md).TreeNodeModel

## Implements

- [`IFolderTreeNodeProps`](../interfaces/model.IFolderTreeNodeProps.md)

## Table of contents

### Constructors

- [constructor](model.TreeNodeModel.md#constructor)

### Properties

- [children](model.TreeNodeModel.md#children)
- [content](model.TreeNodeModel.md#content)
- [data](model.TreeNodeModel.md#data)
- [fileType](model.TreeNodeModel.md#filetype)
- [icon](model.TreeNodeModel.md#icon)
- [id](model.TreeNodeModel.md#id)
- [isEditable](model.TreeNodeModel.md#iseditable)
- [isLeaf](model.TreeNodeModel.md#isleaf)
- [location](model.TreeNodeModel.md#location)
- [name](model.TreeNodeModel.md#name)

## Constructors

### constructor

• **new TreeNodeModel**(`props`): [`TreeNodeModel`](model.TreeNodeModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IFolderTreeNodeProps`](../interfaces/model.IFolderTreeNodeProps.md) |

#### Returns

[`TreeNodeModel`](model.TreeNodeModel.md)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:75](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L75)

## Properties

### children

• `Optional` **children**: [`IFolderTreeNodeProps`](../interfaces/model.IFolderTreeNodeProps.md)[]

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[children](../interfaces/model.IFolderTreeNodeProps.md#children)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:65](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L65)

___

### content

• `Optional` **content**: `string`

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[content](../interfaces/model.IFolderTreeNodeProps.md#content)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:71](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L71)

___

### data

• `Optional` **data**: `any`

Store the custom data

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[data](../interfaces/model.IFolderTreeNodeProps.md#data)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:73](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L73)

___

### fileType

• **fileType**: ``"File"`` \| ``"Folder"`` \| ``"RootFolder"`` = `FileTypes.File`

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[fileType](../interfaces/model.IFolderTreeNodeProps.md#filetype)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:63](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L63)

___

### icon

• `Optional` **icon**: `string` \| `Element`

The icon of this tree node, which is rendered in front of the name

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[icon](../interfaces/model.IFolderTreeNodeProps.md#icon)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:67](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L67)

___

### id

• **id**: `UniqueId`

The unique id in tree node

**`Aware`**

Please be aware of that id should be global unique

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[id](../interfaces/model.IFolderTreeNodeProps.md#id)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:55](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L55)

___

### isEditable

• `Optional` **isEditable**: `boolean`

The status of editable, mark whether the node is being edited

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[isEditable](../interfaces/model.IFolderTreeNodeProps.md#iseditable)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:69](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L69)

___

### isLeaf

• `Optional` **isLeaf**: `boolean`

The type of this tree node.

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[isLeaf](../interfaces/model.IFolderTreeNodeProps.md#isleaf)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:61](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L61)

___

### location

• `Optional` **location**: `string`

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[location](../interfaces/model.IFolderTreeNodeProps.md#location)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:59](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L59)

___

### name

• `Optional` **name**: `string`

The name of this tree node

#### Implementation of

[IFolderTreeNodeProps](../interfaces/model.IFolderTreeNodeProps.md).[name](../interfaces/model.IFolderTreeNodeProps.md#name)

#### Defined in

[src/model/workbench/explorer/folderTree.tsx:57](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/folderTree.tsx#L57)
