# Interface: IMenuBarItem

[model](../modules/model.md).IMenuBarItem

## Table of contents

### Properties

- [data](model.IMenuBarItem.md#data)
- [disabled](model.IMenuBarItem.md#disabled)
- [icon](model.IMenuBarItem.md#icon)
- [id](model.IMenuBarItem.md#id)
- [name](model.IMenuBarItem.md#name)
- [render](model.IMenuBarItem.md#render)

## Properties

### data

• `Optional` **data**: `ISubMenuProps`[]

#### Defined in

[src/model/workbench/menuBar.ts:21](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/menuBar.ts#L21)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[src/model/workbench/menuBar.ts:23](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/menuBar.ts#L23)

___

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[src/model/workbench/menuBar.ts:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/menuBar.ts#L20)

___

### id

• `Optional` **id**: `UniqueId`

#### Defined in

[src/model/workbench/menuBar.ts:18](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/menuBar.ts#L18)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/model/workbench/menuBar.ts:19](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/menuBar.ts#L19)

___

### render

• `Optional` **render**: (`data`: `IMenuItemProps`) => `ReactNode` \| `Element`

#### Type declaration

▸ (`data`): `ReactNode` \| `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `IMenuItemProps` |

##### Returns

`ReactNode` \| `Element`

#### Defined in

[src/model/workbench/menuBar.ts:22](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/menuBar.ts#L22)
