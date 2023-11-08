# Class: IExplorerModel

[model](../modules/model.md).IExplorerModel

## Implements

- [`IExplorer`](../interfaces/model.IExplorer.md)

## Table of contents

### Constructors

- [constructor](model.IExplorerModel.md#constructor)

### Properties

- [activePanelKeys](model.IExplorerModel.md#activepanelkeys)
- [data](model.IExplorerModel.md#data)
- [headerToolBar](model.IExplorerModel.md#headertoolbar)

## Constructors

### constructor

• **new IExplorerModel**(`data?`, `headerToolBar?`, `activePanelKeys?`): [`IExplorerModel`](model.IExplorerModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`IExplorerPanelItem`](../interfaces/model.IExplorerPanelItem.md)[] | `[]` |
| `headerToolBar?` | `IActionBarItemProps`\<`any`\> | `undefined` |
| `activePanelKeys?` | `UniqueId`[] | `undefined` |

#### Returns

[`IExplorerModel`](model.IExplorerModel.md)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:52](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/explorer.tsx#L52)

## Properties

### activePanelKeys

• `Optional` **activePanelKeys**: `UniqueId`[]

#### Implementation of

[IExplorer](../interfaces/model.IExplorer.md).[activePanelKeys](../interfaces/model.IExplorer.md#activepanelkeys)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:50](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/explorer.tsx#L50)

___

### data

• **data**: [`IExplorerPanelItem`](../interfaces/model.IExplorerPanelItem.md)[]

#### Implementation of

[IExplorer](../interfaces/model.IExplorer.md).[data](../interfaces/model.IExplorer.md#data)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:46](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/explorer.tsx#L46)

___

### headerToolBar

• `Optional` **headerToolBar**: `IActionBarItemProps`\<`any`\>

#### Implementation of

[IExplorer](../interfaces/model.IExplorer.md).[headerToolBar](../interfaces/model.IExplorer.md#headertoolbar)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:48](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/explorer/explorer.tsx#L48)
