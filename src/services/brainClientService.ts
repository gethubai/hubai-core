/**
 * Interface representing a generic brain capability.
 */
export interface IBrainCapability {}

/**
 * Represents a local brain with various properties and capabilities.
 */
export type LocalBrain = {
  /** Unique identifier for the local brain. */
  id: string;

  /** Internal name of the local brain. */
  name: string;

  /** Display name of the local brain. */
  displayName: string;

  /** Optional description of the local brain. */
  description?: string;

  /** List of capabilities (as strings) supported by the local brain. */
  capabilities: string[];

  /** Version of the local brain. */
  version: string;

  /** Optional icon representing the local brain. */
  icon?: string;

  /** Optional URL for the icon of the local brain. */
  iconUrl?: string;

  /** Publisher id. */
  publisher?: string;

  /** Optional flag indicating if the local brain is disabled. */
  disabled?: boolean;
};

/**
 * Represents the role of a prompt in a conversation with a brain.
 */
export type PromptRole = 'user' | 'brain' | 'system';

/**
 * Represents an attachment in a brain prompt.
 */
export type BrainPromptAttachment = {
  /** File path of the attachment. */
  path: string;

  /** MIME type of the attachment. */
  mimeType: string;

  /** Size of the attachment in bytes. */
  size: number;

  /** Optional original file name of the attachment. */
  originalFileName?: string;
};

/**
 * Represents a prompt in a conversation with a brain.
 */
export type BrainPrompt = {
  /** Role of the prompt (user, brain, or system). */
  role: PromptRole;

  /** Date and time when the prompt was sent. */
  sentAt: Date;

  /** Content of the prompt. */
  value: string;

  /** Optional array of attachments. */
  attachments?: BrainPromptAttachment[];
};

/**
 * Represents options for a brain prompt.
 */
export type PromptOptions = {
  /** Dictionary of prompt options. */
  [key: string]: any;

  /** Optional settings for the prompt. */
  settings?: any;
};

/**
 * Represents an attachment in a brain response.
 */
export type BrainResponseAttachment = {
  /** Data of the attachment (Buffer or string). */
  data: Buffer | string;

  /** MIME type of the attachment. */
  mimeType: string;

  /** File type of the attachment. */
  fileType: string;

  /** Optional caption for the attachment. */
  caption?: string;

  /** Optional file name for the attachment. */
  fileName?: string;
};

/**
 * Represents a response from a brain.
 */
export type BrainResponse = {
  /** Result of the brain's processing. */
  result: string;

  /** Array of error messages, if any. */
  errors: string[];

  /** Optional array of attachments. */
  attachments?: BrainResponseAttachment[];
};

/**
 * Extends IBrainCapability for text-based interactions.
 */
export interface ITextBrainCapability extends IBrainCapability {
  /**
   * Sends a text prompt to the brain.
   * @param prompts Array of BrainPrompt objects.
   * @param options Optional PromptOptions.
   * @returns A promise resolving to a BrainResponse.
   */
  sendTextPrompt(
    prompts: BrainPrompt[],
    options?: PromptOptions
  ): Promise<BrainResponse>;
}

/**
 * Represents an audio prompt for transcription.
 */
export type AudioPrompt = {
  /** File path to the audio file. */
  audioFilePath: string;

  /** Language of the audio content. */
  language: string;
};

/**
 * Extends IBrainCapability for audio transcription functionality.
 */
export interface IAudioTranscriptionBrainCapability extends IBrainCapability {
  /**
   * Transcribes audio content.
   * @param prompt The AudioPrompt to transcribe.
   * @param options Optional PromptOptions.
   * @returns A promise resolving to a BrainResponse.
   */
  transcribeAudio(
    prompt: AudioPrompt,
    options?: PromptOptions
  ): Promise<BrainResponse>;
}

/**
 * Represents a brain prompt for image generation with expected response type.
 */
export type ImageGenerationBrainPrompt = BrainPrompt & {
  /** Expected response type for the image generation ('base64', 'url', or 'binary'). */
  expectedResponseType: 'base64' | 'url' | 'binary';
};

/**
 * Extends IBrainCapability for image generation capabilities.
 */
export interface IImageGenerationBrainCapability extends IBrainCapability {
  /**
   * Generates an image based on the provided prompts.
   * @param prompts Array of ImageGenerationBrainPrompt objects.
   * @param options Optional PromptOptions.
   * @returns A promise resolving to a BrainResponse.
   */
  generateImage(
    prompts: ImageGenerationBrainPrompt[],
    options?: PromptOptions
  ): Promise<BrainResponse>;
}

/**
 * Interface for a brain client, incorporating various capabilities.
 */
export interface IBrainClient {
  /** The LocalBrain associated with the client. */
  brain: LocalBrain;

  /** Optional text conversation capability. */
  conversation?: ITextBrainCapability;

  /** Optional audio transcription capability. */
  voiceTranscription?: IAudioTranscriptionBrainCapability;

  /** Optional image generation capability. */
  imageGeneration?: IImageGenerationBrainCapability;
}

/**
 * Interface for managing brain clients.
 */
export interface IBrainClientManager {
  /**
   * Retrieves a specific brain client by ID.
   * @param brainId The ID of the brain to retrieve.
   * @returns The IBrainClient if found, otherwise undefined.
   */
  getClient(brainId: string): IBrainClient | undefined;

  /**
   * Retrieves all available brain clients.
   * @returns An array of IBrainClient objects.
   */
  getAvailableClients(): IBrainClient[];

  /**
   * Retrieves all available local brains.
   * @returns An array of LocalBrain objects.
   */
  getAvailableBrains(): LocalBrain[];

  /**
   * Retrieves the default client for a given capability.
   * @param capability The capability to search for.
   * @returns The default IBrainClient for the given capability, if one exists.
   */
  getDefaultForCapability(capability: string): IBrainClient | undefined;
}
