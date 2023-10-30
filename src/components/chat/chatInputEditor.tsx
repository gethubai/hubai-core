import React, { useMemo } from 'react';

import { editor as monaco } from '@/monaco';
import { MonacoEditor } from '@/components';
import { CHAT_LANGUAGE_ID } from '@/monaco/chat';

type ChatInputEditorProps = {
  editorInstanceRef: (editor: monaco.ICodeEditor) => void;
  model: monaco.ITextModel;
};

function ChatInputEditor({ model, editorInstanceRef }: ChatInputEditorProps) {
  const options = useMemo<monaco.IStandaloneEditorConstructionOptions>(
    () => ({
      model,
      readOnly: false,
      automaticLayout: true,
      lineNumbers: 'off',
      wordWrap: 'on',
      minimap: {
        enabled: false,
      },
      language: CHAT_LANGUAGE_ID,
    }),
    [model]
  );

  return (
    <div className="interactive-input-editor">
      <MonacoEditor options={options} editorInstanceRef={editorInstanceRef} />
    </div>
  );
}

export default ChatInputEditor;
