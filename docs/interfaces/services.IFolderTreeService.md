# Interface: IFolderTreeService

[services](../modules/services.md).IFolderTreeService

## Hierarchy

- `Component`\<[`IFolderTree`](model.IFolderTree.md)\>

  ↳ **`IFolderTreeService`**

## Table of contents

### Properties

- [getExpandKeys](services.IFolderTreeService.md#getexpandkeys)
- [getFileContextMenu](services.IFolderTreeService.md#getfilecontextmenu)
- [getFolderContextMenu](services.IFolderTreeService.md#getfoldercontextmenu)
- [getLoadedKeys](services.IFolderTreeService.md#getloadedkeys)
- [setExpandKeys](services.IFolderTreeService.md#setexpandkeys)
- [setFileContextMenu](services.IFolderTreeService.md#setfilecontextmenu)
- [setFolderContextMenu](services.IFolderTreeService.md#setfoldercontextmenu)
- [setLoadedKeys](services.IFolderTreeService.md#setloadedkeys)
- [state](services.IFolderTreeService.md#state)

### Methods

- [add](services.IFolderTreeService.md#add)
- [get](services.IFolderTreeService.md#get)
- [getParentNode](services.IFolderTreeService.md#getparentnode)
- [onContextMenu](services.IFolderTreeService.md#oncontextmenu)
- [onCreate](services.IFolderTreeService.md#oncreate)
- [onDropTree](services.IFolderTreeService.md#ondroptree)
- [onExpandKeys](services.IFolderTreeService.md#onexpandkeys)
- [onLoadData](services.IFolderTreeService.md#onloaddata)
- [onRemove](services.IFolderTreeService.md#onremove)
- [onRename](services.IFolderTreeService.md#onrename)
- [onRightClick](services.IFolderTreeService.md#onrightclick)
- [onSelectFile](services.IFolderTreeService.md#onselectfile)
- [onUpdateFileName](services.IFolderTreeService.md#onupdatefilename)
- [remove](services.IFolderTreeService.md#remove)
- [reset](services.IFolderTreeService.md#reset)
- [setActive](services.IFolderTreeService.md#setactive)
- [setEntry](services.IFolderTreeService.md#setentry)
- [subscribe](services.IFolderTreeService.md#subscribe)
- [toggleAutoSort](services.IFolderTreeService.md#toggleautosort)
- [unsubscribe](services.IFolderTreeService.md#unsubscribe)
- [update](services.IFolderTreeService.md#update)

## Properties

### getExpandKeys

• **getExpandKeys**: () => `UniqueId`[]

#### Type declaration

▸ (): `UniqueId`[]

Get the expandKeys in folderTree

##### Returns

`UniqueId`[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:52](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L52)

___

### getFileContextMenu

• **getFileContextMenu**: () => `IMenuItemProps`[]

#### Type declaration

▸ (): `IMenuItemProps`[]

Get the context menus for file

##### Returns

`IMenuItemProps`[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L44)

___

### getFolderContextMenu

• **getFolderContextMenu**: () => `IMenuItemProps`[]

#### Type declaration

▸ (): `IMenuItemProps`[]

Get the context menus for folder

##### Returns

`IMenuItemProps`[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:48](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L48)

___

### getLoadedKeys

• **getLoadedKeys**: () => `string`[]

#### Type declaration

▸ (): `string`[]

Get the loadedKeys for folderTree

##### Returns

`string`[]

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:60](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L60)

___

### setExpandKeys

• **setExpandKeys**: (`expandKeys`: `UniqueId`[]) => `void`

#### Type declaration

▸ (`expandKeys`): `void`

Set the expandKeys for folderTree

##### Parameters

| Name | Type |
| :------ | :------ |
| `expandKeys` | `UniqueId`[] |

##### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:56](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L56)

___

### setFileContextMenu

• **setFileContextMenu**: (`menus`: `IMenuItemProps`[]) => `void`

#### Type declaration

▸ (`menus`): `void`

Set the context menus for file

##### Parameters

| Name | Type |
| :------ | :------ |
| `menus` | `IMenuItemProps`[] |

##### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:80](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L80)

___

### setFolderContextMenu

• **setFolderContextMenu**: (`menus`: `IMenuItemProps`[]) => `void`

#### Type declaration

▸ (`menus`): `void`

Set the context menus for folder

##### Parameters

| Name | Type |
| :------ | :------ |
| `menus` | `IMenuItemProps`[] |

##### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:85](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L85)

___

### setLoadedKeys

• **setLoadedKeys**: (`loadedKeys`: `string`[]) => `void`

#### Type declaration

▸ (`loadedKeys`): `void`

Set the loadedKeys for folderTree

##### Parameters

| Name | Type |
| :------ | :------ |
| `loadedKeys` | `string`[] |

##### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:64](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L64)

___

### state

• `Protected` `Abstract` **state**: [`IFolderTree`](model.IFolderTree.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`data`, `id?`): `void`

Add data into folder tree

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md) |  |
| `id?` | `UniqueId` | Except adding a root folder, the id is required |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L20)

___

### get

▸ **get**(`id`): ``null`` \| [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)

Get specific data in folder tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

``null`` \| [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:35](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L35)

___

### getParentNode

▸ **getParentNode**(`id`): ``null`` \| [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)

get the current treeNode's parentNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

``null`` \| [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:40](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L40)

___

### onContextMenu

▸ **onContextMenu**(`callback`): `void`

Listen to the click event about the context menu except for built-in menus

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`contextMenu`: `IMenuItemProps`, `treeNode?`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:132](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L132)

___

### onCreate

▸ **onCreate**(`callback`): `void`

Listen to create a node for folder tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`type`: ``"File"`` \| ``"Folder"`` \| ``"RootFolder"``, `nodeId?`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:127](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L127)

___

### onDropTree

▸ **onDropTree**(`callback`): `void`

Listen to drop event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`source`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md), `target`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:110](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L110)

___

### onExpandKeys

▸ **onExpandKeys**(`callback`): `void`

Callback for expanding tree node

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`expandKeys`: `UniqueId`[]) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:152](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L152)

___

### onLoadData

▸ **onLoadData**(`callback`): `void`

Callback for load folder tree data

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`treeNode`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md), `callback`: (`treeNode`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)) => `void`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:142](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L142)

___

### onRemove

▸ **onRemove**(`callback`): `void`

Listen to remove a node

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`id`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:95](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L95)

___

### onRename

▸ **onRename**(`callback`): `void`

Listen to event about clicking rename button

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`id`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:90](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L90)

___

### onRightClick

▸ **onRightClick**(`callback`): `void`

Listen to right click event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`treeData`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md), `menus`: `IMenuItemProps`[]) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:120](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L120)

___

### onSelectFile

▸ **onSelectFile**(`callback`): `void`

Listen to select a file

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`file`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:105](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L105)

___

### onUpdateFileName

▸ **onUpdateFileName**(`callback`): `void`

Listen to update file or folder name

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`file`: [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:100](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L100)

___

### remove

▸ **remove**(`id`): `void`

Remove specific data in folder tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:25](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L25)

___

### reset

▸ **reset**(): `void`

Reset the FolderTreeService state

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:14](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L14)

___

### setActive

▸ **setActive**(`id?`): `void`

Active specific node,
or unactive any node in folder tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:70](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L70)

___

### setEntry

▸ **setEntry**(`entry`): `void`

Set a entry page for folder tree

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | `ReactNode` |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:75](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L75)

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

### toggleAutoSort

▸ **toggleAutoSort**(): `void`

Toggle whether to enable sorting, which is disabled by default.

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:156](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L156)

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

▸ **update**(`data`): `void`

Update specific data in folder tree

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IFolderTreeNodeProps`](model.IFolderTreeNodeProps.md) | The `id` property is required in data |

#### Returns

`void`

#### Defined in

[src/services/workbench/explorer/folderTreeService.ts:30](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/workbench/explorer/folderTreeService.ts#L30)
