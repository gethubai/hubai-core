# Interface: IEditor

[model](../modules/model.md).IEditor

## Implemented by

- [`EditorModel`](../classes/model.EditorModel.md)

## Table of contents

### Properties

- [current](model.IEditor.md#current)
- [editorOptions](model.IEditor.md#editoroptions)
- [entry](model.IEditor.md#entry)
- [groups](model.IEditor.md#groups)

## Properties

### current

• `Optional` **current**: ``null`` \| [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>

Current editor group

#### Defined in

[src/model/workbench/editor.ts:67](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L67)

___

### editorOptions

• `Optional` **editorOptions**: [`IEditorOptions`](../modules/model.md#ieditoroptions)

Built-in editor options, there is main apply it to monaco-editor

#### Defined in

[src/model/workbench/editor.ts:79](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L79)

___

### entry

• `Optional` **entry**: `ReactNode`

The welcome page of editor bench

#### Defined in

[src/model/workbench/editor.ts:75](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L75)

___

### groups

• `Optional` **groups**: [`IEditorGroup`](model.IEditorGroup.md)\<`any`, `any`\>[]

Editor Groups

#### Defined in

[src/model/workbench/editor.ts:71](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/editor.ts#L71)
