# Interface: IImageGenerationBrainCapability

[services](../modules/services.md).IImageGenerationBrainCapability

## Hierarchy

- [`IBrainCapability`](services.IBrainCapability.md)

  ↳ **`IImageGenerationBrainCapability`**

## Table of contents

### Methods

- [generateImage](services.IImageGenerationBrainCapability.md#generateimage)

## Methods

### generateImage

▸ **generateImage**(`prompts`, `options?`): `Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompts` | [`ImageGenerationBrainPrompt`](../modules/services.md#imagegenerationbrainprompt)[] |
| `options?` | [`PromptOptions`](../modules/services.md#promptoptions) |

#### Returns

`Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

#### Defined in

[src/services/brainClientService.ts:75](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L75)
