# Interface: ISidebarService

[services](../modules/services.md).ISidebarService

## Hierarchy

- `Component`\<[`ISidebar`](model.ISidebar.md)\>

  ↳ **`ISidebarService`**

## Table of contents

### Properties

- [state](services.ISidebarService.md#state)

### Methods

- [add](services.ISidebarService.md#add)
- [get](services.ISidebarService.md#get)
- [remove](services.ISidebarService.md#remove)
- [reset](services.ISidebarService.md#reset)
- [setActive](services.ISidebarService.md#setactive)
- [subscribe](services.ISidebarService.md#subscribe)
- [unsubscribe](services.ISidebarService.md#unsubscribe)
- [update](services.ISidebarService.md#update)

## Properties

### state

• `Protected` `Abstract` **state**: [`ISidebar`](model.ISidebar.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`pane`, `isActive?`): `void`

Add a new Sidebar pane

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pane` | [`ISidebarPane`](model.ISidebarPane.md) |  |
| `isActive?` | `boolean` | Whether to activate the current pane |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:17](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/sidebarService.ts#L17)

___

### get

▸ **get**(`id`): `undefined` \| [`ISidebarPane`](model.ISidebarPane.md)

Get a specific pane via id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`ISidebarPane`](model.ISidebarPane.md)

#### Defined in

[src/services/workbench/sidebarService.ts:11](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/sidebarService.ts#L11)

___

### remove

▸ **remove**(`id`): `void`

Remove a pane

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:27](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/sidebarService.ts#L27)

___

### reset

▸ **reset**(): `void`

Reset the sidebar data

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:36](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/sidebarService.ts#L36)

___

### setActive

▸ **setActive**(`id?`): `void`

Set the specific pane as active

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/sidebarService.ts#L32)

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

[src/common/event/eventBus.ts:11](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/event/eventBus.ts#L11)

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

[src/common/event/eventBus.ts:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/event/eventBus.ts#L39)

___

### update

▸ **update**(`pane`): `void`

Update a specific pane

#### Parameters

| Name | Type |
| :------ | :------ |
| `pane` | [`ISidebarPane`](model.ISidebarPane.md) |

#### Returns

`void`

#### Defined in

[src/services/workbench/sidebarService.ts:22](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/sidebarService.ts#L22)
