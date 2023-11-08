# Interface: IColorTheme

[model](../modules/model.md).IColorTheme

## Table of contents

### Properties

- [colors](model.IColorTheme.md#colors)
- [description](model.IColorTheme.md#description)
- [id](model.IColorTheme.md#id)
- [label](model.IColorTheme.md#label)
- [name](model.IColorTheme.md#name)
- [path](model.IColorTheme.md#path)
- [semanticHighlighting](model.IColorTheme.md#semantichighlighting)
- [tokenColors](model.IColorTheme.md#tokencolors)
- [type](model.IColorTheme.md#type)
- [uiTheme](model.IColorTheme.md#uitheme)

## Properties

### colors

• `Optional` **colors**: [`IColors`](model.IColors.md)

#### Defined in

[src/model/colorTheme.ts:39](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L39)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/model/colorTheme.ts:37](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L37)

___

### id

• **id**: `string`

The id of component, theme will be applied by this ID

#### Defined in

[src/model/colorTheme.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L32)

___

### label

• **label**: `string`

#### Defined in

[src/model/colorTheme.ts:33](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L33)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/model/colorTheme.ts:34](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L34)

___

### path

• `Optional` **path**: `string`

#### Defined in

[src/model/colorTheme.ts:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L36)

___

### semanticHighlighting

• `Optional` **semanticHighlighting**: `boolean`

The semanticTokenColors mappings as well as
the semanticHighlighting setting
allow to enhance the highlighting in the editor
More info visit: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide

#### Defined in

[src/model/colorTheme.ts:47](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L47)

___

### tokenColors

• `Optional` **tokenColors**: [`TokenColor`](model.TokenColor.md)[]

#### Defined in

[src/model/colorTheme.ts:40](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L40)

___

### type

• `Optional` **type**: [`ColorScheme`](../enums/model.ColorScheme.md)

#### Defined in

[src/model/colorTheme.ts:38](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L38)

___

### uiTheme

• `Optional` **uiTheme**: `string`

#### Defined in

[src/model/colorTheme.ts:35](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/colorTheme.ts#L35)
