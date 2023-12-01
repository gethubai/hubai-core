export interface IChatCommandCompletionItem {
  label: string;
  insertText: string;
  shortDescription?: string;
  description?: string;
  command?: string;
}

export interface IChatCommandCompletionDefinition {
  path: string;
  language: string;
  values?: IChatCommandCompletionItem[];
}

export interface IChatCommandCompletion {
  [key: string]: IChatCommandCompletionDefinition[];
}

export interface IChatContribute {
  commands: IChatCommandCompletion;
}

export type ChatInfo = {
  /**
   * Unique identifier for the chat.
   */
  id: string;
  /**
   * Name of the chat.
   */
  name: string;
  /**
   * User who initiated the chat.
   */
  initiator: string;
  /**
   * Date when the chat was created.
   */
  createdDate: Date | string;
  /**
   * False if this is a group chat, true if this is a 1-1 chat.
   */
  isDirect?: boolean;
};

export interface IChatInstruction {
  /**
   * Instruction text.
   */
  text: string;
  /**
   * Specify which message types this instruction applies to. If not specified, it applies to all message types.
   * Possible values: text, image, voice.
   */
  handlerMessageType?: string[];
}

export type ChatMessageAttachment = {
  /**
   * Unique identifier for the attachment.
   */
  id: string;
  /**
   * File path or URL for the attachment.
   */
  file: string;
  /**
   * Original file name of the attachment.
   */
  originalFileName: string;
  /**
   * MIME type of the attachment.
   */
  mimeType: string;
  /**
   * Type of the attachment.
   */
  attachmentType: string;
  /**
   * Optional caption for the attachment.
   */
  caption?: string;
  /**
   * Size of the attachment in bytes.
   */
  size: number;
};

export type ChatMessage = {
  /**
   * The message identifier.
   */
  id: string;
  /**
   * Identifier of the message sender.
   */
  senderId: string;
  /**
   * Array of recipient identifiers.
   */
  recipients: string[];
  /**
   * Date and time when the message was sent.
   */
  sendDate: Date | string;
  /**
   * Text content of the message, if any.
   */
  text?: string;
  /**
   * Array of attachments included in the message.
   */
  attachments?: ChatMessageAttachment[];
  /**
   * Audio content of the message, if any.
   */
  audio?: string;
  /**
   * Indicates if the message is hidden.
   */
  hidden?: boolean;
  /**
   * True if the message is a system message.  (We use this for error messages, or other messages that shouldn't be catch by brains in the history)
   */
  isSystemMessage?: boolean;
};

export type ChatAuxiliaryBar = {
  /** An unique id */
  id: string;
  /** The title */
  title: string;
  /** The content that will be displayed in the auxiliary bar */
  render: React.ReactNode;
};

export type ChatMemberSetting = {
  [key: string]: any;

  /** Custom instructions (Only applied to brains) */
  instructions?: string;

  /** If true, the full chat history won't be sent to the brain, only the latest message. (Only applied to brains)  */
  ignorePreviousMessages?: boolean;
};

export type ChatMember = {
  /** The id of the member */
  id: string;
  /** The member type (user, brain or assistant) */
  memberType: string; // user, brain or assistant

  /** The current settings of the member */
  settings?: ChatMemberSetting;

  /** The type of messages that this member handlers (only applied to brains) */
  handleMessageTypes?: string[];
};
