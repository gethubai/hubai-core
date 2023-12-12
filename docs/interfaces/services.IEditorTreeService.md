# Interface: IEditorTreeService

[services](../modules/services.md).IEditorTreeService

## Hierarchy

- `Component`\<[`IEditor`](model.IEditor.md)\>

  ↳ **`IEditorTreeService`**

## Table of contents

### Properties

- [state](services.IEditorTreeService.md#state)

### Methods

- [onClose](services.IEditorTreeService.md#onclose)
- [onCloseAll](services.IEditorTreeService.md#oncloseall)
- [onCloseOthers](services.IEditorTreeService.md#oncloseothers)
- [onCloseSaved](services.IEditorTreeService.md#onclosesaved)
- [onContextMenu](services.IEditorTreeService.md#oncontextmenu)
- [onLayout](services.IEditorTreeService.md#onlayout)
- [onSaveAll](services.IEditorTreeService.md#onsaveall)
- [onSelect](services.IEditorTreeService.md#onselect)
- [onToolbarClick](services.IEditorTreeService.md#ontoolbarclick)
- [subscribe](services.IEditorTreeService.md#subscribe)
- [unsubscribe](services.IEditorTreeService.md#unsubscribe)

## Properties

### state

• `Protected` `Abstract` **state**: [`IEditor`](model.IEditor.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/react/component.ts#L44)

## Methods

### onClose

▸ **onClose**(`callback`): `void`

Callabck for close a certain tab

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabId`: `UniqueId`, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:11](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L11)

___

### onCloseAll

▸ **onCloseAll**(`callback`): `void`

Callback for close all tabs
When specify groupId, it'll close that group

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:34](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L34)

___

### onCloseOthers

▸ **onCloseOthers**(`callback`): `void`

Callback for close others tabs except this tabItem

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabItem`: [`IEditorTab`](model.IEditorTab.md)\<[`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md)\>, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:16](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L16)

___

### onCloseSaved

▸ **onCloseSaved**(`callback`): `void`

Callback for close saved tabs in this group

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:23](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L23)

___

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Callback for context menu click event which isn't in buit-in menus

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`menu`: `IMenuItemProps`, `file`: `ITabProps`\<`any`, `any`\>, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:58](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L58)

___

### onLayout

▸ **onLayout**(`callback`): `void`

Callback for adjust editor layout

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:53](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L53)

___

### onSaveAll

▸ **onSaveAll**(`callback`): `void`

Callback for save all tabs
When specify groupId, it'll save that group

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:40](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L40)

___

### onSelect

▸ **onSelect**(`callback`): `void`

Callback for select tab in this group

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tabId`: `UniqueId`, `groupId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:28](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L28)

___

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Callback for the click event from toolbar buttons, except for saving button and closing button,
if you want to subscribe to the click events for these two buttons, please use the methods of `onSaveAll` and `onCloseAll`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`toolbar`: `IActionBarItemProps`\<`any`\>, `groupId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/editorTreeService.ts:46](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/editorTreeService.ts#L46)

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
