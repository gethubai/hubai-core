# Interface: IColorThemeService

[services](../modules/services.md).IColorThemeService

## Table of contents

### Methods

- [addThemes](services.IColorThemeService.md#addthemes)
- [getColorTheme](services.IColorThemeService.md#getcolortheme)
- [getColorThemeMode](services.IColorThemeService.md#getcolorthememode)
- [getThemeById](services.IColorThemeService.md#getthemebyid)
- [getThemes](services.IColorThemeService.md#getthemes)
- [onChange](services.IColorThemeService.md#onchange)
- [reload](services.IColorThemeService.md#reload)
- [reset](services.IColorThemeService.md#reset)
- [setTheme](services.IColorThemeService.md#settheme)
- [updateTheme](services.IColorThemeService.md#updatetheme)

## Methods

### addThemes

▸ **addThemes**(`themes`): `void`

Add themes into `colorThemes`

This will update the duplicated themes found in `colorThemes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `themes` | [`IColorTheme`](model.IColorTheme.md) \| [`IColorTheme`](model.IColorTheme.md)[] |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:18](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L18)

___

### getColorTheme

▸ **getColorTheme**(): [`IColorTheme`](model.IColorTheme.md)

Get the current Color Theme

#### Returns

[`IColorTheme`](model.IColorTheme.md)

#### Defined in

[src/services/theme/colorThemeService.ts:42](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L42)

___

### getColorThemeMode

▸ **getColorThemeMode**(): [`ColorThemeMode`](../enums/model.ColorThemeMode.md)

Get the mode('dark' or 'light') of the current Color Theme

#### Returns

[`ColorThemeMode`](../enums/model.ColorThemeMode.md)

#### Defined in

[src/services/theme/colorThemeService.ts:54](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L54)

___

### getThemeById

▸ **getThemeById**(`id`): `undefined` \| [`IColorTheme`](model.IColorTheme.md)

Get specific theme via id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`IColorTheme`](model.IColorTheme.md)

#### Defined in

[src/services/theme/colorThemeService.ts:38](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L38)

___

### getThemes

▸ **getThemes**(): [`IColorTheme`](model.IColorTheme.md)[]

Get all themes in `colorThemes`

#### Returns

[`IColorTheme`](model.IColorTheme.md)[]

#### Defined in

[src/services/theme/colorThemeService.ts:33](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L33)

___

### onChange

▸ **onChange**(`callback`): `void`

Listen to the theme changed event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`prev`: [`IColorTheme`](model.IColorTheme.md), `next`: [`IColorTheme`](model.IColorTheme.md), `themeMode`: [`ColorThemeMode`](../enums/model.ColorThemeMode.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:59](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L59)

___

### reload

▸ **reload**(): `void`

Reload current theme

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:46](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L46)

___

### reset

▸ **reset**(): `void`

Reset theme

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:50](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L50)

___

### setTheme

▸ **setTheme**(`id`): `void`

Set the current Color Theme via id,
Please ensure the theme could be found in `colorThemes`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The `id` is required |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:24](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L24)

___

### updateTheme

▸ **updateTheme**(`theme`): `void`

Update specific theme,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theme` | [`IColorTheme`](model.IColorTheme.md) | The `id` is required in theme |

#### Returns

`void`

#### Defined in

[src/services/theme/colorThemeService.ts:29](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/theme/colorThemeService.ts#L29)
