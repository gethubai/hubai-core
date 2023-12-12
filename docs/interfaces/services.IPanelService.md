# Interface: IPanelService

[services](../modules/services.md).IPanelService

## Hierarchy

- `Component`\<[`IPanel`](model.IPanel.md)\>

  ↳ **`IPanelService`**

## Table of contents

### Properties

- [outputEditorInstance](services.IPanelService.md#outputeditorinstance)
- [state](services.IPanelService.md#state)

### Methods

- [add](services.IPanelService.md#add)
- [appendOutput](services.IPanelService.md#appendoutput)
- [cleanOutput](services.IPanelService.md#cleanoutput)
- [getOutputValue](services.IPanelService.md#getoutputvalue)
- [getPanel](services.IPanelService.md#getpanel)
- [onTabChange](services.IPanelService.md#ontabchange)
- [onTabClose](services.IPanelService.md#ontabclose)
- [onToolbarClick](services.IPanelService.md#ontoolbarclick)
- [open](services.IPanelService.md#open)
- [remove](services.IPanelService.md#remove)
- [reset](services.IPanelService.md#reset)
- [setActive](services.IPanelService.md#setactive)
- [subscribe](services.IPanelService.md#subscribe)
- [toggleMaximize](services.IPanelService.md#togglemaximize)
- [unsubscribe](services.IPanelService.md#unsubscribe)
- [update](services.IPanelService.md#update)
- [updateOutput](services.IPanelService.md#updateoutput)

## Properties

### outputEditorInstance

• `Readonly` **outputEditorInstance**: `undefined` \| `IStandaloneCodeEditor`

The editorInstance of Output

#### Defined in

[src/services/workbench/panelService.ts:12](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L12)

___

### state

• `Protected` `Abstract` **state**: [`IPanel`](model.IPanel.md)

#### Inherited from

Component.state

#### Defined in

[src/react/component.ts:44](https://github.com/gethubai/hubai-core/blob/43abc4a/src/react/component.ts#L44)

## Methods

### add

▸ **add**(`data`): `void`

Add new Panel items

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPanelItem`](model.IPanelItem.md)\<`any`\> \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>[] |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:35](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L35)

___

### appendOutput

▸ **appendOutput**(`content`): `void`

Append the content into Output panel

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:82](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L82)

___

### cleanOutput

▸ **cleanOutput**(): `void`

Clean the Output content

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:86](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L86)

___

### getOutputValue

▸ **getOutputValue**(): `string`

Get the value of Output Panel

#### Returns

`string`

#### Defined in

[src/services/workbench/panelService.ts:77](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L77)

___

### getPanel

▸ **getPanel**(`id`): `undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

Get the specific panel

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:30](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L30)

___

### onTabChange

▸ **onTabChange**(`callback`): `void`

Listen to the Panel tabs onChange event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`panelId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:61](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L61)

___

### onTabClose

▸ **onTabClose**(`callback`): `void`

Listen to the Panel tabs close event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`panelId`: `UniqueId`) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:73](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L73)

___

### onToolbarClick

▸ **onToolbarClick**(`callback`): `void`

Listen to the Panel toolbar click event

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`e`: `MouseEvent`\<`Element`, `MouseEvent`\>, `item`: `IActionBarItemProps`\<`any`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:66](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L66)

___

### open

▸ **open**(`panel`): `void`

Open a new or existing panel item as the active in Panel view

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`IPanelItem`](model.IPanelItem.md)\<`any`\> |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:25](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L25)

___

### remove

▸ **remove**(`id`): `undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

Remove the specific panel

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `UniqueId` |

#### Returns

`undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:52](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L52)

___

### reset

▸ **reset**(): `void`

Reset data in state

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:90](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L90)

___

### setActive

▸ **setActive**(`id`): `void`

Set the current active panel

This method will log error when couldn't find target panel in state data.
So if you want to add a panel and meanwhile active it, please use the `open` method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `UniqueId` | target panel id |

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:20](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L20)

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

### toggleMaximize

▸ **toggleMaximize**(): `void`

Toggle the panel between maximized or normal

#### Returns

`void`

#### Defined in

[src/services/workbench/panelService.ts:56](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L56)

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

___

### update

▸ **update**(`panel`): `undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

Update the specific panel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`IPanelItem`](model.IPanelItem.md)\<`any`\> | the id field is required |

#### Returns

`undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:40](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L40)

___

### updateOutput

▸ **updateOutput**(`panel`): `undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

Update the Output panel, except the value

If you want to update the value of this panel, please use the `appendOutput` method

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`IPanelItem`](model.IPanelItem.md)\<`any`\> |

#### Returns

`undefined` \| [`IPanelItem`](model.IPanelItem.md)\<`any`\>

#### Defined in

[src/services/workbench/panelService.ts:47](https://github.com/gethubai/hubai-core/blob/43abc4a/src/services/workbench/panelService.ts#L47)
