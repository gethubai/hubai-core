import React, { useEffect, useRef, useMemo, useCallback } from 'react';

import { KeyCode, Uri, editor as monaco } from '@/monaco';
import { ChatAction } from './types';
import ChatInputEditor from './chatInputEditor';
import { CHAT_LANGUAGE_ID } from '@/monaco/chat';

type ChatInputContainerProps = {
  children: React.ReactNode;
};

function ChatInteractionContainer({ children }: ChatInputContainerProps) {
  return (
    <div className="interactive-input-part">
      <div className="interactive-input-and-toolbar">{children}</div>
    </div>
  );
}

export type ChatInputApi = {
  getValue: () => string | undefined;
  setValue: (value: string) => void;
  triggerResize: () => void;
};

type ChatInputProps = {
  onAction: (action: ChatAction, editor: monaco.ICodeEditor) => void;
  id: string;
  onApiRef?: (api: ChatInputApi) => void;
  monacoInputOptions?: monaco.IStandaloneEditorConstructionOptions;
};

export function ChatInput({ onAction, id, onApiRef, monacoInputOptions }: ChatInputProps) {
  const editor = useRef<monaco.IStandaloneCodeEditor>(null);
  const modelUri = useMemo(() => Uri.parse(`inmemory://model/${id}`), [id]);
  const monacoModel = useMemo(
    () =>
      monaco.getModel(modelUri) ??
      monaco.createModel('', CHAT_LANGUAGE_ID, modelUri),
    [modelUri]
  );

  useEffect(() => {
    editor.current?.addAction({
      id: ChatAction.sendMessage,
      label: 'Send',
      keybindings: [KeyCode.Enter],
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: (editorCtx) => {
        onAction(ChatAction.sendMessage, editorCtx);
      },
    });
    return () => {
      // we should dispose this but for some reason it bugs when other chat windows is opened
      // if (editor.current) {
      //     editor.current.dispose();
      // }
    };
  }, [onAction]);

  const setRef = useCallback((e: monaco.ICodeEditor) => {
    (editor.current as any) = e;
  }, []);

  useEffect(() => {
    onApiRef?.({
      getValue: () => editor.current?.getValue(),
      setValue: (value: string) => editor.current?.setValue(value),
      triggerResize: () => editor.current?.layout({} as any),
    });
  }, [onApiRef]);

  return (
    <ChatInputEditor
      optionsOverride={monacoInputOptions}
      model={monacoModel}
      editorInstanceRef={setRef}
    />
  );
}

export default ChatInteractionContainer;
