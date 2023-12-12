# Interface: IChatAssistant

[services](../modules/services.md).IChatAssistant

## Table of contents

### Properties

- [createController](services.IChatAssistant.md#createcontroller)
- [displayName](services.IChatAssistant.md#displayname)
- [getDefaultSettings](services.IChatAssistant.md#getdefaultsettings)
- [icon](services.IChatAssistant.md#icon)
- [id](services.IChatAssistant.md#id)
- [settingsMap](services.IChatAssistant.md#settingsmap)

## Properties

### createController

• `Optional` **createController**: () => `undefined` \| [`IChatAssistantController`](services.IChatAssistantController.md)

#### Type declaration

▸ (): `undefined` \| [`IChatAssistantController`](services.IChatAssistantController.md)

Creates a controller for the chat assistant.

##### Returns

`undefined` \| [`IChatAssistantController`](services.IChatAssistantController.md)

An instance of IChatAssistantController or undefined.

#### Defined in

[src/services/chat.ts:56](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L56)

___

### displayName

• **displayName**: `string`

Display name of the chat assistant.

#### Defined in

[src/services/chat.ts:38](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L38)

___

### getDefaultSettings

• **getDefaultSettings**: () => `any`

#### Type declaration

▸ (): `any`

Retrieves the default settings for the chat assistant.

##### Returns

`any`

Default settings.

#### Defined in

[src/services/chat.ts:51](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L51)

___

### icon

• `Optional` **icon**: `string`

Optional Icon url for the chat assistant.

#### Defined in

[src/services/chat.ts:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L42)

___

### id

• **id**: `string`

Unique identifier for the chat assistant.

#### Defined in

[src/services/chat.ts:34](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L34)

___

### settingsMap

• `Optional` **settingsMap**: [`ISettingMap`](model.ISettingMap.md)[]

Settings map for the assistant.

#### Defined in

[src/services/chat.ts:46](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L46)
