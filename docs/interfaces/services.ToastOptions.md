# Interface: ToastOptions\<Data\>

[services](../modules/services.md).ToastOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | {} |

## Hierarchy

- `CommonOptions`

  ↳ **`ToastOptions`**

  ↳↳ [`ToastProps`](services.ToastProps.md)

## Table of contents

### Properties

- [autoClose](services.ToastOptions.md#autoclose)
- [bodyStyle](services.ToastOptions.md#bodystyle)
- [closeOnClick](services.ToastOptions.md#closeonclick)
- [containerId](services.ToastOptions.md#containerid)
- [data](services.ToastOptions.md#data)
- [delay](services.ToastOptions.md#delay)
- [draggable](services.ToastOptions.md#draggable)
- [draggableDirection](services.ToastOptions.md#draggabledirection)
- [draggablePercent](services.ToastOptions.md#draggablepercent)
- [hideProgressBar](services.ToastOptions.md#hideprogressbar)
- [icon](services.ToastOptions.md#icon)
- [isLoading](services.ToastOptions.md#isloading)
- [onClick](services.ToastOptions.md#onclick)
- [onClose](services.ToastOptions.md#onclose)
- [onOpen](services.ToastOptions.md#onopen)
- [pauseOnFocusLoss](services.ToastOptions.md#pauseonfocusloss)
- [pauseOnHover](services.ToastOptions.md#pauseonhover)
- [position](services.ToastOptions.md#position)
- [progress](services.ToastOptions.md#progress)
- [progressStyle](services.ToastOptions.md#progressstyle)
- [role](services.ToastOptions.md#role)
- [rtl](services.ToastOptions.md#rtl)
- [style](services.ToastOptions.md#style)
- [toastId](services.ToastOptions.md#toastid)
- [type](services.ToastOptions.md#type)
- [updateId](services.ToastOptions.md#updateid)

## Properties

### autoClose

• `Optional` **autoClose**: `number` \| ``false``

Set the delay in ms to close the toast automatically.
Use `false` to prevent the toast from closing.
`Default: 5000`

#### Inherited from

CommonOptions.autoClose

#### Defined in

[src/services/toastService.ts:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L48)

___

### bodyStyle

• `Optional` **bodyStyle**: `CSSProperties`

An optional inline style to apply for the toast content.

#### Inherited from

CommonOptions.bodyStyle

#### Defined in

[src/services/toastService.ts:64](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L64)

___

### closeOnClick

• `Optional` **closeOnClick**: `boolean`

Remove the toast when clicked.
`Default: true`

#### Inherited from

CommonOptions.closeOnClick

#### Defined in

[src/services/toastService.ts:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L42)

___

### containerId

• `Optional` **containerId**: `string`

Set id to handle multiple container

#### Inherited from

CommonOptions.containerId

#### Defined in

[src/services/toastService.ts:95](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L95)

___

### data

• `Optional` **data**: `Data`

#### Defined in

[src/services/toastService.ts:156](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L156)

___

### delay

• `Optional` **delay**: `number`

Add a delay in ms before the toast appear.

#### Defined in

[src/services/toastService.ts:154](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L154)

___

### draggable

• `Optional` **draggable**: `boolean`

Allow toast to be draggable
`Default: true`

#### Inherited from

CommonOptions.draggable

#### Defined in

[src/services/toastService.ts:75](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L75)

___

### draggableDirection

• `Optional` **draggableDirection**: [`DraggableDirection`](../modules/services.md#draggabledirection)

Specify in which direction should you swipe to dismiss the toast
`Default: "x"`

#### Inherited from

CommonOptions.draggableDirection

#### Defined in

[src/services/toastService.ts:85](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L85)

___

### draggablePercent

• `Optional` **draggablePercent**: `number`

The percentage of the toast's width it takes for a drag to dismiss a toast
`Default: 80`

#### Inherited from

CommonOptions.draggablePercent

#### Defined in

[src/services/toastService.ts:80](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L80)

___

### hideProgressBar

• `Optional` **hideProgressBar**: `boolean`

Hide or show the progress bar.
`Default: false`

#### Inherited from

CommonOptions.hideProgressBar

#### Defined in

[src/services/toastService.ts:69](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L69)

___

### icon

• `Optional` **icon**: [`ToastIcon`](../modules/services.md#toasticon)

Used to display a custom icon. Set it to `false` to prevent
the icons from being displayed

#### Inherited from

CommonOptions.icon

#### Defined in

[src/services/toastService.ts:112](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L112)

___

### isLoading

• `Optional` **isLoading**: `boolean`

#### Defined in

[src/services/toastService.ts:155](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L155)

___

### onClick

• `Optional` **onClick**: (`event`: `MouseEvent`\<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`\<`Element`, `MouseEvent`\> |

##### Returns

`void`

**`Deprecated`**

⚠️ Will be removed in the next major release. You can pass a react component with you handler instead.

Fired when clicking inside toaster

#### Inherited from

CommonOptions.onClick

#### Defined in

[src/services/toastService.ts:102](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L102)

___

### onClose

• `Optional` **onClose**: \<T\>(`props`: `T`) => `void`

#### Type declaration

▸ \<`T`\>(`props`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `T` |

##### Returns

`void`

**`Deprecated`**

⚠️ Will be removed in the next major release. You can rely on `toast.onChange` instead.

Called when toast is unmounted.

#### Defined in

[src/services/toastService.ts:129](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L129)

___

### onOpen

• `Optional` **onOpen**: \<T\>(`props`: `T`) => `void`

#### Type declaration

▸ \<`T`\>(`props`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `T` |

##### Returns

`void`

**`Deprecated`**

⚠️ Will be removed in the next major release. You can rely on `toast.onChange` instead.

Called when toast is mounted.

#### Defined in

[src/services/toastService.ts:122](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L122)

___

### pauseOnFocusLoss

• `Optional` **pauseOnFocusLoss**: `boolean`

Pause the toast when the window loses focus.
`Default: true`

#### Inherited from

CommonOptions.pauseOnFocusLoss

#### Defined in

[src/services/toastService.ts:37](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L37)

___

### pauseOnHover

• `Optional` **pauseOnHover**: `boolean`

Pause the timer when the mouse hover the toast.
`Default: true`

#### Inherited from

CommonOptions.pauseOnHover

#### Defined in

[src/services/toastService.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L32)

___

### position

• `Optional` **position**: [`ToastPosition`](../modules/services.md#toastposition)

Set the default position to use.
`One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
`Default: 'top-right'`

#### Inherited from

CommonOptions.position

#### Defined in

[src/services/toastService.ts:54](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L54)

___

### progress

• `Optional` **progress**: `string` \| `number`

Set the percentage for the controlled progress bar. `Value must be between 0 and 1.`

#### Defined in

[src/services/toastService.ts:150](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L150)

___

### progressStyle

• `Optional` **progressStyle**: `CSSProperties`

An optional style to set for the progress bar.

#### Inherited from

CommonOptions.progressStyle

#### Defined in

[src/services/toastService.ts:59](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L59)

___

### role

• `Optional` **role**: `string`

Define the ARIA role for the toast
`Default: alert`
 https://www.w3.org/WAI/PF/aria/roles

#### Inherited from

CommonOptions.role

#### Defined in

[src/services/toastService.ts:91](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L91)

___

### rtl

• `Optional` **rtl**: `boolean`

Support right to left display.
`Default: false`

#### Inherited from

CommonOptions.rtl

#### Defined in

[src/services/toastService.ts:107](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L107)

___

### style

• `Optional` **style**: `CSSProperties`

An optional inline style to apply.

#### Defined in

[src/services/toastService.ts:133](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L133)

___

### toastId

• `Optional` **toastId**: `string`

Set a custom `toastId`

#### Defined in

[src/services/toastService.ts:142](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L142)

___

### type

• `Optional` **type**: [`TypeOptions`](../modules/services.md#typeoptions)

Set the toast type.
`One of: 'info', 'success', 'warning', 'error', 'default'`

#### Defined in

[src/services/toastService.ts:138](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L138)

___

### updateId

• `Optional` **updateId**: `string`

Used during update

#### Defined in

[src/services/toastService.ts:146](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L146)
