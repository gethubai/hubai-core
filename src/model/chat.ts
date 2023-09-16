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
