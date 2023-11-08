# Interface: IBrainClientManager

[services](../modules/services.md).IBrainClientManager

## Table of contents

### Methods

- [getAvailableBrains](services.IBrainClientManager.md#getavailablebrains)
- [getAvailableClients](services.IBrainClientManager.md#getavailableclients)
- [getClient](services.IBrainClientManager.md#getclient)
- [getDefaultForCapability](services.IBrainClientManager.md#getdefaultforcapability)

## Methods

### getAvailableBrains

▸ **getAvailableBrains**(): [`LocalBrain`](../modules/services.md#localbrain)[]

#### Returns

[`LocalBrain`](../modules/services.md#localbrain)[]

#### Defined in

[src/services/brainClientService.ts:91](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L91)

___

### getAvailableClients

▸ **getAvailableClients**(): [`IBrainClient`](services.IBrainClient.md)[]

#### Returns

[`IBrainClient`](services.IBrainClient.md)[]

#### Defined in

[src/services/brainClientService.ts:90](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L90)

___

### getClient

▸ **getClient**(`brainId`): `undefined` \| [`IBrainClient`](services.IBrainClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `brainId` | `string` |

#### Returns

`undefined` \| [`IBrainClient`](services.IBrainClient.md)

#### Defined in

[src/services/brainClientService.ts:89](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L89)

___

### getDefaultForCapability

▸ **getDefaultForCapability**(`capability`): `undefined` \| [`IBrainClient`](services.IBrainClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `capability` | `string` |

#### Returns

`undefined` \| [`IBrainClient`](services.IBrainClient.md)

#### Defined in

[src/services/brainClientService.ts:92](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L92)
