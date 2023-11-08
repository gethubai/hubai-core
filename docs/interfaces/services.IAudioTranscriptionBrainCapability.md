# Interface: IAudioTranscriptionBrainCapability

[services](../modules/services.md).IAudioTranscriptionBrainCapability

## Hierarchy

- [`IBrainCapability`](services.IBrainCapability.md)

  ↳ **`IAudioTranscriptionBrainCapability`**

## Table of contents

### Methods

- [transcribeAudio](services.IAudioTranscriptionBrainCapability.md#transcribeaudio)

## Methods

### transcribeAudio

▸ **transcribeAudio**(`prompt`, `options?`): `Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompt` | [`AudioPrompt`](../modules/services.md#audioprompt) |
| `options?` | [`PromptOptions`](../modules/services.md#promptoptions) |

#### Returns

`Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

#### Defined in

[src/services/brainClientService.ts:64](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L64)
