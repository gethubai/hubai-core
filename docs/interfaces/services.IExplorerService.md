# Interface: IExplorerService

[services](../modules/services.md).IExplorerService

## Hierarchy

- `Component`\<[`IExplorer`](model.IExplorer.md)\>

  ↳ **`IExplorerService`**

## Table of contents

### Properties

- [state](services.IExplorerService.md#state)

### Methods

- [addAction](services.IExplorerService.md#addaction)
- [addPanel](services.IExplorerService.md#addpanel)
- [getAction](services.IExplorerService.md#getaction)
- [onClick](services.IExplorerService.md#onclick)
- [onCollapseAllFolders](services.IExplorerService.md#oncollapseallfolders)
- [onPanelToolbarClick](services.IExplorerService.md#onpaneltoolbarclick)
- [onRemovePanel](services.IExplorerService.md#onremovepanel)
- [removeAction](services.IExplorerService.md#removeaction)
- [removePanel](services.IExplorerService.md#removepanel)
- [reset](services.IExplorerService.md#reset)
- [setExpandedPanels](services.IExplorerService.md#setexpandedpanels)
- [subscribe](services.IExplorerService.md#subscribe)
- [toggleHeaderBar](services.IExplorerService.md#toggleheaderbar)
- [togglePanel](services.IExplorerService.md#togglepanel)
- [unsubscribe](services.IExplorerService.md#unsubscribe)
- [updateAction](services.IExplorerService.md#updateaction)
- [updatePanel](services.IExplorerService.md#updatepanel)

## Properties

### state

• `Protected` `Abstract` **state**: [`IExplorer`](model.IExplorer.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/react/component.ts#L44)

## Methods

### addAction

▸ **addAction**(`action`): `void`

Only add an action in toolbar actions

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `IMenuItemProps` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L39)

___

### addPanel

▸ **addPanel**(`panel`): `void`

Add a new panel, as well as add a new data for toolbar data

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`IExplorerPanelItem`](model.IExplorerPanelItem.md) \| [`IExplorerPanelItem`](model.IExplorerPanelItem.md)[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:14](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L14)

___

### getAction

▸ **getAction**(`id`): `undefined` \| `IMenuItemProps`

Get the specific action in toolbar actions

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`undefined` \| `IMenuItemProps`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L44)

___

### onClick

▸ **onClick**(`callback`): `any`

Listen to the Explorer header toolbar click event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`e`: `MouseEvent`, `item`: `IActionBarItemProps`\<`any`\>) => `void` |

#### Returns

`any`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:63](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L63)

___

### onCollapseAllFolders

▸ **onCollapseAllFolders**(`callback`): `void`

Listen to the FolderTree Panel collapse all folders event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:73](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L73)

___

### onPanelToolbarClick

▸ **onPanelToolbarClick**(`callback`): `void`

Listen to the Explorer panel toolbar click event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`panel`: [`IExplorerPanelItem`](model.IExplorerPanelItem.md), `toolbarId`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:78](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L78)

___

### onRemovePanel

▸ **onRemovePanel**(`callback`): `void`

Listen to the Explorer panel remove event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`panel`: [`IExplorerPanelItem`](model.IExplorerPanelItem.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:68](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L68)

___

### removeAction

▸ **removeAction**(`id`): `void`

Remove the specific header toolbar action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `UniqueId` | action id |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:54](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L54)

___

### removePanel

▸ **removePanel**(`id`): `void`

Remove a panel via id, as well as remove the corresponding action bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:27](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L27)

___

### reset

▸ **reset**(): `void`

Reset the ExplorerService state, it's mainly for customizing the Explorer

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:58](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L58)

___

### setExpandedPanels

▸ **setExpandedPanels**(`activePanelKeys`): `void`

Set expanded Panels of Explore

#### Parameters

| Name | Type |
| :------ | :------ |
| `activePanelKeys` | `UniqueId`[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:23](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L23)

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

### toggleHeaderBar

▸ **toggleHeaderBar**(`id`): `void`

Only toggle the toolbar status

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L35)

___

### togglePanel

▸ **togglePanel**(`id`): `void`

Toggle panel hidden, as well as toggle the toolbar status

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L31)

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

### updateAction

▸ **updateAction**(`action`): `void`

Update the action in toolbar actions

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `Partial`\<`IMenuItemProps`\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:49](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L49)

___

### updatePanel

▸ **updatePanel**(`data`): `void`

Update the panels data, as well as modify toolbar data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`IExplorerPanelItem`](model.IExplorerPanelItem.md)\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/explorerService.ts:18](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/explorer/explorerService.ts#L18)
