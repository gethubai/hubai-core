export enum ChatAction {
  sendMessage = 'chat.send',
}

export type ChatMessageSendType = 'request' | 'response';

export type ChatVoiceMessageContent = {
  audioSrc: string;
  duration?: number;
  mimeType?: string;
};

export type ChatMessageAttachment = {
  id: string;
  fileSrc: string;
  attachmentType: 'image' | 'video' | 'audio' | 'document' | 'file' | string;
  mimeType: string;
  size: string;
  name: string;
};

export type ChatMessageViewModel = {
  id: string;
  textContent?: string;
  voiceContent?: ChatVoiceMessageContent;
  attachments?: ChatMessageAttachment[];
  messageContentType: "image" | "text" | "voice" | string;
  sentAt: Date;
  senderDisplayName: string;
  messageType: ChatMessageSendType;
  status: "waiting" | "sent" | "delivered" | "seen" | string;
  avatarSrc?: string;
  avatarIcon?: string;
};
