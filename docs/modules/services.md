# Module: services

## Table of contents

### Interfaces

- [IActivityBarService](../interfaces/services.IActivityBarService.md)
- [IAudioTranscriptionBrainCapability](../interfaces/services.IAudioTranscriptionBrainCapability.md)
- [IAuxiliaryBarService](../interfaces/services.IAuxiliaryBarService.md)
- [IBrainCapability](../interfaces/services.IBrainCapability.md)
- [IBrainClient](../interfaces/services.IBrainClient.md)
- [IBrainClientManager](../interfaces/services.IBrainClientManager.md)
- [IColorThemeService](../interfaces/services.IColorThemeService.md)
- [IEditorService](../interfaces/services.IEditorService.md)
- [IEditorTreeService](../interfaces/services.IEditorTreeService.md)
- [IExplorerService](../interfaces/services.IExplorerService.md)
- [IExtensionService](../interfaces/services.IExtensionService.md)
- [IFolderTreeService](../interfaces/services.IFolderTreeService.md)
- [IImageGenerationBrainCapability](../interfaces/services.IImageGenerationBrainCapability.md)
- [ILayoutService](../interfaces/services.ILayoutService.md)
- [IMenuBarService](../interfaces/services.IMenuBarService.md)
- [INotificationService](../interfaces/services.INotificationService.md)
- [IPanelService](../interfaces/services.IPanelService.md)
- [IProblemsService](../interfaces/services.IProblemsService.md)
- [ISearchService](../interfaces/services.ISearchService.md)
- [ISettingsService](../interfaces/services.ISettingsService.md)
- [ISidebarService](../interfaces/services.ISidebarService.md)
- [IStatusBarService](../interfaces/services.IStatusBarService.md)
- [ITextBrainCapability](../interfaces/services.ITextBrainCapability.md)

### Type Aliases

- [AudioPrompt](services.md#audioprompt)
- [BrainPrompt](services.md#brainprompt)
- [BrainPromptAttachment](services.md#brainpromptattachment)
- [BrainResponse](services.md#brainresponse)
- [BrainResponseAttachment](services.md#brainresponseattachment)
- [BuiltInSettingsTabType](services.md#builtinsettingstabtype)
- [ImageGenerationBrainPrompt](services.md#imagegenerationbrainprompt)
- [LocalBrain](services.md#localbrain)
- [PromptOptions](services.md#promptoptions)
- [PromptRole](services.md#promptrole)

## Type Aliases

### AudioPrompt

Ƭ **AudioPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `audioFilePath` | `string` |
| `language` | `string` |

#### Defined in

[src/services/brainClientService.ts:58](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L58)

___

### BrainPrompt

Ƭ **BrainPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attachments?` | [`BrainPromptAttachment`](services.md#brainpromptattachment)[] |
| `role` | [`PromptRole`](services.md#promptrole) |
| `sentAt` | `Date` |
| `value` | `string` |

#### Defined in

[src/services/brainClientService.ts:25](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L25)

___

### BrainPromptAttachment

Ƭ **BrainPromptAttachment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mimeType` | `string` |
| `originalFileName?` | `string` |
| `path` | `string` |
| `size` | `number` |

#### Defined in

[src/services/brainClientService.ts:18](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L18)

___

### BrainResponse

Ƭ **BrainResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attachments?` | [`BrainResponseAttachment`](services.md#brainresponseattachment)[] |
| `errors` | `string`[] |
| `result` | `string` |

#### Defined in

[src/services/brainClientService.ts:45](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L45)

___

### BrainResponseAttachment

Ƭ **BrainResponseAttachment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `caption?` | `string` |
| `data` | `Buffer` \| `string` |
| `fileName?` | `string` |
| `fileType` | `string` |
| `mimeType` | `string` |

#### Defined in

[src/services/brainClientService.ts:37](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L37)

___

### BuiltInSettingsTabType

Ƭ **BuiltInSettingsTabType**: `ReturnType`\<() => [`IEditorTab`](../interfaces/model.IEditorTab.md)\<\{ `language`: `string` ; `value`: `string`  }\>\>

#### Defined in

[src/services/settingsService.ts:4](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L4)

___

### ImageGenerationBrainPrompt

Ƭ **ImageGenerationBrainPrompt**: [`BrainPrompt`](services.md#brainprompt) & \{ `expectedResponseType`: ``"base64"`` \| ``"url"`` \| ``"binary"``  }

#### Defined in

[src/services/brainClientService.ts:70](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L70)

___

### LocalBrain

Ƭ **LocalBrain**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `capabilities` | `string`[] |
| `description?` | `string` |
| `disabled?` | `boolean` |
| `displayName` | `string` |
| `icon?` | `string` |
| `iconUrl?` | `string` |
| `id` | `string` |
| `name` | `string` |
| `publisher?` | `string` |
| `version` | `string` |

#### Defined in

[src/services/brainClientService.ts:3](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L3)

___

### PromptOptions

Ƭ **PromptOptions**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `settings?` | `any` |

#### Defined in

[src/services/brainClientService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L32)

___

### PromptRole

Ƭ **PromptRole**: ``"user"`` \| ``"brain"`` \| ``"system"``

#### Defined in

[src/services/brainClientService.ts:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/brainClientService.ts#L16)
