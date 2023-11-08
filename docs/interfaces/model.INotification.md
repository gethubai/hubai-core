# Interface: INotification\<T\>

[model](../modules/model.md).INotification

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`IStatusBarItem`](model.IStatusBarItem.md)\<[`INotificationItem`](model.INotificationItem.md)\<`T`\>[]\>

  ↳ **`INotification`**

## Implemented by

- [`NotificationModel`](../classes/model.NotificationModel.md)

## Table of contents

### Properties

- [actionBar](model.INotification.md#actionbar)
- [className](model.INotification.md#classname)
- [data](model.INotification.md#data)
- [id](model.INotification.md#id)
- [name](model.INotification.md#name)
- [render](model.INotification.md#render)
- [role](model.INotification.md#role)
- [showNotifications](model.INotification.md#shownotifications)
- [sortIndex](model.INotification.md#sortindex)
- [style](model.INotification.md#style)
- [title](model.INotification.md#title)

### Methods

- [onClick](model.INotification.md#onclick)

## Properties

### actionBar

• `Optional` **actionBar**: `IActionBarItemProps`\<`any`\>[]

#### Defined in

[src/model/notification.tsx:21](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L21)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[className](model.IStatusBarItem.md#classname)

#### Defined in

[src/common/types.ts:4](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L4)

___

### data

• `Optional` **data**: [`INotificationItem`](model.INotificationItem.md)\<`T`\>[]

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[data](model.IStatusBarItem.md#data)

#### Defined in

[src/model/workbench/statusBar.tsx:13](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L13)

___

### id

• **id**: `UniqueId`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[id](model.IStatusBarItem.md#id)

#### Defined in

[src/model/workbench/statusBar.tsx:11](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L11)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[name](model.IStatusBarItem.md#name)

#### Defined in

[src/model/workbench/statusBar.tsx:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L16)

___

### render

• `Optional` **render**: (`item`: [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\>) => `ReactNode`

#### Type declaration

▸ (`item`): `ReactNode`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\> |

##### Returns

`ReactNode`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[render](model.IStatusBarItem.md#render)

#### Defined in

[src/model/workbench/statusBar.tsx:15](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L15)

___

### role

• `Optional` **role**: `string`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[role](model.IStatusBarItem.md#role)

#### Defined in

[src/common/types.ts:5](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L5)

___

### showNotifications

• `Optional` **showNotifications**: `boolean`

#### Defined in

[src/model/notification.tsx:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L20)

___

### sortIndex

• `Optional` **sortIndex**: `number`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[sortIndex](model.IStatusBarItem.md#sortindex)

#### Defined in

[src/model/workbench/statusBar.tsx:12](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L12)

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[style](model.IStatusBarItem.md#style)

#### Defined in

[src/common/types.ts:3](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L3)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[title](model.IStatusBarItem.md#title)

#### Defined in

[src/common/types.ts:2](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L2)

## Methods

### onClick

▸ **onClick**(`e`, `item?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent`\<`Element`, `MouseEvent`\> |
| `item?` | [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\> |

#### Returns

`any`

#### Inherited from

[IStatusBarItem](model.IStatusBarItem.md).[onClick](model.IStatusBarItem.md#onclick)

#### Defined in

[src/model/workbench/statusBar.tsx:14](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L14)
