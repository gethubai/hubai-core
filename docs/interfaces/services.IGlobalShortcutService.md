# Interface: IGlobalShortcutService

[services](../modules/services.md).IGlobalShortcutService

Interface for managing global shortcuts.

## Table of contents

### Methods

- [getRegistered](services.IGlobalShortcutService.md#getregistered)
- [isRegistered](services.IGlobalShortcutService.md#isregistered)
- [isValid](services.IGlobalShortcutService.md#isvalid)
- [register](services.IGlobalShortcutService.md#register)
- [unregister](services.IGlobalShortcutService.md#unregister)
- [unregisterAll](services.IGlobalShortcutService.md#unregisterall)

## Methods

### getRegistered

▸ **getRegistered**(): [`IGlobalShortcut`](../modules/services.md#iglobalshortcut)[]

Retrieves all registered global shortcuts.

#### Returns

[`IGlobalShortcut`](../modules/services.md#iglobalshortcut)[]

An array of IGlobalShortcut objects.

#### Defined in

[src/services/globalShortcutService.ts:58](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L58)

___

### isRegistered

▸ **isRegistered**(`accelerator`): `boolean`

Checks if a global shortcut is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accelerator` | `string` | The accelerator string for the global shortcut to check. |

#### Returns

`boolean`

A boolean indicating if the global shortcut is registered.

#### Defined in

[src/services/globalShortcutService.ts:52](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L52)

___

### isValid

▸ **isValid**(`accelerator`): `boolean`

Validates an accelerator string to see if it can be used as a global shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accelerator` | `string` | The accelerator string to validate. |

#### Returns

`boolean`

A boolean indicating if the accelerator is valid for a global shortcut.

#### Defined in

[src/services/globalShortcutService.ts:70](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L70)

___

### register

▸ **register**(`accelerator`, `callback`, `options?`): `Promise`\<`undefined` \| `string`\>

Registers a global shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accelerator` | `string` | The accelerator string for the global shortcut. See https://www.electronjs.org/docs/latest/api/accelerator for more information. |
| `callback` | () => `void` | The function to execute when the global shortcut is activated. |
| `options?` | [`IGlobalShortcutRegistrationOptions`](../modules/services.md#iglobalshortcutregistrationoptions) | Optional settings for the global shortcut registration. |

#### Returns

`Promise`\<`undefined` \| `string`\>

A promise resolving to the registration ID if successful, otherwise undefined.

#### Defined in

[src/services/globalShortcutService.ts:34](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L34)

___

### unregister

▸ **unregister**(`accelerator`): `Promise`\<`boolean`\>

Unregisters a global shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accelerator` | `string` | The accelerator string for the global shortcut to unregister. |

#### Returns

`Promise`\<`boolean`\>

A promise resolving to a boolean indicating success or failure.

#### Defined in

[src/services/globalShortcutService.ts:45](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L45)

___

### unregisterAll

▸ **unregisterAll**(): `void`

Unregisters all global shortcuts.

#### Returns

`void`

#### Defined in

[src/services/globalShortcutService.ts:63](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/globalShortcutService.ts#L63)
