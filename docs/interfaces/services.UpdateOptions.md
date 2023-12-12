# Interface: UpdateOptions\<T\>

[services](../modules/services.md).UpdateOptions

Options for updating a toast notification, with optional render content.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- `Nullable`\<[`ToastOptions`](services.ToastOptions.md)\<`T`\>\>

  ↳ **`UpdateOptions`**

## Table of contents

### Properties

- [autoClose](services.UpdateOptions.md#autoclose)
- [bodyStyle](services.UpdateOptions.md#bodystyle)
- [closeOnClick](services.UpdateOptions.md#closeonclick)
- [containerId](services.UpdateOptions.md#containerid)
- [data](services.UpdateOptions.md#data)
- [delay](services.UpdateOptions.md#delay)
- [draggable](services.UpdateOptions.md#draggable)
- [draggableDirection](services.UpdateOptions.md#draggabledirection)
- [draggablePercent](services.UpdateOptions.md#draggablepercent)
- [hideProgressBar](services.UpdateOptions.md#hideprogressbar)
- [icon](services.UpdateOptions.md#icon)
- [isLoading](services.UpdateOptions.md#isloading)
- [onClick](services.UpdateOptions.md#onclick)
- [onClose](services.UpdateOptions.md#onclose)
- [onOpen](services.UpdateOptions.md#onopen)
- [pauseOnFocusLoss](services.UpdateOptions.md#pauseonfocusloss)
- [pauseOnHover](services.UpdateOptions.md#pauseonhover)
- [position](services.UpdateOptions.md#position)
- [progress](services.UpdateOptions.md#progress)
- [progressStyle](services.UpdateOptions.md#progressstyle)
- [render](services.UpdateOptions.md#render)
- [role](services.UpdateOptions.md#role)
- [rtl](services.UpdateOptions.md#rtl)
- [style](services.UpdateOptions.md#style)
- [toastId](services.UpdateOptions.md#toastid)
- [type](services.UpdateOptions.md#type)
- [updateId](services.UpdateOptions.md#updateid)

## Properties

### autoClose

• `Optional` **autoClose**: ``null`` \| `number` \| ``false``

Set the delay in ms to close the toast automatically.
Use `false` to prevent the toast from closing.
`Default: 5000`

#### Inherited from

Nullable.autoClose

#### Defined in

[src/services/toastService.ts:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L48)

___

### bodyStyle

• `Optional` **bodyStyle**: ``null`` \| `CSSProperties`

An optional inline style to apply for the toast content.

#### Inherited from

Nullable.bodyStyle

#### Defined in

[src/services/toastService.ts:64](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L64)

___

### closeOnClick

• `Optional` **closeOnClick**: ``null`` \| `boolean`

Remove the toast when clicked.
`Default: true`

#### Inherited from

Nullable.closeOnClick

#### Defined in

[src/services/toastService.ts:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L42)

___

### containerId

• `Optional` **containerId**: ``null`` \| `string`

Set id to handle multiple container

#### Inherited from

Nullable.containerId

#### Defined in

[src/services/toastService.ts:95](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L95)

___

### data

• `Optional` **data**: ``null`` \| `T`

#### Inherited from

Nullable.data

#### Defined in

[src/services/toastService.ts:156](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L156)

___

### delay

• `Optional` **delay**: ``null`` \| `number`

Add a delay in ms before the toast appear.

#### Inherited from

Nullable.delay

#### Defined in

[src/services/toastService.ts:154](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L154)

___

### draggable

• `Optional` **draggable**: ``null`` \| `boolean`

Allow toast to be draggable
`Default: true`

#### Inherited from

Nullable.draggable

#### Defined in

[src/services/toastService.ts:75](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L75)

___

### draggableDirection

• `Optional` **draggableDirection**: ``null`` \| [`DraggableDirection`](../modules/services.md#draggabledirection)

Specify in which direction should you swipe to dismiss the toast
`Default: "x"`

#### Inherited from

Nullable.draggableDirection

#### Defined in

[src/services/toastService.ts:85](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L85)

___

### draggablePercent

• `Optional` **draggablePercent**: ``null`` \| `number`

The percentage of the toast's width it takes for a drag to dismiss a toast
`Default: 80`

#### Inherited from

Nullable.draggablePercent

#### Defined in

[src/services/toastService.ts:80](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L80)

___

### hideProgressBar

• `Optional` **hideProgressBar**: ``null`` \| `boolean`

Hide or show the progress bar.
`Default: false`

#### Inherited from

Nullable.hideProgressBar

#### Defined in

[src/services/toastService.ts:69](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L69)

___

### icon

• `Optional` **icon**: [`ToastIcon`](../modules/services.md#toasticon)

Used to display a custom icon. Set it to `false` to prevent
the icons from being displayed

#### Inherited from

Nullable.icon

#### Defined in

[src/services/toastService.ts:112](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L112)

___

### isLoading

• `Optional` **isLoading**: ``null`` \| `boolean`

#### Inherited from

Nullable.isLoading

#### Defined in

[src/services/toastService.ts:155](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L155)

___

### onClick

• `Optional` **onClick**: ``null`` \| (`event`: `MouseEvent`\<`Element`, `MouseEvent`\>) => `void`

**`Deprecated`**

⚠️ Will be removed in the next major release. You can pass a react component with you handler instead.

Fired when clicking inside toaster

#### Inherited from

Nullable.onClick

#### Defined in

[src/services/toastService.ts:102](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L102)

___

### onClose

• `Optional` **onClose**: ``null`` \| \<T\>(`props`: `T`) => `void`

**`Deprecated`**

⚠️ Will be removed in the next major release. You can rely on `toast.onChange` instead.

Called when toast is unmounted.

#### Inherited from

Nullable.onClose

#### Defined in

[src/services/toastService.ts:129](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L129)

___

### onOpen

• `Optional` **onOpen**: ``null`` \| \<T\>(`props`: `T`) => `void`

**`Deprecated`**

⚠️ Will be removed in the next major release. You can rely on `toast.onChange` instead.

Called when toast is mounted.

#### Inherited from

Nullable.onOpen

#### Defined in

[src/services/toastService.ts:122](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L122)

___

### pauseOnFocusLoss

• `Optional` **pauseOnFocusLoss**: ``null`` \| `boolean`

Pause the toast when the window loses focus.
`Default: true`

#### Inherited from

Nullable.pauseOnFocusLoss

#### Defined in

[src/services/toastService.ts:37](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L37)

___

### pauseOnHover

• `Optional` **pauseOnHover**: ``null`` \| `boolean`

Pause the timer when the mouse hover the toast.
`Default: true`

#### Inherited from

Nullable.pauseOnHover

#### Defined in

[src/services/toastService.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L32)

___

### position

• `Optional` **position**: ``null`` \| [`ToastPosition`](../modules/services.md#toastposition)

Set the default position to use.
`One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
`Default: 'top-right'`

#### Inherited from

Nullable.position

#### Defined in

[src/services/toastService.ts:54](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L54)

___

### progress

• `Optional` **progress**: ``null`` \| `string` \| `number`

Set the percentage for the controlled progress bar. `Value must be between 0 and 1.`

#### Inherited from

Nullable.progress

#### Defined in

[src/services/toastService.ts:150](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L150)

___

### progressStyle

• `Optional` **progressStyle**: ``null`` \| `CSSProperties`

An optional style to set for the progress bar.

#### Inherited from

Nullable.progressStyle

#### Defined in

[src/services/toastService.ts:59](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L59)

___

### render

• `Optional` **render**: [`ToastContent`](../modules/services.md#toastcontent)\<`T`\>

Used to update a toast.
Pass any valid ReactNode(string, number, component)

#### Defined in

[src/services/toastService.ts:182](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L182)

___

### role

• `Optional` **role**: ``null`` \| `string`

Define the ARIA role for the toast
`Default: alert`
 https://www.w3.org/WAI/PF/aria/roles

#### Inherited from

Nullable.role

#### Defined in

[src/services/toastService.ts:91](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L91)

___

### rtl

• `Optional` **rtl**: ``null`` \| `boolean`

Support right to left display.
`Default: false`

#### Inherited from

Nullable.rtl

#### Defined in

[src/services/toastService.ts:107](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L107)

___

### style

• `Optional` **style**: ``null`` \| `CSSProperties`

An optional inline style to apply.

#### Inherited from

Nullable.style

#### Defined in

[src/services/toastService.ts:133](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L133)

___

### toastId

• `Optional` **toastId**: ``null`` \| `string`

Set a custom `toastId`

#### Inherited from

Nullable.toastId

#### Defined in

[src/services/toastService.ts:142](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L142)

___

### type

• `Optional` **type**: ``null`` \| [`TypeOptions`](../modules/services.md#typeoptions)

Set the toast type.
`One of: 'info', 'success', 'warning', 'error', 'default'`

#### Inherited from

Nullable.type

#### Defined in

[src/services/toastService.ts:138](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L138)

___

### updateId

• `Optional` **updateId**: ``null`` \| `string`

Used during update

#### Inherited from

Nullable.updateId

#### Defined in

[src/services/toastService.ts:146](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L146)
