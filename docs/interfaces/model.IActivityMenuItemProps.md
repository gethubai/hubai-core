# Interface: IActivityMenuItemProps

[model](../modules/model.md).IActivityMenuItemProps

## Hierarchy

- `IMenuItemProps`

  ↳ **`IActivityMenuItemProps`**

## Table of contents

### Properties

- [className](model.IActivityMenuItemProps.md#classname)
- [disabled](model.IActivityMenuItemProps.md#disabled)
- [icon](model.IActivityMenuItemProps.md#icon)
- [id](model.IActivityMenuItemProps.md#id)
- [keybinding](model.IActivityMenuItemProps.md#keybinding)
- [name](model.IActivityMenuItemProps.md#name)
- [onClick](model.IActivityMenuItemProps.md#onclick)
- [render](model.IActivityMenuItemProps.md#render)
- [role](model.IActivityMenuItemProps.md#role)
- [sortIndex](model.IActivityMenuItemProps.md#sortindex)
- [style](model.IActivityMenuItemProps.md#style)
- [title](model.IActivityMenuItemProps.md#title)
- [type](model.IActivityMenuItemProps.md#type)

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

[src/model/workbench/activityBar.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/activityBar.ts#L32)

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
