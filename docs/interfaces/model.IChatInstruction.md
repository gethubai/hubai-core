# Interface: IChatInstruction

[model](../modules/model.md).IChatInstruction

## Table of contents

### Properties

- [handlerMessageType](model.IChatInstruction.md#handlermessagetype)
- [text](model.IChatInstruction.md#text)

## Properties

### handlerMessageType

• `Optional` **handlerMessageType**: `string`[]

Specify which message types this instruction applies to. If not specified, it applies to all message types.
Possible values: text, image, voice.

#### Defined in

[src/model/chat.ts:55](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/chat.ts#L55)

___

### text

• **text**: `string`

Instruction text.

#### Defined in

[src/model/chat.ts:50](https://github.com/gethubai/hubai-core/blob/43abc4a/src/model/chat.ts#L50)
