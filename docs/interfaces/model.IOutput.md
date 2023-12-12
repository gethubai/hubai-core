# Interface: IOutput

[model](../modules/model.md).IOutput

## Hierarchy

- [`IPanelItem`](model.IPanelItem.md)

  ↳ **`IOutput`**

## Table of contents

### Properties

- [active](model.IOutput.md#active)
- [closable](model.IOutput.md#closable)
- [data](model.IOutput.md#data)
- [editable](model.IOutput.md#editable)
- [icon](model.IOutput.md#icon)
- [id](model.IOutput.md#id)
- [name](model.IOutput.md#name)
- [outputEditorInstance](model.IOutput.md#outputeditorinstance)
- [renderPane](model.IOutput.md#renderpane)
- [sortIndex](model.IOutput.md#sortindex)
- [status](model.IOutput.md#status)
- [title](model.IOutput.md#title)
- [toolbox](model.IOutput.md#toolbox)

### Methods

- [onUpdateEditorIns](model.IOutput.md#onupdateeditorins)

## Properties

### active

• `Optional` **active**: `boolean`

**`Deprecated`**

Tab doesn't need this property, but the type extends from tab need

#### Inherited from

[IPanelItem](model.IPanelItem.md).[active](model.IPanelItem.md#active)

#### Defined in

[src/components/tabs/tab.tsx:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L35)

___

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Inherited from

[IPanelItem](model.IPanelItem.md).[closable](model.IPanelItem.md#closable)

#### Defined in

[src/components/tabs/tab.tsx:40](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L40)

___

### data

• `Optional` **data**: `any`

#### Inherited from

[IPanelItem](model.IPanelItem.md).[data](model.IPanelItem.md#data)

#### Defined in

[src/model/workbench/panel.tsx:11](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/panel.tsx#L11)

___

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Inherited from

[IPanelItem](model.IPanelItem.md).[editable](model.IPanelItem.md#editable)

#### Defined in

[src/components/tabs/tab.tsx:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L44)

___

### icon

• `Optional` **icon**: `string` \| `Element`

#### Inherited from

[IPanelItem](model.IPanelItem.md).[icon](model.IPanelItem.md#icon)

#### Defined in

[src/components/tabs/tab.tsx:46](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L46)

___

### id

• **id**: `UniqueId`

#### Inherited from

[IPanelItem](model.IPanelItem.md).[id](model.IPanelItem.md#id)

#### Defined in

[src/components/tabs/tab.tsx:47](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L47)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IPanelItem](model.IPanelItem.md).[name](model.IPanelItem.md#name)

#### Defined in

[src/components/tabs/tab.tsx:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L48)

___

### outputEditorInstance

• `Optional` **outputEditorInstance**: `IStandaloneCodeEditor`

#### Defined in

[src/model/workbench/panel.tsx:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/panel.tsx#L31)

___

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `any`, `tab?`: `ITabProps`\<`any`, `any`\>, `group?`: [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>) => `ReactNode`

#### Inherited from

[IPanelItem](model.IPanelItem.md).[renderPane](model.IPanelItem.md#renderpane)

#### Defined in

[src/components/tabs/tab.tsx:49](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L49)

___

### sortIndex

• `Optional` **sortIndex**: `number`

The sort of panel item

#### Inherited from

[IPanelItem](model.IPanelItem.md).[sortIndex](model.IPanelItem.md#sortindex)

#### Defined in

[src/model/workbench/panel.tsx:15](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/panel.tsx#L15)

___

### status

• `Optional` **status**: ``"edited"`` \| (`tab`: `ITabProps`\<`any`, `any`\>) => `Element`

#### Inherited from

[IPanelItem](model.IPanelItem.md).[status](model.IPanelItem.md#status)

#### Defined in

[src/components/tabs/tab.tsx:45](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L45)

___

### title

• `Optional` **title**: `string`

The same as HTMLElement title attribute

#### Inherited from

[IPanelItem](model.IPanelItem.md).[title](model.IPanelItem.md#title)

#### Defined in

[src/model/workbench/panel.tsx:9](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/panel.tsx#L9)

___

### toolbox

• `Optional` **toolbox**: `IActionBarItemProps`\<`any`\>[]

#### Inherited from

[IPanelItem](model.IPanelItem.md).[toolbox](model.IPanelItem.md#toolbox)

#### Defined in

[src/model/workbench/panel.tsx:10](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/panel.tsx#L10)

## Methods

### onUpdateEditorIns

▸ **onUpdateEditorIns**(`editorInstance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editorInstance` | `IStandaloneCodeEditor` |

#### Returns

`void`

#### Defined in

[src/model/workbench/panel.tsx:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/panel.tsx#L32)
