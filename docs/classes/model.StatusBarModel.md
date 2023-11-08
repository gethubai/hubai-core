# Class: StatusBarModel

[model](../modules/model.md).StatusBarModel

## Implements

- [`IStatusBar`](../interfaces/model.IStatusBar.md)

## Table of contents

### Constructors

- [constructor](model.StatusBarModel.md#constructor)

### Properties

- [contextMenu](model.StatusBarModel.md#contextmenu)
- [leftItems](model.StatusBarModel.md#leftitems)
- [rightItems](model.StatusBarModel.md#rightitems)

## Constructors

### constructor

• **new StatusBarModel**(`leftItems?`, `rightItems?`, `contextMenu?`): [`StatusBarModel`](model.StatusBarModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `leftItems` | [`IStatusBarItem`](../interfaces/model.IStatusBarItem.md)\<`any`\>[] | `[]` |
| `rightItems` | [`IStatusBarItem`](../interfaces/model.IStatusBarItem.md)\<`any`\>[] | `[]` |
| `contextMenu` | `IMenuItemProps`[] | `[]` |

#### Returns

[`StatusBarModel`](model.StatusBarModel.md)

#### Defined in

[src/model/workbench/statusBar.tsx:46](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L46)

## Properties

### contextMenu

• **contextMenu**: `IMenuItemProps`[]

#### Implementation of

[IStatusBar](../interfaces/model.IStatusBar.md).[contextMenu](../interfaces/model.IStatusBar.md#contextmenu)

#### Defined in

[src/model/workbench/statusBar.tsx:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L44)

___

### leftItems

• **leftItems**: [`IStatusBarItem`](../interfaces/model.IStatusBarItem.md)\<`any`\>[] = `[]`

#### Implementation of

[IStatusBar](../interfaces/model.IStatusBar.md).[leftItems](../interfaces/model.IStatusBar.md#leftitems)

#### Defined in

[src/model/workbench/statusBar.tsx:40](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L40)

___

### rightItems

• **rightItems**: [`IStatusBarItem`](../interfaces/model.IStatusBarItem.md)\<`any`\>[] = `[]`

#### Implementation of

[IStatusBar](../interfaces/model.IStatusBar.md).[rightItems](../interfaces/model.IStatusBar.md#rightitems)

#### Defined in

[src/model/workbench/statusBar.tsx:42](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/statusBar.tsx#L42)
