# Interface: IEditorGroup\<E, T\>

[model](../modules/model.md).IEditorGroup

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `any` |
| `T` | `any` |

## Hierarchy

- `ITabsProps`

  ↳ **`IEditorGroup`**

## Implemented by

- [`EditorGroupModel`](../classes/model.EditorGroupModel.md)

## Table of contents

### Properties

- [actions](model.IEditorGroup.md#actions)
- [activeTab](model.IEditorGroup.md#activetab)
- [className](model.IEditorGroup.md#classname)
- [closable](model.IEditorGroup.md#closable)
- [data](model.IEditorGroup.md#data)
- [editable](model.IEditorGroup.md#editable)
- [editorInstance](model.IEditorGroup.md#editorinstance)
- [id](model.IEditorGroup.md#id)
- [menu](model.IEditorGroup.md#menu)
- [onCloseTab](model.IEditorGroup.md#onclosetab)
- [onContextMenu](model.IEditorGroup.md#oncontextmenu)
- [onMoveTab](model.IEditorGroup.md#onmovetab)
- [onSelectTab](model.IEditorGroup.md#onselecttab)
- [role](model.IEditorGroup.md#role)
- [style](model.IEditorGroup.md#style)
- [tab](model.IEditorGroup.md#tab)
- [type](model.IEditorGroup.md#type)

## Properties

### actions

• `Optional` **actions**: [`IEditorActionsProps`](model.IEditorActionsProps.md)[]

#### Defined in

[src/model/workbench/editor.ts:59](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L59)

___

### activeTab

• `Optional` **activeTab**: `UniqueId`

#### Inherited from

ITabsProps.activeTab

#### Defined in

[src/components/tabs/index.tsx:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L35)

___

### className

• `Optional` **className**: `string`

#### Inherited from

ITabsProps.className

#### Defined in

[src/components/tabs/index.tsx:23](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L23)

___

### closable

• `Optional` **closable**: `boolean`

**`Deprecated`**

For now, we don't need to control the global closable

#### Inherited from

ITabsProps.closable

#### Defined in

[src/components/tabs/index.tsx:29](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L29)

___

### data

• `Optional` **data**: `ITabProps`\<`any`, `any`\>[]

#### Inherited from

ITabsProps.data

#### Defined in

[src/components/tabs/index.tsx:34](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L34)

___

### editable

• `Optional` **editable**: `boolean`

**`Deprecated`**

For now, we don't need to control the global editable

#### Inherited from

ITabsProps.editable

#### Defined in

[src/components/tabs/index.tsx:33](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L33)

___

### editorInstance

• `Optional` **editorInstance**: `E`

#### Defined in

[src/model/workbench/editor.ts:61](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L61)

___

### id

• **id**: `UniqueId`

#### Defined in

[src/model/workbench/editor.ts:54](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L54)

___

### menu

• `Optional` **menu**: `IMenuItemProps`[]

#### Defined in

[src/model/workbench/editor.ts:60](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L60)

___

### onCloseTab

• `Optional` **onCloseTab**: (`key`: `UniqueId`) => `void`

#### Type declaration

▸ (`key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `UniqueId` |

##### Returns

`void`

#### Inherited from

ITabsProps.onCloseTab

#### Defined in

[src/components/tabs/index.tsx:40](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L40)

___

### onContextMenu

• `Optional` **onContextMenu**: (`e`: `MouseEvent`\<`Element`, `MouseEvent`\>, `tab`: `ITabProps`\<`any`, `any`\>) => `void`

#### Type declaration

▸ (`e`, `tab`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent`\<`Element`, `MouseEvent`\> |
| `tab` | `ITabProps`\<`any`, `any`\> |

##### Returns

`void`

#### Inherited from

ITabsProps.onContextMenu

#### Defined in

[src/components/tabs/index.tsx:41](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L41)

___

### onMoveTab

• `Optional` **onMoveTab**: (`tabs`: `ITabProps`\<`any`, `any`\>[]) => `void`

#### Type declaration

▸ (`tabs`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tabs` | `ITabProps`\<`any`, `any`\>[] |

##### Returns

`void`

#### Inherited from

ITabsProps.onMoveTab

#### Defined in

[src/components/tabs/index.tsx:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L42)

___

### onSelectTab

• `Optional` **onSelectTab**: (`key`: `UniqueId`) => `void`

#### Type declaration

▸ (`key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `UniqueId` |

##### Returns

`void`

#### Inherited from

ITabsProps.onSelectTab

#### Defined in

[src/components/tabs/index.tsx:43](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L43)

___

### role

• `Optional` **role**: `string`

#### Inherited from

ITabsProps.role

#### Defined in

[src/components/tabs/index.tsx:25](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L25)

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

ITabsProps.style

#### Defined in

[src/components/tabs/index.tsx:24](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L24)

___

### tab

• `Optional` **tab**: [`IEditorTab`](model.IEditorTab.md)\<`T`\>

Current editor group tab

#### Defined in

[src/model/workbench/editor.ts:58](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L58)

___

### type

• `Optional` **type**: `TabsType`

Default is line

#### Inherited from

ITabsProps.type

#### Defined in

[src/components/tabs/index.tsx:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/index.tsx#L39)
