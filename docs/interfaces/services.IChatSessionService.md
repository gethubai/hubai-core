# Interface: IChatSessionService

[services](../modules/services.md).IChatSessionService

## Table of contents

### Methods

- [addAuxiliaryBar](services.IChatSessionService.md#addauxiliarybar)
- [addPlusButtonAction](services.IChatSessionService.md#addplusbuttonaction)
- [changeMemberSettings](services.IChatSessionService.md#changemembersettings)
- [getBrains](services.IChatSessionService.md#getbrains)
- [getMembers](services.IChatSessionService.md#getmembers)
- [messages](services.IChatSessionService.md#messages)
- [onMessageReceived](services.IChatSessionService.md#onmessagereceived)
- [onMessageUpdated](services.IChatSessionService.md#onmessageupdated)
- [sendMessage](services.IChatSessionService.md#sendmessage)

## Methods

### addAuxiliaryBar

▸ **addAuxiliaryBar**(`auxiliaryBar`, `component`): `void`

Adds a new auxiliary bar to the chat window

#### Parameters

| Name | Type |
| :------ | :------ |
| `auxiliaryBar` | [`IAuxiliaryData`](../modules/model.md#iauxiliarydata) |
| `component` | `ReactNode` |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:167](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L167)

___

### addPlusButtonAction

▸ **addPlusButtonAction**(`action`): `void`

Adds a new action to the plus button menu

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `ISubMenuProps` |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:175](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L175)

___

### changeMemberSettings

▸ **changeMemberSettings**(`memberId`, `settings`): `void`

Change the settings of a chat member

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `memberId` | `string` | The id of the member |
| `settings` | [`ChatMemberSetting`](../modules/model.md#chatmembersetting) | The new settings (It will only override the settings specified in the object, settings that are not specified will remain the same) |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:182](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L182)

___

### getBrains

▸ **getBrains**(): [`IBrainClient`](services.IBrainClient.md)[]

Gets all brains that are in the chat.

#### Returns

[`IBrainClient`](services.IBrainClient.md)[]

#### Defined in

[src/services/chat.ts:147](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L147)

___

### getMembers

▸ **getMembers**(): [`ChatMember`](../modules/model.md#chatmember)[]

Gets all the chat members

#### Returns

[`ChatMember`](../modules/model.md#chatmember)[]

#### Defined in

[src/services/chat.ts:187](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L187)

___

### messages

▸ **messages**(): `Promise`\<[`ChatMessage`](../modules/model.md#chatmessage)[]\>

Gets all the chat messages

#### Returns

`Promise`\<[`ChatMessage`](../modules/model.md#chatmessage)[]\>

#### Defined in

[src/services/chat.ts:152](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L152)

___

### onMessageReceived

▸ **onMessageReceived**(`callback`): `void`

Subscribe to onMessageReceived event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`message`: [`ChatMessage`](../modules/model.md#chatmessage)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:157](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L157)

___

### onMessageUpdated

▸ **onMessageUpdated**(`callback`): `void`

Subscribe to onMessageUpdated event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`message`: [`ChatMessage`](../modules/model.md#chatmessage)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:162](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L162)

___

### sendMessage

▸ **sendMessage**(`options`): `Promise`\<`boolean`\>

Sends a message to the chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SendChatMessageOptions`](../modules/services.md#sendchatmessageoptions) | Message options |

#### Returns

`Promise`\<`boolean`\>

True if the message was sent successfully, false otherwise.

#### Defined in

[src/services/chat.ts:142](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L142)
