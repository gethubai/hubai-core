# Interface: IEditorActionsProps

[model](../modules/model.md).IEditorActionsProps

## Hierarchy

- `IMenuItemProps`

  ↳ **`IEditorActionsProps`**

## Table of contents

### Properties

- [className](model.IEditorActionsProps.md#classname)
- [disabled](model.IEditorActionsProps.md#disabled)
- [icon](model.IEditorActionsProps.md#icon)
- [id](model.IEditorActionsProps.md#id)
- [keybinding](model.IEditorActionsProps.md#keybinding)
- [name](model.IEditorActionsProps.md#name)
- [onClick](model.IEditorActionsProps.md#onclick)
- [place](model.IEditorActionsProps.md#place)
- [render](model.IEditorActionsProps.md#render)
- [role](model.IEditorActionsProps.md#role)
- [sortIndex](model.IEditorActionsProps.md#sortindex)
- [style](model.IEditorActionsProps.md#style)
- [title](model.IEditorActionsProps.md#title)
- [type](model.IEditorActionsProps.md#type)

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

IMenuItemProps.className

#### Defined in

[src/common/types.ts:4](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L4)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

IMenuItemProps.disabled

#### Defined in

[src/components/menu/menuItem.tsx:26](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L26)

___

### icon

• `Optional` **icon**: `string` \| `Element`

The name of icon

#### Inherited from

IMenuItemProps.icon

#### Defined in

[src/components/menu/menuItem.tsx:20](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L20)

___

### id

• **id**: `UniqueId`

#### Overrides

IMenuItemProps.id

#### Defined in

[src/model/workbench/editor.ts:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L35)

___

### keybinding

• `Optional` **keybinding**: `string`

The description of keybinding
example: ⇧⌘P

#### Inherited from

IMenuItemProps.keybinding

#### Defined in

[src/components/menu/menuItem.tsx:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L31)

___

### name

• `Optional` **name**: `string`

Item Name

#### Inherited from

IMenuItemProps.name

#### Defined in

[src/components/menu/menuItem.tsx:25](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L25)

___

### onClick

• `Optional` **onClick**: (`e`: `MouseEvent`\<`Element`, `MouseEvent`\>, `item`: `IMenuItemProps`) => `void`

#### Type declaration

▸ (`e`, `item`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent`\<`Element`, `MouseEvent`\> |
| `item` | `IMenuItemProps` |

##### Returns

`void`

#### Inherited from

IMenuItemProps.onClick

#### Defined in

[src/components/menu/menuItem.tsx:36](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L36)

___

### place

• `Optional` **place**: ``"outer"`` \| ``"inner"``

Mark the action placed in More menus or outer

#### Defined in

[src/model/workbench/editor.ts:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L39)

___

### render

• `Optional` **render**: (`data`: `IMenuItemProps`) => `ReactNode`

#### Type declaration

▸ (`data`): `ReactNode`

Custom render

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `IMenuItemProps` |

##### Returns

`ReactNode`

#### Inherited from

IMenuItemProps.render

#### Defined in

[src/components/menu/menuItem.tsx:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L35)

___

### role

• `Optional` **role**: `string`

#### Inherited from

IMenuItemProps.role

#### Defined in

[src/common/types.ts:5](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L5)

___

### sortIndex

• `Optional` **sortIndex**: `number`

#### Inherited from

IMenuItemProps.sortIndex

#### Defined in

[src/components/menu/menuItem.tsx:37](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L37)

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

IMenuItemProps.style

#### Defined in

[src/common/types.ts:3](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L3)

___

### title

• `Optional` **title**: `string`

#### Inherited from

IMenuItemProps.title

#### Defined in

[src/common/types.ts:2](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L2)

___

### type

• `Optional` **type**: ``"divider"``

#### Inherited from

IMenuItemProps.type

#### Defined in

[src/components/menu/menuItem.tsx:21](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/menu/menuItem.tsx#L21)
