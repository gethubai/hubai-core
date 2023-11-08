# Class: SearchModel

[model](../modules/model.md).SearchModel

## Implements

- [`ISearchProps`](../interfaces/model.ISearchProps.md)

## Table of contents

### Constructors

- [constructor](model.SearchModel.md#constructor)

### Properties

- [headerToolBar](model.SearchModel.md#headertoolbar)
- [isCaseSensitive](model.SearchModel.md#iscasesensitive)
- [isRegex](model.SearchModel.md#isregex)
- [isWholeWords](model.SearchModel.md#iswholewords)
- [preserveCase](model.SearchModel.md#preservecase)
- [replaceAddons](model.SearchModel.md#replaceaddons)
- [replaceMode](model.SearchModel.md#replacemode)
- [replaceValue](model.SearchModel.md#replacevalue)
- [result](model.SearchModel.md#result)
- [searchAddons](model.SearchModel.md#searchaddons)
- [validationInfo](model.SearchModel.md#validationinfo)
- [value](model.SearchModel.md#value)

## Constructors

### constructor

• **new SearchModel**(`headerToolBar?`, `searchAddons?`, `replaceAddons?`, `result?`, `value?`, `replaceValue?`, `replaceMode?`, `isCaseSensitive?`, `isWholeWords?`, `isRegex?`, `preserveCase?`, `validationInfo?`): [`SearchModel`](model.SearchModel.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headerToolBar` | `IActionBarItemProps`\<`any`\>[] | `[]` |
| `searchAddons` | `IActionBarItemProps`\<`any`\>[] | `[]` |
| `replaceAddons` | `IActionBarItemProps`\<`any`\>[] | `[]` |
| `result` | `never`[] | `[]` |
| `value` | `string` | `''` |
| `replaceValue` | `string` | `''` |
| `replaceMode` | `boolean` | `false` |
| `isCaseSensitive` | `boolean` | `false` |
| `isWholeWords` | `boolean` | `false` |
| `isRegex` | `boolean` | `false` |
| `preserveCase` | `boolean` | `false` |
| `validationInfo` | `Object` | `undefined` |
| `validationInfo.text` | `string` | `undefined` |
| `validationInfo.type` | ``"error"`` \| ``"warning"`` \| ``"info"`` | `undefined` |

#### Returns

[`SearchModel`](model.SearchModel.md)

#### Defined in

[src/model/workbench/search.tsx:55](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L55)

## Properties

### headerToolBar

• **headerToolBar**: `IActionBarItemProps`\<`any`\>[]

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[headerToolBar](../interfaces/model.ISearchProps.md#headertoolbar)

#### Defined in

[src/model/workbench/search.tsx:28](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L28)

___

### isCaseSensitive

• **isCaseSensitive**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[isCaseSensitive](../interfaces/model.ISearchProps.md#iscasesensitive)

#### Defined in

[src/model/workbench/search.tsx:44](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L44)

___

### isRegex

• **isRegex**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[isRegex](../interfaces/model.ISearchProps.md#isregex)

#### Defined in

[src/model/workbench/search.tsx:42](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L42)

___

### isWholeWords

• **isWholeWords**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[isWholeWords](../interfaces/model.ISearchProps.md#iswholewords)

#### Defined in

[src/model/workbench/search.tsx:46](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L46)

___

### preserveCase

• **preserveCase**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[preserveCase](../interfaces/model.ISearchProps.md#preservecase)

#### Defined in

[src/model/workbench/search.tsx:48](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L48)

___

### replaceAddons

• **replaceAddons**: `IActionBarItemProps`\<`any`\>[]

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[replaceAddons](../interfaces/model.ISearchProps.md#replaceaddons)

#### Defined in

[src/model/workbench/search.tsx:32](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L32)

___

### replaceMode

• **replaceMode**: `boolean` = `false`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[replaceMode](../interfaces/model.ISearchProps.md#replacemode)

#### Defined in

[src/model/workbench/search.tsx:40](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L40)

___

### replaceValue

• **replaceValue**: `string` = `''`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[replaceValue](../interfaces/model.ISearchProps.md#replacevalue)

#### Defined in

[src/model/workbench/search.tsx:38](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L38)

___

### result

• **result**: `ITreeNodeItemProps`\<`any`\>[] = `[]`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[result](../interfaces/model.ISearchProps.md#result)

#### Defined in

[src/model/workbench/search.tsx:34](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L34)

___

### searchAddons

• **searchAddons**: `IActionBarItemProps`\<`any`\>[]

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[searchAddons](../interfaces/model.ISearchProps.md#searchaddons)

#### Defined in

[src/model/workbench/search.tsx:30](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L30)

___

### validationInfo

• **validationInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `type` | ``"error"`` \| ``"warning"`` \| ``"info"`` |

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[validationInfo](../interfaces/model.ISearchProps.md#validationinfo)

#### Defined in

[src/model/workbench/search.tsx:50](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L50)

___

### value

• **value**: `string` = `''`

#### Implementation of

[ISearchProps](../interfaces/model.ISearchProps.md).[value](../interfaces/model.ISearchProps.md#value)

#### Defined in

[src/model/workbench/search.tsx:36](https://github.com/mtsdnz/allai-core/blob/5932278/src/model/workbench/search.tsx#L36)
