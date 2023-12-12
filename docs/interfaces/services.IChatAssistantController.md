# Interface: IChatAssistantController

[services](../modules/services.md).IChatAssistantController

## Table of contents

### Methods

- [dispose](services.IChatAssistantController.md#dispose)
- [init](services.IChatAssistantController.md#init)
- [onChatUpdated](services.IChatAssistantController.md#onchatupdated)
- [onSettingsUpdated](services.IChatAssistantController.md#onsettingsupdated)
- [validateSettings](services.IChatAssistantController.md#validatesettings)

## Methods

### dispose

▸ **dispose**(): `void`

Disposes of the controller.

#### Returns

`void`

#### Defined in

[src/services/chat.ts:110](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L110)

___

### init

▸ **init**(`context`): `void`

Initializes the chat assistant controller with the provided context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`ChatAssistantContext`](../modules/services.md#chatassistantcontext) | The context for the chat assistant. |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:90](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L90)

___

### onChatUpdated

▸ **onChatUpdated**(`chat`): `void`

Called when the chat is updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat` | [`ChatInfo`](../modules/model.md#chatinfo) | Updated chat info. |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:100](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L100)

___

### onSettingsUpdated

▸ **onSettingsUpdated**(`settings`): `void`

Called when chat settings are updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `any` | The updated settings. |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:95](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L95)

___

### validateSettings

▸ **validateSettings**(`settings`): `undefined` \| `string`

Validates the settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `any` | The settings to validate. |

#### Returns

`undefined` \| `string`

A string if there's an error, or undefined if valid.

#### Defined in

[src/services/chat.ts:106](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L106)
