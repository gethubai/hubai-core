# Interface: IBrainClient

[services](../modules/services.md).IBrainClient

Interface for a brain client, incorporating various capabilities.

## Table of contents

### Properties

- [brain](services.IBrainClient.md#brain)
- [conversation](services.IBrainClient.md#conversation)
- [imageGeneration](services.IBrainClient.md#imagegeneration)
- [voiceTranscription](services.IBrainClient.md#voicetranscription)

## Properties

### brain

• **brain**: [`LocalBrain`](../modules/services.md#localbrain)

The LocalBrain associated with the client.

#### Defined in

[src/services/brainClientService.ts:197](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L197)

___

### conversation

• `Optional` **conversation**: [`ITextBrainCapability`](services.ITextBrainCapability.md)

Optional text conversation capability.

#### Defined in

[src/services/brainClientService.ts:200](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L200)

___

### imageGeneration

• `Optional` **imageGeneration**: [`IImageGenerationBrainCapability`](services.IImageGenerationBrainCapability.md)

Optional image generation capability.

#### Defined in

[src/services/brainClientService.ts:206](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L206)

___

### voiceTranscription

• `Optional` **voiceTranscription**: [`IAudioTranscriptionBrainCapability`](services.IAudioTranscriptionBrainCapability.md)

Optional audio transcription capability.

#### Defined in

[src/services/brainClientService.ts:203](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L203)
