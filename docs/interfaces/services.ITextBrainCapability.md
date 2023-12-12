# Interface: ITextBrainCapability

[services](../modules/services.md).ITextBrainCapability

Extends IBrainCapability for text-based interactions.

## Hierarchy

- [`IBrainCapability`](services.IBrainCapability.md)

  ↳ **`ITextBrainCapability`**

## Table of contents

### Methods

- [sendTextPrompt](services.ITextBrainCapability.md#sendtextprompt)

## Methods

### sendTextPrompt

▸ **sendTextPrompt**(`prompts`, `options?`): `Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

Sends a text prompt to the brain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prompts` | [`BrainPrompt`](../modules/services.md#brainprompt)[] | Array of BrainPrompt objects. |
| `options?` | [`PromptOptions`](../modules/services.md#promptoptions) | Optional PromptOptions. |

#### Returns

`Promise`\<[`BrainResponse`](../modules/services.md#brainresponse)\>

A promise resolving to a BrainResponse.

#### Defined in

[src/services/brainClientService.ts:135](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L135)
