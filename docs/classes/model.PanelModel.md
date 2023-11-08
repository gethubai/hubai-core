# Class: PanelModel

[model](../modules/model.md).PanelModel

## Implements

- [`IPanel`](../interfaces/model.IPanel.md)

## Table of contents

### Constructors

- [constructor](model.PanelModel.md#constructor)

### Properties

- [current](model.PanelModel.md#current)
- [data](model.PanelModel.md#data)
- [hidden](model.PanelModel.md#hidden)
- [maximize](model.PanelModel.md#maximize)
- [toolbox](model.PanelModel.md#toolbox)

## Constructors

### constructor

• **new PanelModel**(`current?`, `data?`, `toolbox?`): [`PanelModel`](model.PanelModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `current` | ``null`` \| [`IPanelItem`](../interfaces/model.IPanelItem.md)\<`any`\> | `null` |
| `data` | [`IPanelItem`](../interfaces/model.IPanelItem.md)\<`any`\>[] | `[]` |
| `toolbox` | `IActionBarItemProps`\<`any`\>[] | `[]` |

#### Returns

[`PanelModel`](model.PanelModel.md)

#### Defined in

[src/model/workbench/panel.tsx:46](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L46)

## Properties

### current

• **current**: ``null`` \| [`IPanelItem`](../interfaces/model.IPanelItem.md)\<`any`\>

#### Implementation of

[IPanel](../interfaces/model.IPanel.md).[current](../interfaces/model.IPanel.md#current)

#### Defined in

[src/model/workbench/panel.tsx:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L36)

___

### data

• **data**: [`IPanelItem`](../interfaces/model.IPanelItem.md)\<`any`\>[]

#### Implementation of

[IPanel](../interfaces/model.IPanel.md).[data](../interfaces/model.IPanel.md#data)

#### Defined in

[src/model/workbench/panel.tsx:38](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L38)

___

### hidden

• **hidden**: `boolean` = `false`

#### Defined in

[src/model/workbench/panel.tsx:40](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L40)

___

### maximize

• **maximize**: `boolean` = `false`

#### Defined in

[src/model/workbench/panel.tsx:42](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L42)

___

### toolbox

• **toolbox**: `IActionBarItemProps`\<`any`\>[]

#### Implementation of

[IPanel](../interfaces/model.IPanel.md).[toolbox](../interfaces/model.IPanel.md#toolbox)

#### Defined in

[src/model/workbench/panel.tsx:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/panel.tsx#L44)
