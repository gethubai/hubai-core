# Interface: IPackageSettingsService

[services](../modules/services.md).IPackageSettingsService

Service injected into the package context to get/set the settings of the current package.

## Table of contents

### Methods

- [get](services.IPackageSettingsService.md#get)
- [onUpdated](services.IPackageSettingsService.md#onupdated)
- [save](services.IPackageSettingsService.md#save)

## Methods

### get

▸ **get**\<`TSettings`\>(): `TSettings`

Get the settings of the current package.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSettings` | `any` |

#### Returns

`TSettings`

#### Defined in

[src/services/extensionSettingsService.ts:8](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/extensionSettingsService.ts#L8)

___

### onUpdated

▸ **onUpdated**\<`TSettings`\>(`callback`): `void`

Subscribe to the settings updated event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSettings` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`settings`: `TSettings`) => `void` | Callback function. |

#### Returns

`void`

#### Defined in

[src/services/extensionSettingsService.ts:20](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/extensionSettingsService.ts#L20)

___

### save

▸ **save**\<`TSettings`\>(`settings`): `void`

Save the settings of the current package.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSettings` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `TSettings` | Settings to save. |

#### Returns

`void`

#### Defined in

[src/services/extensionSettingsService.ts:14](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/extensionSettingsService.ts#L14)
