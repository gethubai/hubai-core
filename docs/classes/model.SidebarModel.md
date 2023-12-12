# Class: SidebarModel

[model](../modules/model.md).SidebarModel

## Implements

- [`ISidebar`](../interfaces/model.ISidebar.md)

## Table of contents

### Constructors

- [constructor](model.SidebarModel.md#constructor)

### Properties

- [current](model.SidebarModel.md#current)
- [panes](model.SidebarModel.md#panes)

## Constructors

### constructor

• **new SidebarModel**(`panes?`, `selected?`): [`SidebarModel`](model.SidebarModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `panes` | [`ISidebarPane`](../interfaces/model.ISidebarPane.md)[] | `[]` |
| `selected` | `UniqueId` | `''` |

#### Returns

[`SidebarModel`](model.SidebarModel.md)

#### Defined in

[src/model/workbench/sidebar.ts:19](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/sidebar.ts#L19)

## Properties

### current

• **current**: `UniqueId`

#### Implementation of

[ISidebar](../interfaces/model.ISidebar.md).[current](../interfaces/model.ISidebar.md#current)

#### Defined in

[src/model/workbench/sidebar.ts:15](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/sidebar.ts#L15)

___

### panes

• **panes**: [`ISidebarPane`](../interfaces/model.ISidebarPane.md)[]

#### Implementation of

[ISidebar](../interfaces/model.ISidebar.md).[panes](../interfaces/model.ISidebar.md#panes)

#### Defined in

[src/model/workbench/sidebar.ts:17](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/sidebar.ts#L17)
