# Interface: ISearchService

[services](../modules/services.md).ISearchService

## Hierarchy

- `Component`\<[`ISearchProps`](model.ISearchProps.md)\>

  ↳ **`ISearchService`**

## Table of contents

### Properties

- [setReplaceValue](services.ISearchService.md#setreplacevalue)
- [setResult](services.ISearchService.md#setresult)
- [setSearchValue](services.ISearchService.md#setsearchvalue)
- [setValidateInfo](services.ISearchService.md#setvalidateinfo)
- [state](services.ISearchService.md#state)
- [toggleCaseSensitive](services.ISearchService.md#togglecasesensitive)
- [toggleMode](services.ISearchService.md#togglemode)
- [togglePreserveCase](services.ISearchService.md#togglepreservecase)
- [toggleRegex](services.ISearchService.md#toggleregex)
- [toggleWholeWord](services.ISearchService.md#togglewholeword)
- [updateStatus](services.ISearchService.md#updatestatus)

### Methods

- [onChange](services.ISearchService.md#onchange)
- [onReplaceAll](services.ISearchService.md#onreplaceall)
- [onResultClick](services.ISearchService.md#onresultclick)
- [onSearch](services.ISearchService.md#onsearch)
- [reset](services.ISearchService.md#reset)
- [subscribe](services.ISearchService.md#subscribe)
- [unsubscribe](services.ISearchService.md#unsubscribe)

## Properties

### setReplaceValue

• **setReplaceValue**: (`value?`: `string`) => `void`

#### Type declaration

▸ (`value?`): `void`

Set replace value for replace input

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` |

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:20](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L20)

___

### setResult

• **setResult**: (`value?`: `ITreeNodeItemProps`\<`any`\>[]) => `void`

#### Type declaration

▸ (`value?`): `void`

Set result data for searching result

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `ITreeNodeItemProps`\<`any`\>[] |

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:24](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L24)

___

### setSearchValue

• **setSearchValue**: (`value?`: `string`) => `void`

#### Type declaration

▸ (`value?`): `void`

Set search value for search input

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` |

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:16](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L16)

___

### setValidateInfo

• **setValidateInfo**: (`info`: `undefined` \| `string` \| \{ `text`: `string` ; `type`: ``"error"`` \| ``"warning"`` \| ``"info"``  }) => `void`

#### Type declaration

▸ (`info`): `void`

Set informations about validating,

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | `undefined` \| `string` \| \{ `text`: `string` ; `type`: ``"error"`` \| ``"warning"`` \| ``"info"``  } | If provided a string, molecule will set it type as `info` |

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:12](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L12)

___

### state

• `Protected` `Abstract` **state**: [`ISearchProps`](model.ISearchProps.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/react/component.ts#L44)

___

### toggleCaseSensitive

• **toggleCaseSensitive**: () => `void`

#### Type declaration

▸ (): `void`

Toggle the rule for case senstitive when searching

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:32](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L32)

___

### toggleMode

• **toggleMode**: (`status`: `boolean`) => `void`

#### Type declaration

▸ (`status`): `void`

Toggle search mode, `true` for replace mode

##### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `boolean` |

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:28](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L28)

___

### togglePreserveCase

• **togglePreserveCase**: () => `void`

#### Type declaration

▸ (): `void`

Toggle the rule for preserving case when replacing

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L44)

___

### toggleRegex

• **toggleRegex**: () => `void`

#### Type declaration

▸ (): `void`

Toggle the rule for enabling regex when searching

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:40](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L40)

___

### toggleWholeWord

• **toggleWholeWord**: () => `void`

#### Type declaration

▸ (): `void`

Toggle the rule for finding whole word when searching

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:36](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L36)

___

### updateStatus

• **updateStatus**: (`addonId`: `string`, `checked`: `boolean`) => `void`

#### Type declaration

▸ (`addonId`, `checked`): `void`

Update the status of specific addon icon to `checked`

##### Parameters

| Name | Type |
| :------ | :------ |
| `addonId` | `string` |
| `checked` | `boolean` |

##### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:48](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L48)

## Methods

### onChange

▸ **onChange**(`callback`): `void`

Listen to the event about the value of search input changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `string`, `replaceValue`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:56](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L56)

___

### onReplaceAll

▸ **onReplaceAll**(`callback`): `void`

Listen to the event about replace all text in result

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:75](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L75)

___

### onResultClick

▸ **onResultClick**(`callback`): `void`

Listen to the click event in result data

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`item`: `ITreeNodeItemProps`\<`any`\>, `resultData`: `ITreeNodeItemProps`\<`any`\>[]) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:79](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L79)

___

### onSearch

▸ **onSearch**(`callback`): `void`

Listen to the event about going to search result via values or config changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `string`, `replaceValue`: `string`, `config`: \{ `isCaseSensitive`: `boolean` ; `isRegex`: `boolean` ; `isWholeWords`: `boolean` ; `preserveCase`: `boolean`  }) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:60](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L60)

___

### reset

▸ **reset**(): `void`

Reset the search input data

#### Returns

`void`

#### Defined in

[src/services/workbench/searchService.ts:52](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/searchService.ts#L52)

___

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` \| `string`[] | Event name |
| `listener` | `Function` | Listener function |

#### Returns

`void`

#### Inherited from

Component.subscribe

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/event/eventBus.ts#L11)

___

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `any` | The event name |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

Component.unsubscribe

#### Defined in

[src/common/event/eventBus.ts:39](https://github.com/gethubai/hubai-core/blob/43abc4a/src/common/event/eventBus.ts#L39)
