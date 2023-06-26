import 'reflect-metadata';
import { Component } from '@/react/component';

import { ISearchProps } from '@/model/workbench/search';
import { ITreeNodeItemProps } from '@/components';

export interface ISearchService extends Component<ISearchProps> {
  /**
   * Set informations about validating,
   * @param info - If provided a string, molecule will set it type as `info`
   */
  setValidateInfo: (info: string | ISearchProps['validationInfo']) => void;
  /**
   * Set search value for search input
   */
  setSearchValue: (value?: string) => void;
  /**
   * Set replace value for replace input
   */
  setReplaceValue: (value?: string) => void;
  /**
   * Set result data for searching result
   */
  setResult: (value?: ITreeNodeItemProps[]) => void;
  /**
   * Toggle search mode, `true` for replace mode
   */
  toggleMode: (status: boolean) => void;
  /**
   * Toggle the rule for case senstitive when searching
   */
  toggleCaseSensitive: () => void;
  /**
   * Toggle the rule for finding whole word when searching
   */
  toggleWholeWord: () => void;
  /**
   * Toggle the rule for enabling regex when searching
   */
  toggleRegex: () => void;
  /**
   * Toggle the rule for preserving case when replacing
   */
  togglePreserveCase: () => void;
  /**
   * Update the status of specific addon icon to `checked`
   */
  updateStatus: (addonId: string, checked: boolean) => void;
  /**
   * Reset the search input data
   */
  reset(): void;
  /**
   * Listen to the event about the value of search input changed
   */
  onChange(callback: (value: string, replaceValue: string) => void): void;
  /**
   * Listen to the event about going to search result via values or config changed
   */
  onSearch(
    callback: (
      value: string,
      replaceValue: string,
      config: {
        isRegex: boolean;
        isCaseSensitive: boolean;
        isWholeWords: boolean;
        preserveCase: boolean;
      }
    ) => void
  ): void;
  /**
   * Listen to the event about replace all text in result
   */
  onReplaceAll(callback: () => void): void;
  /**
   * Listen to the click event in result data
   */
  onResultClick(
    callback: (
      item: ITreeNodeItemProps,
      resultData: ITreeNodeItemProps[]
    ) => void
  ): void;
}
