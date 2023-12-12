# Module: services

## Table of contents

### Interfaces

- [IActivityBarService](../interfaces/services.IActivityBarService.md)
- [IAudioTranscriptionBrainCapability](../interfaces/services.IAudioTranscriptionBrainCapability.md)
- [IAuxiliaryBarService](../interfaces/services.IAuxiliaryBarService.md)
- [IBrainCapability](../interfaces/services.IBrainCapability.md)
- [IBrainClient](../interfaces/services.IBrainClient.md)
- [IBrainClientManager](../interfaces/services.IBrainClientManager.md)
- [IChatAssistant](../interfaces/services.IChatAssistant.md)
- [IChatAssistantController](../interfaces/services.IChatAssistantController.md)
- [IChatAssistantsManagement](../interfaces/services.IChatAssistantsManagement.md)
- [IChatSessionService](../interfaces/services.IChatSessionService.md)
- [IColorThemeService](../interfaces/services.IColorThemeService.md)
- [IEditorService](../interfaces/services.IEditorService.md)
- [IEditorTreeService](../interfaces/services.IEditorTreeService.md)
- [IExplorerService](../interfaces/services.IExplorerService.md)
- [IExtensionService](../interfaces/services.IExtensionService.md)
- [IFolderTreeService](../interfaces/services.IFolderTreeService.md)
- [IGlobalShortcutService](../interfaces/services.IGlobalShortcutService.md)
- [IImageGenerationBrainCapability](../interfaces/services.IImageGenerationBrainCapability.md)
- [ILayoutService](../interfaces/services.ILayoutService.md)
- [IMenuBarService](../interfaces/services.IMenuBarService.md)
- [INotificationService](../interfaces/services.INotificationService.md)
- [IPackageSettingsService](../interfaces/services.IPackageSettingsService.md)
- [IPanelService](../interfaces/services.IPanelService.md)
- [IProblemsService](../interfaces/services.IProblemsService.md)
- [ISearchService](../interfaces/services.ISearchService.md)
- [ISettingsService](../interfaces/services.ISettingsService.md)
- [ISidebarService](../interfaces/services.ISidebarService.md)
- [IStatusBarService](../interfaces/services.IStatusBarService.md)
- [ITextBrainCapability](../interfaces/services.ITextBrainCapability.md)
- [IToastService](../interfaces/services.IToastService.md)
- [ToastContentProps](../interfaces/services.ToastContentProps.md)
- [ToastOptions](../interfaces/services.ToastOptions.md)
- [ToastPromiseParams](../interfaces/services.ToastPromiseParams.md)
- [ToastProps](../interfaces/services.ToastProps.md)
- [UpdateOptions](../interfaces/services.UpdateOptions.md)

### Type Aliases

- [AudioPrompt](services.md#audioprompt)
- [BrainPrompt](services.md#brainprompt)
- [BrainPromptAttachment](services.md#brainpromptattachment)
- [BrainResponse](services.md#brainresponse)
- [BrainResponseAttachment](services.md#brainresponseattachment)
- [BuiltInSettingsTabType](services.md#builtinsettingstabtype)
- [ChatAssistantContext](services.md#chatassistantcontext)
- [DraggableDirection](services.md#draggabledirection)
- [IGlobalShortcut](services.md#iglobalshortcut)
- [IGlobalShortcutRegistrationOptions](services.md#iglobalshortcutregistrationoptions)
- [IShortcutSubscription](services.md#ishortcutsubscription)
- [IUserShortcut](services.md#iusershortcut)
- [IUserShortcutService](services.md#iusershortcutservice)
- [ImageGenerationBrainPrompt](services.md#imagegenerationbrainprompt)
- [LocalBrain](services.md#localbrain)
- [PromptOptions](services.md#promptoptions)
- [PromptRole](services.md#promptrole)
- [SendChatMessageOptions](services.md#sendchatmessageoptions)
- [ToastContent](services.md#toastcontent)
- [ToastIcon](services.md#toasticon)
- [ToastPosition](services.md#toastposition)
- [TypeOptions](services.md#typeoptions)

## Type Aliases

### AudioPrompt

Ƭ **AudioPrompt**: `Object`

Represents an audio prompt for transcription.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioFilePath` | `string` | File path to the audio file. |
| `language` | `string` | Language of the audio content. |

#### Defined in

[src/services/brainClientService.ts:144](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L144)

___

### BrainPrompt

Ƭ **BrainPrompt**: `Object`

Represents a prompt in a conversation with a brain.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachments?` | [`BrainPromptAttachment`](services.md#brainpromptattachment)[] | Optional array of attachments. |
| `role` | [`PromptRole`](services.md#promptrole) | Role of the prompt (user, brain, or system). |
| `sentAt` | `Date` | Date and time when the prompt was sent. |
| `value` | `string` | Content of the prompt. |

#### Defined in

[src/services/brainClientService.ts:66](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L66)

___

### BrainPromptAttachment

Ƭ **BrainPromptAttachment**: `Object`

Represents an attachment in a brain prompt.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `mimeType` | `string` | MIME type of the attachment. |
| `originalFileName?` | `string` | Optional original file name of the attachment. |
| `path` | `string` | File path of the attachment. |
| `size` | `number` | Size of the attachment in bytes. |

#### Defined in

[src/services/brainClientService.ts:49](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L49)

___

### BrainResponse

Ƭ **BrainResponse**: `Object`

Represents a response from a brain.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachments?` | [`BrainResponseAttachment`](services.md#brainresponseattachment)[] | Optional array of attachments. |
| `errors` | `string`[] | Array of error messages, if any. |
| `result` | `string` | Result of the brain's processing. |

#### Defined in

[src/services/brainClientService.ts:114](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L114)

___

### BrainResponseAttachment

Ƭ **BrainResponseAttachment**: `Object`

Represents an attachment in a brain response.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `caption?` | `string` | Optional caption for the attachment. |
| `data` | `Buffer` \| `string` | Data of the attachment (Buffer or string). |
| `fileName?` | `string` | Optional file name for the attachment. |
| `fileType` | `string` | File type of the attachment. |
| `mimeType` | `string` | MIME type of the attachment. |

#### Defined in

[src/services/brainClientService.ts:94](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L94)

___

### BuiltInSettingsTabType

Ƭ **BuiltInSettingsTabType**: `ReturnType`\<() => [`IEditorTab`](../interfaces/model.IEditorTab.md)\<\{ `language`: `string` ; `value`: `string`  }\>\>

#### Defined in

[src/services/settingsService.ts:4](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/settingsService.ts#L4)

___

### ChatAssistantContext

Ƭ **ChatAssistantContext**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `appendToAuxiliaryBar` | (`component`: `React.ReactNode`) => `void` | Appends a component to the auxiliary bar. |
| `chat` | [`ChatInfo`](model.md#chatinfo) | Information about the current chat. |
| `getSettings` | () => `any` \| `undefined` | Retrieves the current chat settings. |
| `session` | [`IChatSessionService`](../interfaces/services.IChatSessionService.md) | Session service for the chat. |
| `setSettings` | (`settings`: `any`) => `void` | Function to set chat settings. |

#### Defined in

[src/services/chat.ts:59](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L59)

___

### DraggableDirection

Ƭ **DraggableDirection**: ``"x"`` \| ``"y"``

#### Defined in

[src/services/toastService.ts:15](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L15)

___

### IGlobalShortcut

Ƭ **IGlobalShortcut**: `Object`

Represents a global keyboard shortcut.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accelerator` | `string` | The keyboard accelerator for the global shortcut, e.g., "Ctrl+Shift+N". See https://www.electronjs.org/docs/latest/api/accelerator for more information. |
| `enabled` | `boolean` | Indicates whether the global shortcut is enabled. |

#### Defined in

[src/services/globalShortcutService.ts:4](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L4)

___

### IGlobalShortcutRegistrationOptions

Ƭ **IGlobalShortcutRegistrationOptions**: `Object`

Options for registering a global shortcut.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` | Optional identifier for the global shortcut registration. |

#### Defined in

[src/services/globalShortcutService.ts:18](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L18)

___

### IShortcutSubscription

Ƭ **IShortcutSubscription**: `Object`

Represents a subscription to a shortcut event, allowing for unsubscribing.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `unsubscribe` | () => `void` |

#### Defined in

[src/services/userShortcutService.ts:22](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/userShortcutService.ts#L22)

___

### IUserShortcut

Ƭ **IUserShortcut**: `Object`

Represents a user-defined shortcut.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accelerator` | `string` | Keyboard accelerator for the shortcut, e.g., "Ctrl+Shift+N". See https://www.electronjs.org/docs/latest/api/accelerator for more information. |
| `id` | `string` | Unique identifier for the shortcut. |
| `name` | `string` | Name of the shortcut. |

#### Defined in

[src/services/userShortcutService.ts:4](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/userShortcutService.ts#L4)

___

### IUserShortcutService

Ƭ **IUserShortcutService**: `Object`

Interface for managing user shortcuts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getOrCreate` | (`shortcut`: `string` \| [`IUserShortcut`](services.md#iusershortcut), `defaultShortcut`: [`IUserShortcut`](services.md#iusershortcut)) => `Promise`\<[`IUserShortcut`](services.md#iusershortcut)\> |
| `getShortcuts` | () => [`IUserShortcut`](services.md#iusershortcut)[] |
| `isRegistered` | (`acceleratorOrShortcut`: `string` \| [`IUserShortcut`](services.md#iusershortcut)) => `boolean` |
| `onShortcutAdded` | (`callback`: (`shortcut`: [`IUserShortcut`](services.md#iusershortcut)) => `void`) => [`IShortcutSubscription`](services.md#ishortcutsubscription) |
| `onShortcutPressed` | (`shortcut`: `string` \| [`IUserShortcut`](services.md#iusershortcut), `callback`: () => `void`) => [`IShortcutSubscription`](services.md#ishortcutsubscription) |
| `onShortcutRemoved` | (`callback`: (`shortcut`: [`IUserShortcut`](services.md#iusershortcut)) => `void`) => [`IShortcutSubscription`](services.md#ishortcutsubscription) |
| `onShortcutUpdated` | (`callback`: (`shortcut`: [`IUserShortcut`](services.md#iusershortcut)) => `void`) => [`IShortcutSubscription`](services.md#ishortcutsubscription) |
| `register` | (`shortcut`: [`IUserShortcut`](services.md#iusershortcut)) => `Promise`\<`boolean`\> |
| `unregister` | (`id`: `string`) => `Promise`\<`boolean`\> |
| `update` | (`shortcut`: [`IUserShortcut`](services.md#iusershortcut)) => `Promise`\<`boolean`\> |
| `get` | (`shortcutId`: `string`) => `undefined` \| [`IUserShortcut`](services.md#iusershortcut) |

#### Defined in

[src/services/userShortcutService.ts:30](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/userShortcutService.ts#L30)

___

### ImageGenerationBrainPrompt

Ƭ **ImageGenerationBrainPrompt**: [`BrainPrompt`](services.md#brainprompt) & \{ `expectedResponseType`: ``"base64"`` \| ``"url"`` \| ``"binary"``  }

Represents a brain prompt for image generation with expected response type.

#### Defined in

[src/services/brainClientService.ts:171](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L171)

___

### LocalBrain

Ƭ **LocalBrain**: `Object`

Represents a local brain with various properties and capabilities.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `capabilities` | `string`[] | List of capabilities (as strings) supported by the local brain. |
| `description?` | `string` | Optional description of the local brain. |
| `disabled?` | `boolean` | Optional flag indicating if the local brain is disabled. |
| `displayName` | `string` | Display name of the local brain. |
| `icon?` | `string` | Optional icon representing the local brain. |
| `iconUrl?` | `string` | Optional URL for the icon of the local brain. |
| `id` | `string` | Unique identifier for the local brain. |
| `name` | `string` | Internal name of the local brain. |
| `publisher?` | `string` | Publisher id. |
| `version` | `string` | Version of the local brain. |

#### Defined in

[src/services/brainClientService.ts:9](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L9)

___

### PromptOptions

Ƭ **PromptOptions**: `Object`

Represents options for a brain prompt.

#### Index signature

▪ [key: `string`]: `any`

Dictionary of prompt options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings?` | `any` | Optional settings for the prompt. |

#### Defined in

[src/services/brainClientService.ts:83](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L83)

___

### PromptRole

Ƭ **PromptRole**: ``"user"`` \| ``"brain"`` \| ``"system"``

Represents the role of a prompt in a conversation with a brain.

#### Defined in

[src/services/brainClientService.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/brainClientService.ts#L44)

___

### SendChatMessageOptions

Ƭ **SendChatMessageOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachments?` | `File`[] | File attachments for the message. |
| `audio?` | `Blob` | Audio content for the message. |
| `hidden?` | `boolean` | Indicates if the message is hidden. |
| `isSystemMessage?` | `boolean` | True if the message is a system message. |
| `text?` | `string` | Text of the message to be sent. |

#### Defined in

[src/services/chat.ts:113](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/chat.ts#L113)

___

### ToastContent

Ƭ **ToastContent**\<`T`\>: `React.ReactNode` \| (`props`: [`ToastContentProps`](../interfaces/services.ToastContentProps.md)\<`T`\>) => `React.ReactNode`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[src/services/toastService.ts:23](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L23)

___

### ToastIcon

Ƭ **ToastIcon**: `boolean` \| `string` \| `number` \| `React.ReactNode`

#### Defined in

[src/services/toastService.ts:13](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L13)

___

### ToastPosition

Ƭ **ToastPosition**: ``"top-right"`` \| ``"top-center"`` \| ``"top-left"`` \| ``"bottom-right"`` \| ``"bottom-center"`` \| ``"bottom-left"``

#### Defined in

[src/services/toastService.ts:5](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L5)

___

### TypeOptions

Ƭ **TypeOptions**: ``"info"`` \| ``"success"`` \| ``"warning"`` \| ``"error"`` \| ``"default"``

#### Defined in

[src/services/toastService.ts:4](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L4)
