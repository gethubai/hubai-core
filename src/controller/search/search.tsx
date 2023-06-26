import 'reflect-metadata';
import { Controller } from '@/react/controller';
import { IActionBarItemProps } from '@/components/actionBar';
import { ISearchProps, ITreeNodeItemProps } from '@/components';

export interface ISearchController extends Partial<Controller> {
  getSearchIndex?: (text: string, queryVal?: string) => number;
  setSearchValue?: (value?: string) => void;
  setReplaceValue?: (value?: string) => void;
  setValidateInfo?: (info: string | ISearchProps['validationInfo']) => void;
  toggleMode?: (status: boolean) => void;
  toggleAddon?: (addon?: IActionBarItemProps) => void;
  validateValue?: (
    value: string,
    callback: (err: void | Error) => void
  ) => void;

  onResultClick?: (
    item: ITreeNodeItemProps,
    resultData: ITreeNodeItemProps[]
  ) => void;
  onChange?: (value: string, replaceValue: string) => void;
  onSearch?: (value: string, replaceValue: string) => void;
}