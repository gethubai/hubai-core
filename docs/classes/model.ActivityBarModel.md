# Class: ActivityBarModel

[model](../modules/model.md).ActivityBarModel

## Implements

- [`IActivityBar`](../interfaces/model.IActivityBar.md)

## Table of contents

### Constructors

- [constructor](model.ActivityBarModel.md#constructor)

### Properties

- [contextMenu](model.ActivityBarModel.md#contextmenu)
- [data](model.ActivityBarModel.md#data)
- [selected](model.ActivityBarModel.md#selected)

## Constructors

### constructor

• **new ActivityBarModel**(`data?`, `contextMenu?`, `selected?`): [`ActivityBarModel`](model.ActivityBarModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`IActivityBarItem`](../interfaces/model.IActivityBarItem.md)[] | `[]` |
| `contextMenu` | [`IActivityMenuItemProps`](../interfaces/model.IActivityMenuItemProps.md)[] | `[]` |
| `selected` | `UniqueId` | `''` |

#### Returns

[`ActivityBarModel`](model.ActivityBarModel.md)

#### Defined in

[src/model/workbench/activityBar.ts:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/activityBar.ts#L48)

## Properties

### contextMenu

• **contextMenu**: [`IActivityMenuItemProps`](../interfaces/model.IActivityMenuItemProps.md)[]

#### Implementation of

[IActivityBar](../interfaces/model.IActivityBar.md).[contextMenu](../interfaces/model.IActivityBar.md#contextmenu)

#### Defined in

[src/model/workbench/activityBar.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/activityBar.ts#L44)

___

### data

• **data**: [`IActivityBarItem`](../interfaces/model.IActivityBarItem.md)[]

#### Implementation of

[IActivityBar](../interfaces/model.IActivityBar.md).[data](../interfaces/model.IActivityBar.md#data)

#### Defined in

[src/model/workbench/activityBar.ts:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/activityBar.ts#L42)

___

### selected

• **selected**: `UniqueId`

#### Implementation of

[IActivityBar](../interfaces/model.IActivityBar.md).[selected](../interfaces/model.IActivityBar.md#selected)

#### Defined in

[src/model/workbench/activityBar.ts:46](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/activityBar.ts#L46)
