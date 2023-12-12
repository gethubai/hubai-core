# Interface: IBrainClientManager

[services](../modules/services.md).IBrainClientManager

Interface for managing brain clients.

## Table of contents

### Methods

- [getAvailableBrains](services.IBrainClientManager.md#getavailablebrains)
- [getAvailableClients](services.IBrainClientManager.md#getavailableclients)
- [getClient](services.IBrainClientManager.md#getclient)
- [getDefaultForCapability](services.IBrainClientManager.md#getdefaultforcapability)

## Methods

### getAvailableBrains

▸ **getAvailableBrains**(): [`LocalBrain`](../modules/services.md#localbrain)[]

Retrieves all available local brains.

#### Returns

[`LocalBrain`](../modules/services.md#localbrain)[]

An array of LocalBrain objects.

#### Defined in

[src/services/brainClientService.ts:230](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L230)

___

### getAvailableClients

▸ **getAvailableClients**(): [`IBrainClient`](services.IBrainClient.md)[]

Retrieves all available brain clients.

#### Returns

[`IBrainClient`](services.IBrainClient.md)[]

An array of IBrainClient objects.

#### Defined in

[src/services/brainClientService.ts:224](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L224)

___

### getClient

▸ **getClient**(`brainId`): `undefined` \| [`IBrainClient`](services.IBrainClient.md)

Retrieves a specific brain client by ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `brainId` | `string` | The ID of the brain to retrieve. |

#### Returns

`undefined` \| [`IBrainClient`](services.IBrainClient.md)

The IBrainClient if found, otherwise undefined.

#### Defined in

[src/services/brainClientService.ts:218](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L218)

___

### getDefaultForCapability

▸ **getDefaultForCapability**(`capability`): `undefined` \| [`IBrainClient`](services.IBrainClient.md)

Retrieves the default client for a given capability.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `capability` | `string` | The capability to search for. |

#### Returns

`undefined` \| [`IBrainClient`](services.IBrainClient.md)

The default IBrainClient for the given capability, if one exists.

#### Defined in

[src/services/brainClientService.ts:237](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L237)
