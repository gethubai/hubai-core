import { constants, modules } from './const';

export type IBuiltinModuleProps<T = any> = {
  id: string;
  module: () => T;
  /**
   * Before excuting the module, the value is empty
   */
  value?: T;
  active: boolean;
};

export type IBuiltinConstantProps = {
  id: string;
  value: string;
  active: boolean;
};

export type IBuiltinProps = IBuiltinModuleProps & IBuiltinConstantProps;

export interface IBuiltinService {
  /**
   * Mark the specific constant as inactive
   * @deprecated we're considering the necessary of this method, because it's useless for now to inactive a constant
   */
  inactiveConstant(id: keyof typeof constants): boolean;
  /**
   * Mark the specific module as inactive
   */
  inactiveModule(id: keyof typeof modules): boolean;
  /**
   * Get the specific constant by id
   */
  getConstant(id: keyof typeof constants): IBuiltinConstantProps | undefined;
  /**
   * Get all constants
   */
  getConstants(): Partial<typeof constants>;
  /**
   * Get the specific module by id
   */
  getModule<T>(id: keyof typeof modules): IBuiltinModuleProps<T> | undefined;
  /**
   * Get all modules
   */
  getModules(): any;
  /**
   * Reset all constants and modules
   */
  reset(): void;
}