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

[src/model/extension.ts:74](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L74)

___

### contributes

• `Optional` **contributes**: [`IContribute`](model.IContribute.md)

The main file path of extension
Extension system will load the extension by this file

#### Defined in

[src/model/extension.ts:83](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L83)

___

### description

• `Optional` **description**: `string`

The description of extension

#### Defined in

[src/model/extension.ts:95](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L95)

___

### disable

• `Optional` **disable**: `boolean`

Whether disable current extension, the extension default status is enable

#### Defined in

[src/model/extension.ts:107](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L107)

___

### displayName

• `Optional` **displayName**: `string`

The display name of extension

#### Defined in

[src/model/extension.ts:66](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L66)

___

### extensionKind

• `Optional` **extensionKind**: [`IExtensionType`](../enums/model.IExtensionType.md)[]

The kind of extension

#### Defined in

[src/model/extension.ts:78](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L78)

___

### icon

• `Optional` **icon**: `string` \| `Element`

The Icon of extension

#### Defined in

[src/model/extension.ts:91](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L91)

___

### id

• **id**: `UniqueId`

The ID of extension required

#### Defined in

[src/model/extension.ts:58](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L58)

___

### main

• `Optional` **main**: `string`

The entry of extension

#### Defined in

[src/model/extension.ts:87](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L87)

___

### name

• **name**: `string`

The name of extension

#### Defined in

[src/model/extension.ts:62](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L62)

___

### path

• `Optional` **path**: `string`

The path of extension

#### Defined in

[src/model/extension.ts:103](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L103)

___

### publisher

• `Optional` **publisher**: `string`

The publisher of extension

#### Defined in

[src/model/extension.ts:99](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L99)

___

### version

• `Optional` **version**: `string`

The version of extension

#### Defined in

[src/model/extension.ts:70](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L70)

## Methods

### activate

▸ **activate**(`appContext`, `extensionContext`): `void`

Do something you want when the Extension is activating.
The ExtensionService will call the `activate` method after
added the Extension instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appContext` | [`AppContext`](../classes/model.AppContext.md) | The application context |
| `extensionContext` | [`ExtensionContext`](../classes/model.ExtensionContext.md) | The extension context |

#### Returns

`void`

#### Defined in

[src/model/extension.ts:115](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L115)

___

### dispose

▸ **dispose**(`appContext`): `void`

Do something when the Extension disposing.
For example, you can recover the UI state, or remove the Objects in memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appContext` | [`AppContext`](../classes/model.AppContext.md) | The application context |

#### Returns

`void`

#### Defined in

[src/model/extension.ts:121](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/extension.ts#L121)
