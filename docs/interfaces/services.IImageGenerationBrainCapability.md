# Interface: IImageGenerationBrainCapability

[services](../modules/services.md).IImageGenerationBrainCapability

Extends IBrainCapability for image generation capabilities.

## Hierarchy

- [`IBrainCapability`](services.IBrainCapability.md)

  ↳ **`IImageGenerationBrainCapability`**

## Table of contents

### Methods

- [generateImage](services.IImageGenerationBrainCapability.md#generateimage)

## Methods

### generateImage

▸ **generateImage**(`prompts`, `options?`): `Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

Generates an image based on the provided prompts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prompts` | [`ImageGenerationBrainPrompt`](../modules/services.md#imagegenerationbrainprompt)[] | Array of ImageGenerationBrainPrompt objects. |
| `options?` | [`PromptOptions`](../modules/services.md#promptoptions) | Optional PromptOptions. |

#### Returns

`Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

A promise resolving to a BrainResponse.

#### Defined in

[src/services/brainClientService.ts:186](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L186)
