# Interface: IActivityBarItem

[model](../modules/model.md).IActivityBarItem

## Hierarchy

- `HTMLElementProps`

  ↳ **`IActivityBarItem`**

## Table of contents

### Properties

- [checked](model.IActivityBarItem.md#checked)
- [className](model.IActivityBarItem.md#classname)
- [contextMenu](model.IActivityBarItem.md#contextmenu)
- [data](model.IActivityBarItem.md#data)
- [disabled](model.IActivityBarItem.md#disabled)
- [hidden](model.IActivityBarItem.md#hidden)
- [icon](model.IActivityBarItem.md#icon)
- [id](model.IActivityBarItem.md#id)
- [name](model.IActivityBarItem.md#name)
- [render](model.IActivityBarItem.md#render)
- [role](model.IActivityBarItem.md#role)
- [sortIndex](model.IActivityBarItem.md#sortindex)
- [style](model.IActivityBarItem.md#style)
- [title](model.IActivityBarItem.md#title)
- [type](model.IActivityBarItem.md#type)

## Properties

### checked

• `Optional` **checked**: `boolean`

#### Defined in

[src/model/workbench/activityBar.ts:23](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L23)

___

### className

• `Optional` **className**: `string`

#### Inherited from

HTMLElementProps.className

#### Defined in

[src/common/types.ts:4](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L4)

___

### contextMenu

• `Optional` **contextMenu**: [`IActivityMenuItemProps`](model.IActivityMenuItemProps.md)[]

#### Defined in

[src/model/workbench/activityBar.ts:26](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L26)

___

### data

• `Optional` **data**: `any`

#### Defined in

[src/model/workbench/activityBar.ts:21](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L21)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[src/model/workbench/activityBar.ts:24](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L24)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

[src/model/workbench/activityBar.ts:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L20)

___

### icon

• `Optional` **icon**: `string` \| `Element`

#### Defined in

[src/model/workbench/activityBar.ts:22](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L22)

___

### id

• **id**: `UniqueId`

#### Defined in

[src/model/workbench/activityBar.ts:18](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L18)

___

### name

• `Optional` **name**: `ReactNode`

#### Defined in

[src/model/workbench/activityBar.ts:19](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L19)

___

### render

• `Optional` **render**: () => `ReactNode` \| `Element`

#### Type declaration

▸ (): `ReactNode` \| `Element`

##### Returns

`ReactNode` \| `Element`

#### Defined in

[src/model/workbench/activityBar.ts:28](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L28)

___

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[src/common/types.ts:5](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L5)

___

### sortIndex

• `Optional` **sortIndex**: `number`

#### Defined in

[src/model/workbench/activityBar.ts:27](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L27)

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

HTMLElementProps.style

#### Defined in

[src/common/types.ts:3](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L3)

___

### title

• `Optional` **title**: `string`

#### Inherited from

HTMLElementProps.title

#### Defined in

[src/common/types.ts:2](https://github.com/mtsdnz/allai-core/blob/5932278/src/common/types.ts#L2)

___

### type

• `Optional` **type**: ``"normal"`` \| ``"global"``

#### Defined in

[src/model/workbench/activityBar.ts:25](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/activityBar.ts#L25)
