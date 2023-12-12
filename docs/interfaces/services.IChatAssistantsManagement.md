# Interface: IChatAssistantsManagement

[services](../modules/services.md).IChatAssistantsManagement

## Table of contents

### Methods

- [addAssistant](services.IChatAssistantsManagement.md#addassistant)
- [getAssistants](services.IChatAssistantsManagement.md#getassistants)
- [removeAssistant](services.IChatAssistantsManagement.md#removeassistant)

## Methods

### addAssistant

▸ **addAssistant**(`assistant`): `void`

Adds a new assistant to the chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assistant` | [`IChatAssistant`](services.IChatAssistant.md) | The assistant to be added. |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:22](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L22)

___

### getAssistants

▸ **getAssistants**(): [`IChatAssistant`](services.IChatAssistant.md)[]

Retrieves a list of current chat assistants.

#### Returns

[`IChatAssistant`](services.IChatAssistant.md)[]

Array of IChatAssistant.

#### Defined in

[src/services/chat.ts:17](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L17)

___

### removeAssistant

▸ **removeAssistant**(`assistantId`): `void`

Removes an assistant from the chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assistantId` | `string` | The identifier of the assistant to be removed. |

#### Returns

`void`

#### Defined in

[src/services/chat.ts:27](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L27)
