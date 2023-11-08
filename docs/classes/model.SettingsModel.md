# Class: SettingsModel

[model](../modules/model.md).SettingsModel

## Implements

- [`ISettings`](../interfaces/model.ISettings.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](model.SettingsModel.md#constructor)

### Properties

- [brain](model.SettingsModel.md#brain)
- [colorTheme](model.SettingsModel.md#colortheme)
- [editor](model.SettingsModel.md#editor)
- [extension](model.SettingsModel.md#extension)
- [locale](model.SettingsModel.md#locale)

## Constructors

### constructor

• **new SettingsModel**(`colorTheme`, `editor`, `locale?`, `extension?`, `brain?`): [`SettingsModel`](model.SettingsModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorTheme` | `string` |
| `editor` | [`IEditorOptions`](../modules/model.md#ieditoroptions) |
| `locale?` | `string` |
| `extension?` | [`IExtensionsConfiguration`](../interfaces/model.IExtensionsConfiguration.md) |
| `brain?` | [`IBrainConfiguration`](../interfaces/model.IBrainConfiguration.md) |

#### Returns

[`SettingsModel`](model.SettingsModel.md)

#### Defined in

[src/model/settings.ts:39](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/settings.ts#L39)

## Properties

### brain

• **brain**: [`IBrainConfiguration`](../interfaces/model.IBrainConfiguration.md)

#### Implementation of

[ISettings](../interfaces/model.ISettings.md).[brain](../interfaces/model.ISettings.md#brain)

#### Defined in

[src/model/settings.ts:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/settings.ts#L36)

___

### colorTheme

• **colorTheme**: `string`

#### Implementation of

[ISettings](../interfaces/model.ISettings.md).[colorTheme](../interfaces/model.ISettings.md#colortheme)

#### Defined in

[src/model/settings.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/settings.ts#L32)

___

### editor

• **editor**: [`IEditorOptions`](../modules/model.md#ieditoroptions)

#### Implementation of

[ISettings](../interfaces/model.ISettings.md).[editor](../interfaces/model.ISettings.md#editor)

#### Defined in

[src/model/settings.ts:33](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/settings.ts#L33)

___

### extension

• **extension**: [`IExtensionsConfiguration`](../interfaces/model.IExtensionsConfiguration.md)

#### Implementation of

[ISettings](../interfaces/model.ISettings.md).[extension](../interfaces/model.ISettings.md#extension)

#### Defined in

[src/model/settings.ts:35](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/settings.ts#L35)

___

### locale

• `Optional` **locale**: `string`

#### Implementation of

[ISettings](../interfaces/model.ISettings.md).[locale](../interfaces/model.ISettings.md#locale)

#### Defined in

[src/model/settings.ts:34](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/settings.ts#L34)
