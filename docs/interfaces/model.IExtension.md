# Interface: IExtension

[model](../modules/model.md).IExtension

The interface of extension,
there need every extension to implement this interface

## Table of contents

### Properties

- [categories](model.IExtension.md#categories)
- [contributes](model.IExtension.md#contributes)
- [description](model.IExtension.md#description)
- [disable](model.IExtension.md#disable)
- [displayName](model.IExtension.md#displayname)
- [extensionKind](model.IExtension.md#extensionkind)
- [icon](model.IExtension.md#icon)
- [id](model.IExtension.md#id)
- [main](model.IExtension.md#main)
- [name](model.IExtension.md#name)
- [path](model.IExtension.md#path)
- [publisher](model.IExtension.md#publisher)
- [version](model.IExtension.md#version)

### Methods

- [activate](model.IExtension.md#activate)
- [dispose](model.IExtension.md#dispose)

## Properties

### categories

• `Optional` **categories**: [`IExtensionType`](../enums/model.IExtensionType.md)[]

The categories of extension

#### Defined in

[src/model/extension.ts:65](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L65)

___

### contributes

• `Optional` **contributes**: [`IContribute`](model.IContribute.md)

The main file path of extension
Extension system will load the extension by this file

#### Defined in

[src/model/extension.ts:74](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L74)

___

### description

• `Optional` **description**: `string`

The description of extension

#### Defined in

[src/model/extension.ts:86](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L86)

___

### disable

• `Optional` **disable**: `boolean`

Whether disable current extension, the extension default status is enable

#### Defined in

[src/model/extension.ts:98](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L98)

___

### displayName

• `Optional` **displayName**: `string`

The display name of extension

#### Defined in

[src/model/extension.ts:57](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L57)

___

### extensionKind

• `Optional` **extensionKind**: [`IExtensionType`](../enums/model.IExtensionType.md)[]

The kind of extension

#### Defined in

[src/model/extension.ts:69](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L69)

___

### icon

• `Optional` **icon**: `string` \| `Element`

The Icon of extension

#### Defined in

[src/model/extension.ts:82](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L82)

___

### id

• **id**: `UniqueId`

The ID of extension required

#### Defined in

[src/model/extension.ts:49](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L49)

___

### main

• `Optional` **main**: `string`

The entry of extension

#### Defined in

[src/model/extension.ts:78](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L78)

___

### name

• **name**: `string`

The name of extension

#### Defined in

[src/model/extension.ts:53](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L53)

___

### path

• `Optional` **path**: `string`

The path of extension

#### Defined in

[src/model/extension.ts:94](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L94)

___

### publisher

• `Optional` **publisher**: `string`

The publisher of extension

#### Defined in

[src/model/extension.ts:90](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L90)

___

### version

• `Optional` **version**: `string`

The version of extension

#### Defined in

[src/model/extension.ts:61](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L61)

## Methods

### activate

▸ **activate**(`extensionCtx`): `void`

Do something you want when the Extension is activating.
The ExtensionService will call the `activate` method after
added the Extension instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionCtx` | [`AppContext`](../classes/model.AppContext.md) | The Context of Extension instance |

#### Returns

`void`

#### Defined in

[src/model/extension.ts:105](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L105)

___

### dispose

▸ **dispose**(`extensionCtx`): `void`

Do something when the Extension disposing.
For example, you can recover the UI state, or remove the Objects in memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionCtx` | [`AppContext`](../classes/model.AppContext.md) | The Context of Extension instance |

#### Returns

`void`

#### Defined in

[src/model/extension.ts:111](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/extension.ts#L111)
