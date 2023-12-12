# Interface: IExplorerPanelItem

[model](../modules/model.md).IExplorerPanelItem

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [className](model.IExplorerPanelItem.md#classname)
- [hidden](model.IExplorerPanelItem.md#hidden)
- [id](model.IExplorerPanelItem.md#id)
- [name](model.IExplorerPanelItem.md#name)
- [renderPanel](model.IExplorerPanelItem.md#renderpanel)
- [sortIndex](model.IExplorerPanelItem.md#sortindex)
- [toolbar](model.IExplorerPanelItem.md#toolbar)

## Properties

### className

• `Optional` **className**: `string`

#### Defined in

[src/model/workbench/explorer/explorer.tsx:29](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/explorer.tsx#L29)

___

### hidden

• `Optional` **hidden**: `boolean`

whether hidden in explorer

#### Defined in

[src/model/workbench/explorer/explorer.tsx:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/explorer.tsx#L35)

___

### id

• **id**: `UniqueId`

It must be unique in the Explorer Panel Data

#### Defined in

[src/model/workbench/explorer/explorer.tsx:18](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/explorer.tsx#L18)

___

### name

• **name**: `string`

**`Requires`**

true
explorer panel's title

#### Defined in

[src/model/workbench/explorer/explorer.tsx:23](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/explorer.tsx#L23)

___

### renderPanel

• `Optional` **renderPanel**: [`RenderFunctionProps`](../modules/model.md#renderfunctionprops)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:31](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/explorer.tsx#L31)

___

### sortIndex

• `Optional` **sortIndex**: `number`

specify panel order
the bigger the number is ranked previous

#### Defined in

[src/model/workbench/explorer/explorer.tsx:28](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/explorer.tsx#L28)

___

### toolbar

• `Optional` **toolbar**: `IActionBarItemProps`\<`any`\>[]

#### Defined in

[src/model/workbench/explorer/explorer.tsx:30](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/explorer/explorer.tsx#L30)
