# Interface: INotificationService

[services](../modules/services.md).INotificationService

## Hierarchy

- `Component`\<[`INotification`](model.INotification.md)\>

  ↳ **`INotificationService`**

## Table of contents

### Properties

- [state](services.INotificationService.md#state)

### Methods

- [add](services.INotificationService.md#add)
- [clear](services.INotificationService.md#clear)
- [remove](services.INotificationService.md#remove)
- [reset](services.INotificationService.md#reset)
- [subscribe](services.INotificationService.md#subscribe)
- [toggleNotification](services.INotificationService.md#togglenotification)
- [unsubscribe](services.INotificationService.md#unsubscribe)
- [update](services.INotificationService.md#update)

## Properties

### state

• `Protected` `Abstract` **state**: [`INotification`](model.INotification.md)\<`any`\>

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### add

▸ **add**\<`T`\>(`items`): ``null`` \| [`INotificationItem`](model.INotificationItem.md)\<`T`\>[]

Add new notification items

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`INotificationItem`](model.INotificationItem.md)\<`T`\>[] |

#### Returns

``null`` \| [`INotificationItem`](model.INotificationItem.md)\<`T`\>[]

#### Defined in

[src/services/notificationService.ts:14](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/notificationService.ts#L14)

___

### clear

▸ **clear**(): `void`

Clear the notifications

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/notificationService.ts#L32)

___

### remove

▸ **remove**(`id`): `void`

Remove the specific notification item by id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:19](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/notificationService.ts#L19)

___

### reset

▸ **reset**(): `void`

Reset notifications, this will clear the pending notifications

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/notificationService.ts#L36)

___

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` \| `string`[] | Event name |
| `listener` | `Function` | Listener function |

#### Returns

`void`

#### Inherited from

Component.subscribe

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/event/eventBus.ts#L11)

___

### toggleNotification

▸ **toggleNotification**(): `void`

Toggle the Notification view between display or hidden

#### Returns

`void`

#### Defined in

[src/services/notificationService.ts:28](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/notificationService.ts#L28)

___

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `any` | The event name |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

Component.unsubscribe

#### Defined in

[src/common/event/eventBus.ts:39](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/event/eventBus.ts#L39)

___

### update

▸ **update**\<`T`\>(`item`): ``null`` \| [`INotificationItem`](model.INotificationItem.md)\<`T`\>

Update the specific notification item

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`INotificationItem`](model.INotificationItem.md)\<`T`\> | notification item, the id field is required |

#### Returns

``null`` \| [`INotificationItem`](model.INotificationItem.md)\<`T`\>

#### Defined in

[src/services/notificationService.ts:24](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/notificationService.ts#L24)
