# Interface: IPanelItem\<T\>

[model](../modules/model.md).IPanelItem

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `ITabProps`\<`T`\>

  ↳ **`IPanelItem`**

  ↳↳ [`IOutput`](model.IOutput.md)

## Table of contents

### Properties

- [active](model.IPanelItem.md#active)
- [closable](model.IPanelItem.md#closable)
- [data](model.IPanelItem.md#data)
- [editable](model.IPanelItem.md#editable)
- [icon](model.IPanelItem.md#icon)
- [id](model.IPanelItem.md#id)
- [name](model.IPanelItem.md#name)
- [renderPane](model.IPanelItem.md#renderpane)
- [sortIndex](model.IPanelItem.md#sortindex)
- [status](model.IPanelItem.md#status)
- [title](model.IPanelItem.md#title)
- [toolbox](model.IPanelItem.md#toolbox)

## Properties

### active

• `Optional` **active**: `boolean`

**`Deprecated`**

Tab doesn't need this property, but the type extends from tab need

#### Inherited from

ITabProps.active

#### Defined in

[src/components/tabs/tab.tsx:35](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L35)

___

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Inherited from

ITabProps.closable

#### Defined in

[src/components/tabs/tab.tsx:40](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L40)

___

### data

• `Optional` **data**: `T`

#### Overrides

ITabProps.data

#### Defined in

[src/model/workbench/panel.tsx:11](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L11)

___

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Inherited from

ITabProps.editable

#### Defined in

[src/components/tabs/tab.tsx:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L44)

___

### icon

• `Optional` **icon**: `string` \| `Element`

#### Inherited from

ITabProps.icon

#### Defined in

[src/components/tabs/tab.tsx:46](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L46)

___

### id

• **id**: `UniqueId`

#### Inherited from

ITabProps.id

#### Defined in

[src/components/tabs/tab.tsx:47](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L47)

___

### name

• `Optional` **name**: `string`

#### Inherited from

ITabProps.name

#### Defined in

[src/components/tabs/tab.tsx:48](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L48)

___

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `any`, `tab?`: `ITabProps`\<`any`, `any`\>, `group?`: [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>) => `ReactNode`

#### Inherited from

ITabProps.renderPane

#### Defined in

[src/components/tabs/tab.tsx:49](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L49)

___

### sortIndex

• `Optional` **sortIndex**: `number`

The sort of panel item

#### Defined in

[src/model/workbench/panel.tsx:15](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L15)

___

### status

• `Optional` **status**: ``"edited"`` \| (`tab`: `ITabProps`\<`any`, `any`\>) => `Element`

#### Inherited from

ITabProps.status

#### Defined in

[src/components/tabs/tab.tsx:45](https://github.com/mtsdnz/allai-core/blob/5932278/src/components/tabs/tab.tsx#L45)

___

### title

• `Optional` **title**: `string`

The same as HTMLElement title attribute

#### Defined in

[src/model/workbench/panel.tsx:9](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L9)

___

### toolbox

• `Optional` **toolbox**: `IActionBarItemProps`\<`any`\>[]

#### Defined in

[src/model/workbench/panel.tsx:10](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L10)
