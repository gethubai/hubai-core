# Interface: IStatusBarItem\<T\>

[model](../modules/model.md).IStatusBarItem

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `HTMLElementProps`

  ↳ **`IStatusBarItem`**

  ↳↳ [`INotification`](model.INotification.md)

## Table of contents

### Properties

- [className](model.IStatusBarItem.md#classname)
- [data](model.IStatusBarItem.md#data)
- [id](model.IStatusBarItem.md#id)
- [name](model.IStatusBarItem.md#name)
- [render](model.IStatusBarItem.md#render)
- [role](model.IStatusBarItem.md#role)
- [sortIndex](model.IStatusBarItem.md#sortindex)
- [style](model.IStatusBarItem.md#style)
- [title](model.IStatusBarItem.md#title)

### Methods

- [onClick](model.IStatusBarItem.md#onclick)

## Properties

### className

• `Optional` **className**: `string`

#### Inherited from

HTMLElementProps.className

#### Defined in

[src/common/types.ts:4](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L4)

___

### data

• `Optional` **data**: `T`

#### Defined in

[src/model/workbench/statusBar.tsx:13](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/statusBar.tsx#L13)

___

### id

• **id**: `UniqueId`

#### Defined in

[src/model/workbench/statusBar.tsx:11](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/statusBar.tsx#L11)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/model/workbench/statusBar.tsx:16](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/statusBar.tsx#L16)

___

### render

• `Optional` **render**: (`item`: [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\>) => `ReactNode`

#### Type declaration

▸ (`item`): `ReactNode`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\> |

##### Returns

`ReactNode`

#### Defined in

[src/model/workbench/statusBar.tsx:15](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/statusBar.tsx#L15)

___

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[src/common/types.ts:5](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L5)

___

### sortIndex

• `Optional` **sortIndex**: `number`

#### Defined in

[src/model/workbench/statusBar.tsx:12](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/statusBar.tsx#L12)

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

HTMLElementProps.style

#### Defined in

[src/common/types.ts:3](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L3)

___

### title

• `Optional` **title**: `string`

#### Inherited from

HTMLElementProps.title

#### Defined in

[src/common/types.ts:2](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/types.ts#L2)

## Methods

### onClick

▸ **onClick**(`e`, `item?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent`\<`Element`, `MouseEvent`\> |
| `item?` | [`IStatusBarItem`](model.IStatusBarItem.md)\<`any`\> |

#### Returns

`any`

#### Defined in

[src/model/workbench/statusBar.tsx:14](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/statusBar.tsx#L14)
