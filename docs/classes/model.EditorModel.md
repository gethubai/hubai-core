# Class: EditorModel

[model](../modules/model.md).EditorModel

## Implements

- [`IEditor`](../interfaces/model.IEditor.md)

## Table of contents

### Constructors

- [constructor](model.EditorModel.md#constructor)

### Properties

- [current](model.EditorModel.md#current)
- [editorOptions](model.EditorModel.md#editoroptions)
- [entry](model.EditorModel.md#entry)
- [groups](model.EditorModel.md#groups)

## Constructors

### constructor

• **new EditorModel**(`current?`, `groups?`, `entry`, `editorOptions?`): [`EditorModel`](model.EditorModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `current` | ``null`` \| [`IEditorGroup`](../interfaces/model.IEditorGroup.md)\<`any`, `any`\> | `null` |
| `groups` | [`IEditorGroup`](../interfaces/model.IEditorGroup.md)\<`any`, `any`\>[] | `[]` |
| `entry` | `ReactNode` | `undefined` |
| `editorOptions` | [`IEditorOptions`](../modules/model.md#ieditoroptions) | `{}` |

#### Returns

[`EditorModel`](model.EditorModel.md)

#### Defined in

[src/model/workbench/editor.ts:125](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L125)

## Properties

### current

• **current**: ``null`` \| [`IEditorGroup`](../interfaces/model.IEditorGroup.md)\<`any`, `any`\>

Current editor group

#### Implementation of

[IEditor](../interfaces/model.IEditor.md).[current](../interfaces/model.IEditor.md#current)

#### Defined in

[src/model/workbench/editor.ts:117](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L117)

___

### editorOptions

• **editorOptions**: [`IEditorOptions`](../modules/model.md#ieditoroptions)

Built-in editor options, there is main apply it to monaco-editor

#### Implementation of

[IEditor](../interfaces/model.IEditor.md).[editorOptions](../interfaces/model.IEditor.md#editoroptions)

#### Defined in

[src/model/workbench/editor.ts:123](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L123)

___

### entry

• **entry**: `ReactNode`

The welcome page of editor bench

#### Implementation of

[IEditor](../interfaces/model.IEditor.md).[entry](../interfaces/model.IEditor.md#entry)

#### Defined in

[src/model/workbench/editor.ts:121](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L121)

___

### groups

• **groups**: [`IEditorGroup`](../interfaces/model.IEditorGroup.md)\<`any`, `any`\>[]

Editor Groups

#### Implementation of

[IEditor](../interfaces/model.IEditor.md).[groups](../interfaces/model.IEditor.md#groups)

#### Defined in

[src/model/workbench/editor.ts:119](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/workbench/editor.ts#L119)
