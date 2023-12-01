import { ISubMenuProps } from '@/components';
import { IBrainClient } from './brainClientService';
import {
  IAuxiliaryData,
  ISettingMap,
  ChatInfo,
  ChatMember,
  ChatMemberSetting,
  ChatMessage,
} from '..';

export interface IChatAssistantsManagement {
  /**
   * Retrieves a list of current chat assistants.
   * @returns Array of IChatAssistant.
   */
  getAssistants(): IChatAssistant[];
  /**
   * Adds a new assistant to the chat.
   * @param assistant The assistant to be added.
   */
  addAssistant(assistant: IChatAssistant): void;
  /**
   * Removes an assistant from the chat.
   * @param assistantId The identifier of the assistant to be removed.
   */
  removeAssistant(assistantId: string): void;
}

export interface IChatAssistant {
  /**
   * Unique identifier for the chat assistant.
   */
  id: string;
  /**
   * Display name of the chat assistant.
   */
  displayName: string;
  /**
   * Optional Icon url for the chat assistant.
   */
  icon?: string;
  /**
   * Settings map for the assistant.
   */
  settingsMap?: ISettingMap[];
  /**
   * Retrieves the default settings for the chat assistant.
   * @returns Default settings.
   */
  getDefaultSettings: () => any;
  /**
   * Creates a controller for the chat assistant.
   * @returns An instance of IChatAssistantController or undefined.
   */
  createController?: () => IChatAssistantController | undefined;
}

export type ChatAssistantContext = {
  /**
   * Session service for the chat.
   */
  session: IChatSessionService;
  /**
   * Information about the current chat.
   */
  chat: ChatInfo;
  /**
   * Function to set chat settings.
   * @param settings The settings to be set.
   */
  setSettings: (settings: any) => void;
  /**
   * Retrieves the current chat settings.
   * @returns The current settings or undefined.
   */
  getSettings: () => any | undefined;
  /**
   * Appends a component to the auxiliary bar.
   * @param component The React component to be appended.
   */
  appendToAuxiliaryBar: (component: React.ReactNode) => void;
};

export interface IChatAssistantController {
  /**
   * Initializes the chat assistant controller with the provided context.
   * @param context The context for the chat assistant.
   */
  init(context: ChatAssistantContext): void;
  /**
   * Called when chat settings are updated.
   * @param settings The updated settings.
   */
  onSettingsUpdated?(settings: any): void;
  /**
   * Called when the chat is updated.
   * @param chat Updated chat info.
   */
  onChatUpdated?(chat: ChatInfo): void;
  /**
   * Validates the settings.
   * @param settings The settings to validate.
   * @returns A string if there's an error, or undefined if valid.
   */
  validateSettings?(settings: any): string | undefined;
  /**
   * Disposes of the controller.
   */
  dispose?(): void;
}

export type SendChatMessageOptions = {
  /**
   * Text of the message to be sent.
   */
  text?: string;
  /**
   * File attachments for the message.
   */
  attachments?: File[];
  /**
   * Audio content for the message.
   */
  audio?: Blob;
  /**
   * Indicates if the message is hidden.
   */
  hidden?: boolean;
  /**
   * True if the message is a system message.
   */
  isSystemMessage?: boolean;
};

export interface IChatSessionService {
  /**
   * Sends a message to the chat.
   * @param options Message options
   * @returns True if the message was sent successfully, false otherwise.
   */
  sendMessage(options: SendChatMessageOptions): Promise<boolean>;

  /**
   * Gets all brains that are in the chat.
   */
  getBrains(): IBrainClient[];

  /**
   * Gets all the chat messages
   */
  messages(): Promise<ChatMessage[]>;

  /**
   * Subscribe to onMessageReceived event
   */
  onMessageReceived(callback: (message: ChatMessage) => void): void;

  /**
   * Subscribe to onMessageUpdated event
   */
  onMessageUpdated(callback: (message: ChatMessage) => void): void;

  /**
   * Adds a new auxiliary bar to the chat window
   */
  addAuxiliaryBar(
    auxiliaryBar: IAuxiliaryData,
    component: React.ReactNode
  ): void;

  /**
   * Adds a new action to the plus button menu
   */
  addPlusButtonAction(action: ISubMenuProps): void;

  /**
   * Change the settings of a chat member
   * @param memberId The id of the member
   * @param settings The new settings (It will only override the settings specified in the object, settings that are not specified will remain the same)
   */
  changeMemberSettings(memberId: string, settings: ChatMemberSetting): void;

  /**
   * Gets all the chat members
   */
  getMembers(): ChatMember[];
}
