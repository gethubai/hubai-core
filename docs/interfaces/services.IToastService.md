# Interface: IToastService

[services](../modules/services.md).IToastService

Service for displaying toast notifications.

## Table of contents

### Methods

- [dismiss](services.IToastService.md#dismiss)
- [error](services.IToastService.md#error)
- [info](services.IToastService.md#info)
- [isActive](services.IToastService.md#isactive)
- [promise](services.IToastService.md#promise)
- [show](services.IToastService.md#show)
- [success](services.IToastService.md#success)
- [update](services.IToastService.md#update)
- [warn](services.IToastService.md#warn)

## Methods

### dismiss

▸ **dismiss**(`toastId?`): `void`

Dismisses a toast notification by its ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `toastId?` | `string` |

#### Returns

`void`

#### Defined in

[src/services/toastService.ts:254](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L254)

___

### error

▸ **error**\<`TData`\>(`content`, `options?`): `string`

Shows an error toast notification.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`ToastContent`](../modules/services.md#toastcontent)\<`TData`\> |
| `options?` | [`ToastOptions`](services.ToastOptions.md)\<`TData`\> |

#### Returns

`string`

#### Defined in

[src/services/toastService.ts:245](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L245)

___

### info

▸ **info**\<`TData`\>(`content`, `options?`): `string`

Shows an info toast notification.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`ToastContent`](../modules/services.md#toastcontent)\<`TData`\> |
| `options?` | [`ToastOptions`](services.ToastOptions.md)\<`TData`\> |

#### Returns

`string`

#### Defined in

[src/services/toastService.ts:233](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L233)

___

### isActive

▸ **isActive**(`toastId`): `boolean`

Checks if a toast notification is currently active.

#### Parameters

| Name | Type |
| :------ | :------ |
| `toastId` | `string` |

#### Returns

`boolean`

#### Defined in

[src/services/toastService.ts:257](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L257)

___

### promise

▸ **promise**\<`TData`, `TError`, `TPending`\>(`promise`, `«destructured»`, `options?`): `Promise`\<`TData`\>

Shows a toast that will be automatically dismissed when the promise resolves.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TPending` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`\<`TData`\> \| () => `Promise`\<`TData`\> |
| `«destructured»` | [`ToastPromiseParams`](services.ToastPromiseParams.md)\<`TData`, `TError`, `TPending`\> |
| `options?` | [`ToastOptions`](services.ToastOptions.md)\<{}\> |

#### Returns

`Promise`\<`TData`\>

A promise resolving to the type TData.

#### Defined in

[src/services/toastService.ts:220](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L220)

___

### show

▸ **show**\<`TData`\>(`content`, `options?`): `string`

Shows a toast notification with content and options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`ToastContent`](../modules/services.md#toastcontent)\<`TData`\> |
| `options?` | [`ToastOptions`](services.ToastOptions.md)\<`TData`\> |

#### Returns

`string`

A string representing the toast ID.

#### Defined in

[src/services/toastService.ts:211](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L211)

___

### success

▸ **success**\<`TData`\>(`content`, `options?`): `string`

Shows a success toast notification.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`ToastContent`](../modules/services.md#toastcontent)\<`TData`\> |
| `options?` | [`ToastOptions`](services.ToastOptions.md)\<`TData`\> |

#### Returns

`string`

#### Defined in

[src/services/toastService.ts:227](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L227)

___

### update

▸ **update**\<`TData`\>(`toastId`, `options`): `void`

Updates an existing toast notification by its ID.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `toastId` | `string` |
| `options` | [`UpdateOptions`](services.UpdateOptions.md)\<`TData`\> |

#### Returns

`void`

#### Defined in

[src/services/toastService.ts:251](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L251)

___

### warn

▸ **warn**\<`TData`\>(`content`, `options?`): `string`

Shows a warning toast notification.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`ToastContent`](../modules/services.md#toastcontent)\<`TData`\> |
| `options?` | [`ToastOptions`](services.ToastOptions.md)\<`TData`\> |

#### Returns

`string`

#### Defined in

[src/services/toastService.ts:239](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L239)
