# Class: EditorGroupModel\<E, T\>

[model](../modules/model.md).EditorGroupModel

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `any` |
| `T` | `any` |

## Implements

- [`IEditorGroup`](../interfaces/model.IEditorGroup.md)\<`E`, `T`\>

## Table of contents

### Constructors

- [constructor](model.EditorGroupModel.md#constructor)

### Properties

- [actions](model.EditorGroupModel.md#actions)
- [activeTab](model.EditorGroupModel.md#activetab)
- [data](model.EditorGroupModel.md#data)
- [editorInstance](model.EditorGroupModel.md#editorinstance)
- [id](model.EditorGroupModel.md#id)
- [menu](model.EditorGroupModel.md#menu)
- [tab](model.EditorGroupModel.md#tab)

## Constructors

### constructor

• **new EditorGroupModel**\<`E`, `T`\>(`id`, `tab`, `activeTab`, `data`, `actions?`, `menu?`, `editorInstance?`): [`EditorGroupModel`](model.EditorGroupModel.md)\<`E`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `any` |
| `T` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `UniqueId` | `undefined` |
| `tab` | [`IEditorTab`](../interfaces/model.IEditorTab.md)\<`T`\> | `undefined` |
| `activeTab` | `undefined` \| `UniqueId` | `undefined` |
| `data` | [`IEditorTab`](../interfaces/model.IEditorTab.md)\<`T`\>[] | `undefined` |
| `actions` | [`IEditorActionsProps`](../interfaces/model.IEditorActionsProps.md)[] | `[]` |
| `menu` | `IMenuItemProps`[] | `[]` |
| `editorInstance?` | `E` | `undefined` |

#### Returns

[`EditorGroupModel`](model.EditorGroupModel.md)\<`E`, `T`\>

#### Defined in

[src/model/workbench/editor.ts:97](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L97)

## Properties

### actions

• **actions**: [`IEditorActionsProps`](../interfaces/model.IEditorActionsProps.md)[]

#### Implementation of

[IEditorGroup](../interfaces/model.IEditorGroup.md).[actions](../interfaces/model.IEditorGroup.md#actions)

#### Defined in

[src/model/workbench/editor.ts:89](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L89)

___

### activeTab

• **activeTab**: `undefined` \| `UniqueId`

#### Implementation of

[IEditorGroup](../interfaces/model.IEditorGroup.md).[activeTab](../interfaces/model.IEditorGroup.md#activetab)

#### Defined in

[src/model/workbench/editor.ts:95](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L95)

___

### data

• **data**: [`IEditorTab`](../interfaces/model.IEditorTab.md)\<`T`\>[]

#### Implementation of

[IEditorGroup](../interfaces/model.IEditorGroup.md).[data](../interfaces/model.IEditorGroup.md#data)

#### Defined in

[src/model/workbench/editor.ts:87](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L87)

___

### editorInstance

• **editorInstance**: `undefined` \| `E`

#### Implementation of

[IEditorGroup](../interfaces/model.IEditorGroup.md).[editorInstance](../interfaces/model.IEditorGroup.md#editorinstance)

#### Defined in

[src/model/workbench/editor.ts:93](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L93)

___

### id

• **id**: `UniqueId`

#### Implementation of

[IEditorGroup](../interfaces/model.IEditorGroup.md).[id](../interfaces/model.IEditorGroup.md#id)

#### Defined in

[src/model/workbench/editor.ts:83](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L83)

___

### menu

• **menu**: `IMenuItemProps`[]

#### Implementation of

[IEditorGroup](../interfaces/model.IEditorGroup.md).[menu](../interfaces/model.IEditorGroup.md#menu)

#### Defined in

[src/model/workbench/editor.ts:91](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L91)

___

### tab

• **tab**: [`IEditorTab`](../interfaces/model.IEditorTab.md)\<`T`\>

Current editor group tab

#### Implementation of

[IEditorGroup](../interfaces/model.IEditorGroup.md).[tab](../interfaces/model.IEditorGroup.md#tab)

#### Defined in

[src/model/workbench/editor.ts:85](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L85)
