import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';

export abstract class Action2 {
  static readonly ID: string;

  constructor(
    readonly desc: Readonly<{
      /**
       * Specify visible in quick access view
       */
      f1: boolean;
      [key: string]: any;
    }>
  ) {}

  abstract run(accessor: ServicesAccessor, ...args: any[]): any;
}
