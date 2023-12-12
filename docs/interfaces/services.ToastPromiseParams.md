# Interface: ToastPromiseParams\<TData, TError, TPending\>

[services](../modules/services.md).ToastPromiseParams

Parameters for toast notifications related to promises, with optional states.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TPending` | `unknown` |

## Table of contents

### Properties

- [error](services.ToastPromiseParams.md#error)
- [pending](services.ToastPromiseParams.md#pending)
- [success](services.ToastPromiseParams.md#success)

## Properties

### error

• `Optional` **error**: `string` \| [`UpdateOptions`](services.UpdateOptions.md)\<`TError`\>

Optional content or options for the error state.

#### Defined in

[src/services/toastService.ts:200](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L200)

___

### pending

• `Optional` **pending**: `string` \| [`UpdateOptions`](services.UpdateOptions.md)\<`TPending`\>

Optional content or options for the pending state.

#### Defined in

[src/services/toastService.ts:194](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L194)

___

### success

• `Optional` **success**: `string` \| [`UpdateOptions`](services.UpdateOptions.md)\<`TData`\>

Optional content or options for the success state.

#### Defined in

[src/services/toastService.ts:197](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L197)
