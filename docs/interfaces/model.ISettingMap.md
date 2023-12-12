# Interface: ISettingMap

[model](../modules/model.md).ISettingMap

## Table of contents

### Properties

- [defaultValue](model.ISettingMap.md#defaultvalue)
- [description](model.ISettingMap.md#description)
- [displayName](model.ISettingMap.md#displayname)
- [enumValues](model.ISettingMap.md#enumvalues)
- [isSecret](model.ISettingMap.md#issecret)
- [name](model.ISettingMap.md#name)
- [required](model.ISettingMap.md#required)
- [type](model.ISettingMap.md#type)

## Properties

### defaultValue

• `Optional` **defaultValue**: `string`

Default value of the setting.

#### Defined in

[src/model/settingsMap.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L44)

___

### description

• `Optional` **description**: `string`

Optional description of the setting, explaining its purpose or usage.

#### Defined in

[src/model/settingsMap.ts:54](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L54)

___

### displayName

• **displayName**: `string`

The display name of the setting, used in user interfaces.

#### Defined in

[src/model/settingsMap.ts:29](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L29)

___

### enumValues

• `Optional` **enumValues**: `string`[] \| () => `string`[]

Optional array of possible values for the setting. Can be a static array or a function returning an array.

#### Defined in

[src/model/settingsMap.ts:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L39)

___

### isSecret

• `Optional` **isSecret**: `boolean`

Indicates if the setting is a secret, such as a password or API key. (If true, the setting value will be masked in user interfaces.)

#### Defined in

[src/model/settingsMap.ts:59](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L59)

___

### name

• **name**: `string`

The internal name of the setting.

#### Defined in

[src/model/settingsMap.ts:24](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L24)

___

### required

• **required**: `boolean`

Indicates whether the setting is required.

#### Defined in

[src/model/settingsMap.ts:49](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L49)

___

### type

• **type**: [`SettingType`](../enums/model.SettingType.md)

The type of the setting, as defined in the SettingType enum.

#### Defined in

[src/model/settingsMap.ts:34](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/settingsMap.ts#L34)
