# Interface: ToastProps

[services](../modules/services.md).ToastProps

## Hierarchy

- [`ToastOptions`](services.ToastOptions.md)

  ↳ **`ToastProps`**

## Table of contents

### Properties

- [autoClose](services.ToastProps.md#autoclose)
- [bodyStyle](services.ToastProps.md#bodystyle)
- [children](services.ToastProps.md#children)
- [closeOnClick](services.ToastProps.md#closeonclick)
- [closeToast](services.ToastProps.md#closetoast)
- [containerId](services.ToastProps.md#containerid)
- [data](services.ToastProps.md#data)
- [delay](services.ToastProps.md#delay)
- [deleteToast](services.ToastProps.md#deletetoast)
- [draggable](services.ToastProps.md#draggable)
- [draggableDirection](services.ToastProps.md#draggabledirection)
- [draggablePercent](services.ToastProps.md#draggablepercent)
- [hideProgressBar](services.ToastProps.md#hideprogressbar)
- [icon](services.ToastProps.md#icon)
- [iconOut](services.ToastProps.md#iconout)
- [isIn](services.ToastProps.md#isin)
- [isLoading](services.ToastProps.md#isloading)
- [key](services.ToastProps.md#key)
- [onClick](services.ToastProps.md#onclick)
- [onClose](services.ToastProps.md#onclose)
- [onOpen](services.ToastProps.md#onopen)
- [pauseOnFocusLoss](services.ToastProps.md#pauseonfocusloss)
- [pauseOnHover](services.ToastProps.md#pauseonhover)
- [position](services.ToastProps.md#position)
- [progress](services.ToastProps.md#progress)
- [progressStyle](services.ToastProps.md#progressstyle)
- [role](services.ToastProps.md#role)
- [rtl](services.ToastProps.md#rtl)
- [staleId](services.ToastProps.md#staleid)
- [style](services.ToastProps.md#style)
- [toastId](services.ToastProps.md#toastid)
- [type](services.ToastProps.md#type)
- [updateId](services.ToastProps.md#updateid)

## Properties

### autoClose

• `Optional` **autoClose**: `number` \| ``false``

Set the delay in ms to close the toast automatically.
Use `false` to prevent the toast from closing.
`Default: 5000`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[autoClose](services.ToastOptions.md#autoclose)

#### Defined in

[src/services/toastService.ts:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L48)

___

### bodyStyle

• `Optional` **bodyStyle**: `CSSProperties`

An optional inline style to apply for the toast content.

#### Inherited from

[ToastOptions](services.ToastOptions.md).[bodyStyle](services.ToastOptions.md#bodystyle)

#### Defined in

[src/services/toastService.ts:64](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L64)

___

### children

• `Optional` **children**: [`ToastContent`](../modules/services.md#toastcontent)\<`unknown`\>

#### Defined in

[src/services/toastService.ts:166](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L166)

___

### closeOnClick

• `Optional` **closeOnClick**: `boolean`

Remove the toast when clicked.
`Default: true`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[closeOnClick](services.ToastOptions.md#closeonclick)

#### Defined in

[src/services/toastService.ts:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L42)

___

### closeToast

• **closeToast**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/services/toastService.ts:164](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L164)

___

### containerId

• `Optional` **containerId**: `string`

Set id to handle multiple container

#### Inherited from

[ToastOptions](services.ToastOptions.md).[containerId](services.ToastOptions.md#containerid)

#### Defined in

[src/services/toastService.ts:95](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L95)

___

### data

• `Optional` **data**: `Object`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[data](services.ToastOptions.md#data)

#### Defined in

[src/services/toastService.ts:156](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L156)

___

### delay

• `Optional` **delay**: `number`

Add a delay in ms before the toast appear.

#### Inherited from

[ToastOptions](services.ToastOptions.md).[delay](services.ToastOptions.md#delay)

#### Defined in

[src/services/toastService.ts:154](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L154)

___

### deleteToast

• **deleteToast**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/services/toastService.ts:169](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L169)

___

### draggable

• `Optional` **draggable**: `boolean`

Allow toast to be draggable
`Default: true`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[draggable](services.ToastOptions.md#draggable)

#### Defined in

[src/services/toastService.ts:75](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L75)

___

### draggableDirection

• `Optional` **draggableDirection**: [`DraggableDirection`](../modules/services.md#draggabledirection)

Specify in which direction should you swipe to dismiss the toast
`Default: "x"`

#### Overrides

[ToastOptions](services.ToastOptions.md).[draggableDirection](services.ToastOptions.md#draggabledirection)

#### Defined in

[src/services/toastService.ts:168](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L168)

___

### draggablePercent

• **draggablePercent**: `number`

The percentage of the toast's width it takes for a drag to dismiss a toast
`Default: 80`

#### Overrides

[ToastOptions](services.ToastOptions.md).[draggablePercent](services.ToastOptions.md#draggablepercent)

#### Defined in

[src/services/toastService.ts:167](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L167)

___

### hideProgressBar

• `Optional` **hideProgressBar**: `boolean`

Hide or show the progress bar.
`Default: false`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[hideProgressBar](services.ToastOptions.md#hideprogressbar)

#### Defined in

[src/services/toastService.ts:69](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L69)

___

### icon

• `Optional` **icon**: [`ToastIcon`](../modules/services.md#toasticon)

Used to display a custom icon. Set it to `false` to prevent
the icons from being displayed

#### Inherited from

[ToastOptions](services.ToastOptions.md).[icon](services.ToastOptions.md#icon)

#### Defined in

[src/services/toastService.ts:112](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L112)

___

### iconOut

• `Optional` **iconOut**: `ReactNode`

#### Defined in

[src/services/toastService.ts:171](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L171)

___

### isIn

• **isIn**: `boolean`

#### Defined in

[src/services/toastService.ts:160](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L160)

___

### isLoading

• `Optional` **isLoading**: `boolean`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[isLoading](services.ToastOptions.md#isloading)

#### Defined in

[src/services/toastService.ts:155](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L155)

___

### key

• **key**: `string`

#### Defined in

[src/services/toastService.ts:163](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L163)

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

[ToastOptions](services.ToastOptions.md).[onClick](services.ToastOptions.md#onclick)

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

#### Inherited from

[ToastOptions](services.ToastOptions.md).[onClose](services.ToastOptions.md#onclose)

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

#### Inherited from

[ToastOptions](services.ToastOptions.md).[onOpen](services.ToastOptions.md#onopen)

#### Defined in

[src/services/toastService.ts:122](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L122)

___

### pauseOnFocusLoss

• `Optional` **pauseOnFocusLoss**: `boolean`

Pause the toast when the window loses focus.
`Default: true`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[pauseOnFocusLoss](services.ToastOptions.md#pauseonfocusloss)

#### Defined in

[src/services/toastService.ts:37](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L37)

___

### pauseOnHover

• `Optional` **pauseOnHover**: `boolean`

Pause the timer when the mouse hover the toast.
`Default: true`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[pauseOnHover](services.ToastOptions.md#pauseonhover)

#### Defined in

[src/services/toastService.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L32)

___

### position

• **position**: [`ToastPosition`](../modules/services.md#toastposition)

Set the default position to use.
`One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
`Default: 'top-right'`

#### Overrides

[ToastOptions](services.ToastOptions.md).[position](services.ToastOptions.md#position)

#### Defined in

[src/services/toastService.ts:165](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L165)

___

### progress

• `Optional` **progress**: `string` \| `number`

Set the percentage for the controlled progress bar. `Value must be between 0 and 1.`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[progress](services.ToastOptions.md#progress)

#### Defined in

[src/services/toastService.ts:150](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L150)

___

### progressStyle

• `Optional` **progressStyle**: `CSSProperties`

An optional style to set for the progress bar.

#### Inherited from

[ToastOptions](services.ToastOptions.md).[progressStyle](services.ToastOptions.md#progressstyle)

#### Defined in

[src/services/toastService.ts:59](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L59)

___

### role

• `Optional` **role**: `string`

Define the ARIA role for the toast
`Default: alert`
 https://www.w3.org/WAI/PF/aria/roles

#### Inherited from

[ToastOptions](services.ToastOptions.md).[role](services.ToastOptions.md#role)

#### Defined in

[src/services/toastService.ts:91](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L91)

___

### rtl

• `Optional` **rtl**: `boolean`

Support right to left display.
`Default: false`

#### Inherited from

[ToastOptions](services.ToastOptions.md).[rtl](services.ToastOptions.md#rtl)

#### Defined in

[src/services/toastService.ts:107](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L107)

___

### staleId

• `Optional` **staleId**: `string`

#### Defined in

[src/services/toastService.ts:161](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L161)

___

### style

• `Optional` **style**: `CSSProperties`

An optional inline style to apply.

#### Inherited from

[ToastOptions](services.ToastOptions.md).[style](services.ToastOptions.md#style)

#### Defined in

[src/services/toastService.ts:133](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L133)

___

### toastId

• **toastId**: `string`

Set a custom `toastId`

#### Overrides

[ToastOptions](services.ToastOptions.md).[toastId](services.ToastOptions.md#toastid)

#### Defined in

[src/services/toastService.ts:162](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L162)

___

### type

• **type**: [`TypeOptions`](../modules/services.md#typeoptions)

Set the toast type.
`One of: 'info', 'success', 'warning', 'error', 'default'`

#### Overrides

[ToastOptions](services.ToastOptions.md).[type](services.ToastOptions.md#type)

#### Defined in

[src/services/toastService.ts:170](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L170)

___

### updateId

• `Optional` **updateId**: `string`

Used during update

#### Inherited from

[ToastOptions](services.ToastOptions.md).[updateId](services.ToastOptions.md#updateid)

#### Defined in

[src/services/toastService.ts:146](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/toastService.ts#L146)
