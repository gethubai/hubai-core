# Interface: INotificationItem\<T\>

[model](../modules/model.md).INotificationItem

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Properties

- [id](model.INotificationItem.md#id)
- [status](model.INotificationItem.md#status)
- [value](model.INotificationItem.md#value)

### Methods

- [render](model.INotificationItem.md#render)

## Properties

### id

• **id**: `UniqueId`

#### Defined in

[src/model/notification.tsx:12](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L12)

___

### status

• `Optional` **status**: [`NotificationStatus`](../enums/model.NotificationStatus.md)

#### Defined in

[src/model/notification.tsx:15](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L15)

___

### value

• **value**: `T`

#### Defined in

[src/model/notification.tsx:13](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L13)

## Methods

### render

▸ **render**(`item`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`INotificationItem`](model.INotificationItem.md)\<`any`\> |

#### Returns

`ReactNode`

#### Defined in

[src/model/notification.tsx:14](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L14)
