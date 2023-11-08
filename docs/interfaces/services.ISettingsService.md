# Interface: ISettingsService

[services](../modules/services.md).ISettingsService

## Table of contents

### Methods

- [append](services.ISettingsService.md#append)
- [applySettings](services.ISettingsService.md#applysettings)
- [flatObject](services.ISettingsService.md#flatobject)
- [flatObject2JSONString](services.ISettingsService.md#flatobject2jsonstring)
- [getDefaultSettingsTab](services.ISettingsService.md#getdefaultsettingstab)
- [getSettings](services.ISettingsService.md#getsettings)
- [normalizeFlatObject](services.ISettingsService.md#normalizeflatobject)
- [onChangeSettings](services.ISettingsService.md#onchangesettings)
- [onSettingsSaved](services.ISettingsService.md#onsettingssaved)
- [openSettingsInEditor](services.ISettingsService.md#opensettingsineditor)
- [saveSettings](services.ISettingsService.md#savesettings)
- [toJSONString](services.ISettingsService.md#tojsonstring)
- [update](services.ISettingsService.md#update)

## Methods

### append

▸ **append**(`settings`): `void`

Append new Settings object
eg: `
 append({ project: { name: 'example' } })
`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`ISettings`](model.ISettings.md) | object |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:16](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L16)

___

### applySettings

▸ **applySettings**(`nextSettings`): `void`

Apply the nextSettings configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextSettings` | [`ISettings`](model.ISettings.md) |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:58](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L58)

___

### flatObject

▸ **flatObject**(`obj`): `object`

It converts an object to a flatted object,
eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | object |

#### Returns

`object`

#### Defined in

[src/services/settingsService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L32)

___

### flatObject2JSONString

▸ **flatObject2JSONString**(`obj`): `string`

It converts an object to a flatted json string,
eg: { a: { b: 'test' }}, result is : `{ 'a.b': 'test' }`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | object |

#### Returns

`string`

#### Defined in

[src/services/settingsService.ts:38](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L38)

___

### getDefaultSettingsTab

▸ **getDefaultSettingsTab**(): [`IEditorTab`](model.IEditorTab.md)\<\{ `language`: `string` ; `value`: `string`  }\>

Get the default Settings Tab object

#### Returns

[`IEditorTab`](model.IEditorTab.md)\<\{ `language`: `string` ; `value`: `string`  }\>

#### Defined in

[src/services/settingsService.ts:69](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L69)

___

### getSettings

▸ **getSettings**(): [`ISettings`](model.ISettings.md)

Get the settings object

#### Returns

[`ISettings`](model.ISettings.md)

#### Defined in

[src/services/settingsService.ts:26](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L26)

___

### normalizeFlatObject

▸ **normalizeFlatObject**\<`T`\>(`jsonStr`): `T`

It converts a flatted JSON string to a normal object,
eg: `{ 'a.b': 'test' }` result is : { a: { b: 'test' }}.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`ISettings`](model.ISettings.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonStr` | `string` | string |

#### Returns

`T`

T

#### Defined in

[src/services/settingsService.ts:45](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L45)

___

### onChangeSettings

▸ **onChangeSettings**(`callback`): `void`

Listen to the Settings change event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`tab`: [`IEditorTab`](model.IEditorTab.md)\<[`IEditorTab`](model.IEditorTab.md)\<\{ `language`: `string` ; `value`: `string`  }\>\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:63](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L63)

___

### onSettingsSaved

▸ **onSettingsSaved**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`settings`: [`ISettings`](model.ISettings.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:73](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L73)

___

### openSettingsInEditor

▸ **openSettingsInEditor**(): `void`

Open the `settings.json` in the Editor Panel

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:53](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L53)

___

### saveSettings

▸ **saveSettings**(): `void`

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:71](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L71)

___

### toJSONString

▸ **toJSONString**(`obj`, `space?`): `string`

It converts an object to JSON string

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |
| `space?` | `number` |

#### Returns

`string`

#### Defined in

[src/services/settingsService.ts:49](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L49)

___

### update

▸ **update**(`settings`): `void`

To update a settings object, it's going to overwrite
a settings item if it existed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISettings`](model.ISettings.md) |

#### Returns

`void`

#### Defined in

[src/services/settingsService.ts:22](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/settingsService.ts#L22)
