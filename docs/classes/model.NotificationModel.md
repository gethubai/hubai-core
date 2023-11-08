# Class: NotificationModel\<T\>

[model](../modules/model.md).NotificationModel

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`INotification`](../interfaces/model.INotification.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](model.NotificationModel.md#constructor)

### Properties

- [actionBar](model.NotificationModel.md#actionbar)
- [data](model.NotificationModel.md#data)
- [id](model.NotificationModel.md#id)
- [name](model.NotificationModel.md#name)
- [render](model.NotificationModel.md#render)
- [showNotifications](model.NotificationModel.md#shownotifications)
- [sortIndex](model.NotificationModel.md#sortindex)

## Constructors

### constructor

• **new NotificationModel**\<`T`\>(`id?`, `name?`, `data?`, `sortIndex?`, `showNotifications?`, `actionBar?`, `render`): [`NotificationModel`](model.NotificationModel.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `UniqueId` | `''` |
| `name` | `string` | `''` |
| `data` | [`INotificationItem`](../interfaces/model.INotificationItem.md)\<`T`\>[] | `[]` |
| `sortIndex` | `number` | `1` |
| `showNotifications` | `boolean` | `false` |
| `actionBar` | `IActionBarItemProps`\<`any`\>[] | `[]` |
| `render` | () => `ReactNode` | `undefined` |

#### Returns

[`NotificationModel`](model.NotificationModel.md)\<`T`\>

#### Defined in

[src/model/notification.tsx:39](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L39)

## Properties

### actionBar

• **actionBar**: `IActionBarItemProps`\<`any`\>[]

#### Implementation of

[INotification](../interfaces/model.INotification.md).[actionBar](../interfaces/model.INotification.md#actionbar)

#### Defined in

[src/model/notification.tsx:37](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L37)

___

### data

• **data**: [`INotificationItem`](../interfaces/model.INotificationItem.md)\<`T`\>[]

#### Implementation of

[INotification](../interfaces/model.INotification.md).[data](../interfaces/model.INotification.md#data)

#### Defined in

[src/model/notification.tsx:29](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L29)

___

### id

• **id**: `UniqueId`

#### Implementation of

[INotification](../interfaces/model.INotification.md).[id](../interfaces/model.INotification.md#id)

#### Defined in

[src/model/notification.tsx:25](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L25)

___

### name

• **name**: `string`

#### Implementation of

[INotification](../interfaces/model.INotification.md).[name](../interfaces/model.INotification.md#name)

#### Defined in

[src/model/notification.tsx:27](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L27)

___

### render

• **render**: () => `ReactNode`

#### Type declaration

▸ (): `ReactNode`

##### Returns

`ReactNode`

#### Implementation of

[INotification](../interfaces/model.INotification.md).[render](../interfaces/model.INotification.md#render)

#### Defined in

[src/model/notification.tsx:33](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L33)

___

### showNotifications

• **showNotifications**: `boolean`

#### Implementation of

[INotification](../interfaces/model.INotification.md).[showNotifications](../interfaces/model.INotification.md#shownotifications)

#### Defined in

[src/model/notification.tsx:35](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L35)

___

### sortIndex

• **sortIndex**: `number`

#### Implementation of

[INotification](../interfaces/model.INotification.md).[sortIndex](../interfaces/model.INotification.md#sortindex)

#### Defined in

[src/model/notification.tsx:31](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/notification.tsx#L31)
