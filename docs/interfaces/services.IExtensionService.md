# Interface: IExtensionService

[services](../modules/services.md).IExtensionService

## Table of contents

### Methods

- [activate](services.IExtensionService.md#activate)
- [add](services.IExtensionService.md#add)
- [dispose](services.IExtensionService.md#dispose)
- [disposeAll](services.IExtensionService.md#disposeall)
- [executeCommand](services.IExtensionService.md#executecommand)
- [getAllExtensions](services.IExtensionService.md#getallextensions)
- [getExtension](services.IExtensionService.md#getextension)
- [inactive](services.IExtensionService.md#inactive)
- [isLoaded](services.IExtensionService.md#isloaded)
- [load](services.IExtensionService.md#load)
- [registerAction](services.IExtensionService.md#registeraction)
- [reset](services.IExtensionService.md#reset)
- [setLoaded](services.IExtensionService.md#setloaded)
- [splitLanguagesExts](services.IExtensionService.md#splitlanguagesexts)

## Methods

### activate

▸ **activate**(`extensions`): `void`

Activate the extensions (includes `contributes` type).
Notice: this method only do  the `activate` work, not store the data into ExtensionService,
which means you can't get the Extension by the `ExtensionService. getExtension` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensions` | [`IExtension`](model.IExtension.md)[] |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:27](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L27)

___

### add

▸ **add**(`extensions`): ``null`` \| [`IExtension`](model.IExtension.md)[]

Add the extensions to ExtensionService, but no activated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensions` | [`IExtension`](model.IExtension.md)[] | The Extensions wait to added |

#### Returns

``null`` \| [`IExtension`](model.IExtension.md)[]

Unload Extensions

#### Defined in

[src/services/extensionService.ts:20](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L20)

___

### dispose

▸ **dispose**(`extensionId`): `void`

Dispose the specific extension, and remove it from the ExtensionService

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionId` | `UniqueId` |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:42](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L42)

___

### disposeAll

▸ **disposeAll**(): `void`

Dispose all extensions, and reset the ExtensionService

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:46](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L46)

___

### executeCommand

▸ **executeCommand**(`id`, `...args`): `void`

Execute the registered command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The command ID |
| `...args` | `any` |  |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:79](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L79)

___

### getAllExtensions

▸ **getAllExtensions**(): [`IExtension`](model.IExtension.md)[]

Get All loaded extensions

#### Returns

[`IExtension`](model.IExtension.md)[]

Extension Array

#### Defined in

[src/services/extensionService.ts:37](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L37)

___

### getExtension

▸ **getExtension**(`id`): `undefined` \| [`IExtension`](model.IExtension.md)

Get an extension by the ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IExtension`](model.IExtension.md)

#### Defined in

[src/services/extensionService.ts:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L32)

___

### inactive

▸ **inactive**(`predicate`): `void`

Disable to activate some extensions, make use of it to filter some
extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`extension`: [`IExtension`](model.IExtension.md)) => `boolean` | The predicate function |

#### Returns

`void`

**`Example`**

```ts
 molecule.extension.inactive((extension: IExtension) => {
     if (/^(idA|idB)$/.test(extension.id)) {
         return true;
     }
 });
 <MoleculeProvider extensions={[]}></MoleculeProvider>
```

#### Defined in

[src/services/extensionService.ts:61](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L61)

___

### isLoaded

▸ **isLoaded**(): `boolean`

whether the extensions are loaded

#### Returns

`boolean`

#### Defined in

[src/services/extensionService.ts:93](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L93)

___

### load

▸ **load**(`extensions`): `void`

Load the extension instances and then activate them.
Notice: The ExtensionService doesn't load an existed Extension, if you want inactivate
someone extension, there can use the `ExtensionService.inactive` method, also if you want
remove a extension, you can use the `ExtensionService.dispose` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensions` | [`IExtension`](model.IExtension.md)[] | The extension array |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:14](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L14)

___

### registerAction

▸ **registerAction**(`actionClass`): `IDisposable`

Register a new action which is extends the Action2, and return a disposable instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionClass` | () => `Action2` | The action class |

#### Returns

`IDisposable`

IDisposable The Disposable instance

**`Example`**

```ts
const action = class Action extends Action2 {};
const disposableAction = registerAction(action);
disposableAction.dispose(); // Dispose the action
```

#### Defined in

[src/services/extensionService.ts:73](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L73)

___

### reset

▸ **reset**(): `void`

Reset the extensions to `[]`

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:83](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L83)

___

### setLoaded

▸ **setLoaded**(`flag?`): `void`

Set the extensions are loaded

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/services/extensionService.ts:97](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L97)

___

### splitLanguagesExts

▸ **splitLanguagesExts**(`extensions`): [[`IExtension`](model.IExtension.md)[], [`IExtension`](model.IExtension.md)[]]

Distinguish the language extensions from extensions

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensions` | [`IExtension`](model.IExtension.md)[] |

#### Returns

[[`IExtension`](model.IExtension.md)[], [`IExtension`](model.IExtension.md)[]]

[ languagesExts, otherExtensions ]

#### Defined in

[src/services/extensionService.ts:89](https://github.com/mtsdnz/allai-core/blob/5932278/src/services/extensionService.ts#L89)
