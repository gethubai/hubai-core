export interface IBrainCapability {}

export type LocalBrain = {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  capabilities: string[];
  version: string;
  icon?: string;
  iconUrl?: string;
  publisher?: string;
  disabled?: boolean;
};

export type PromptRole = 'user' | 'brain' | 'system';

export type BrainPromptAttachment = {
  path: string;
  mimeType: string;
  size: number;
  originalFileName?: string;
};

export type BrainPrompt = {
  role: PromptRole;
  sentAt: Date;
  value: string;
  attachments?: BrainPromptAttachment[];
};

export type PromptOptions = {
  [key: string]: any;
  settings?: any;
};

export type BrainResponseAttachment = {
  data: Buffer | string;
  mimeType: string;
  fileType: string;
  caption?: string;
  fileName?: string;
};

export type BrainResponse = {
  result: string;
  errors: string[];
  attachments?: BrainResponseAttachment[];
};

export interface ITextBrainCapability extends IBrainCapability {
  sendTextPrompt(
    prompts: BrainPrompt[],
    options?: PromptOptions
  ): Promise<BrainResponse>;
}

export type AudioPrompt = {
  audioFilePath: string;
  language: string;
};

export interface IAudioTranscriptionBrainCapability extends IBrainCapability {
  transcribeAudio(
    prompt: AudioPrompt,
    options?: PromptOptions
  ): Promise<BrainResponse>;
}

export type ImageGenerationBrainPrompt = BrainPrompt & {
  expectedResponseType: 'base64' | 'url' | 'binary';
};

export interface IImageGenerationBrainCapability extends IBrainCapability {
  generateImage(
    prompts: ImageGenerationBrainPrompt[],
    options?: PromptOptions
  ): Promise<BrainResponse>;
}

export interface IBrainClient {
  brain: LocalBrain;
  conversation?: ITextBrainCapability;
  voiceTranscription?: IAudioTranscriptionBrainCapability;
  imageGeneration?: IImageGenerationBrainCapability;
}

export interface IBrainClientManager {
  getClient(brainId: string): IBrainClient | undefined;
  getAvailableClients(): IBrainClient[];
  getAvailableBrains(): LocalBrain[];
  getDefaultForCapability(capability: string): IBrainClient | undefined;
}
