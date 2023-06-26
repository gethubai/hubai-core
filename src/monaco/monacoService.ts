import { editor as MonacoEditor } from 'monaco-editor';

import {
  IStandaloneEditorConstructionOptions,
} from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeEditor';

import {
  IEditorOverrideServices,
} from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneServices';
import { ICommandService } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { ServiceCollection } from 'monaco-editor/esm/vs/platform/instantiation/common/serviceCollection';

export interface IMonacoService {
  readonly services: ServiceCollection;
  readonly commandService: ICommandService;
  readonly container: HTMLElement | null;
  create(
    domElement: HTMLElement,
    options?: IStandaloneEditorConstructionOptions,
    overrides?: IEditorOverrideServices
  ): MonacoEditor.IStandaloneCodeEditor;
  /**
   * Initial the Workspace, like Services and editor config.
   */
  initWorkspace(container: HTMLElement): void;
}