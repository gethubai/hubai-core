# Interface: IAudioTranscriptionBrainCapability

[services](../modules/services.md).IAudioTranscriptionBrainCapability

Extends IBrainCapability for audio transcription functionality.

## Hierarchy

- [`IBrainCapability`](services.IBrainCapability.md)

  ↳ **`IAudioTranscriptionBrainCapability`**

## Table of contents

### Methods

- [transcribeAudio](services.IAudioTranscriptionBrainCapability.md#transcribeaudio)

## Methods

### transcribeAudio

▸ **transcribeAudio**(`prompt`, `options?`): `Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

Transcribes audio content.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prompt` | [`AudioPrompt`](../modules/services.md#audioprompt) | The AudioPrompt to transcribe. |
| `options?` | [`PromptOptions`](../modules/services.md#promptoptions) | Optional PromptOptions. |

#### Returns

`Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

A promise resolving to a BrainResponse.

#### Defined in

[src/services/brainClientService.ts:162](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L162)
