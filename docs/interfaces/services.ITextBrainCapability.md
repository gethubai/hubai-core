# Interface: ITextBrainCapability

[services](../modules/services.md).ITextBrainCapability

## Hierarchy

- [`IBrainCapability`](services.IBrainCapability.md)

  ↳ **`ITextBrainCapability`**

## Table of contents

### Methods

- [sendTextPrompt](services.ITextBrainCapability.md#sendtextprompt)

## Methods

### sendTextPrompt

▸ **sendTextPrompt**(`prompts`, `options?`): `Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompts` | [`BrainPrompt`](../modules/services.md#brainprompt)[] |
| `options?` | [`PromptOptions`](../modules/services.md#promptoptions) |

#### Returns

`Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

#### Defined in

[src/services/brainClientService.ts:52](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L52)
