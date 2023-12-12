# Interface: IEditorTab\<T\>

[model](../modules/model.md).IEditorTab

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`BuiltInEditorTabDataType`](model.BuiltInEditorTabDataType.md) |

## Hierarchy

- `ITabProps`\<`T`\>

  ↳ **`IEditorTab`**

## Table of contents

### Properties

- [active](model.IEditorTab.md#active)
- [breadcrumb](model.IEditorTab.md#breadcrumb)
- [closable](model.IEditorTab.md#closable)
- [data](model.IEditorTab.md#data)
- [disposables](model.IEditorTab.md#disposables)
- [editable](model.IEditorTab.md#editable)
- [icon](model.IEditorTab.md#icon)
- [id](model.IEditorTab.md#id)
- [name](model.IEditorTab.md#name)
- [renderPane](model.IEditorTab.md#renderpane)
- [status](model.IEditorTab.md#status)

## Properties

### active

• `Optional` **active**: `boolean`

**`Deprecated`**

Tab doesn't need this property, but the type extends from tab need

#### Inherited from

ITabProps.active

#### Defined in

[src/components/tabs/tab.tsx:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L35)

___

### breadcrumb

• `Optional` **breadcrumb**: `IBreadcrumbItemProps`[]

#### Defined in

[src/model/workbench/editor.ts:43](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L43)

___

### closable

• `Optional` **closable**: `boolean`

Mark the tab status to be closable,
Default is true

#### Inherited from

ITabProps.closable

#### Defined in

[src/components/tabs/tab.tsx:40](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L40)

___

### data

• `Optional` **data**: `T`

#### Inherited from

ITabProps.data

#### Defined in

[src/components/tabs/tab.tsx:52](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L52)

___

### disposables

• `Optional` **disposables**: `IDisposable`[]

The instances that need to be disposed when the tab is closed

#### Defined in

[src/model/workbench/editor.ts:47](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L47)

___

### editable

• `Optional` **editable**: `boolean`

Mark the tab status to be editing

#### Inherited from

ITabProps.editable

#### Defined in

[src/components/tabs/tab.tsx:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L44)

___

### icon

• `Optional` **icon**: `string` \| `Element`

#### Inherited from

ITabProps.icon

#### Defined in

[src/components/tabs/tab.tsx:46](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L46)

___

### id

• **id**: `UniqueId`

#### Inherited from

ITabProps.id

#### Defined in

[src/components/tabs/tab.tsx:47](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L47)

___

### name

• `Optional` **name**: `string`

#### Inherited from

ITabProps.name

#### Defined in

[src/components/tabs/tab.tsx:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L48)

___

### renderPane

• `Optional` **renderPane**: `ReactNode` \| (`item`: `any`, `tab?`: `ITabProps`\<`any`, `any`\>, `group?`: [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>) => `ReactNode`

#### Inherited from

ITabProps.renderPane

#### Defined in

[src/components/tabs/tab.tsx:49](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L49)

___

### status

• `Optional` **status**: ``"edited"`` \| (`tab`: `ITabProps`\<`any`, `any`\>) => `Element`

#### Inherited from

ITabProps.status

#### Defined in

[src/components/tabs/tab.tsx:45](https://github.com/gethubai/hubai-core/blob/43abc4a/src/components/tabs/tab.tsx#L45)
