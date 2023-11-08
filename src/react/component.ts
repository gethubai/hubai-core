import { cloneDeep } from 'lodash';
import { EventEmitter, GlobalEvent } from '@/common/event';

export enum ComponentEvents {
  Update = 'Component.Update',
}

export interface IComponent<S = any> {
  /**
   * Set the Component state
   * @param values The next values of state
   * @param callback calling after setState
   */
  setState(values: S, callback?: (prevState: S, nextState: S) => void): void;
  /**
   * Trigger the Component update event
   * @param nextState
   */
  render(nextState?: S): void;
  /**
   * Listen to the Component state update event
   * @param listener
   */
  onUpdateState(listener: (prevState: S, nextState: S) => void): void;
  /**
   * Remove the Component update event listening, default is remove all,
   * also you can remove one by pass the listener
   */
  removeOnUpdateState(listener?: Function): void;
  /**
   * Force to update the Component
   */
  forceUpdate(): void;
  /**
   * Get the Component state
   */
  getState(): S;
}

export abstract class Component<S = any>
  extends GlobalEvent
  implements IComponent<S>
{
  protected abstract state: S;

  private _prevState: S | undefined;

  private _event: EventEmitter;

  constructor() {
    super();
    this._event = new EventEmitter();
  }

  /**
   * Set the state values, and notify the view component to re render
   * @param values update target state values
   */
  /** @hidden */
  public setState(
    values: Partial<S>,
    callback?: (prevState: S, nextState: S) => void
  ) {
    this._prevState = { ...this.state };
    const nextState = Object.assign(this.state as any, values);
    this.render(nextState);
    callback?.(this._prevState, nextState);

    // clear previous state
    this._prevState = undefined;
  }

  /**
   * Initiative notify the component to render the view by the state
   * @param nextState
   */
  /** @hidden */
  public render(nextState?: S) {
    this._event.emit(
      ComponentEvents.Update,
      this._prevState ?? this.state,
      nextState
    );
  }
  /** @hidden */
  public onUpdateState(listener: (prevState: S, nextState: S) => void) {
    this._event.subscribe(ComponentEvents.Update, listener);
  }
  /** @hidden */
  public removeOnUpdateState(listener?: Function): void {
    this._event.unsubscribe(ComponentEvents.Update, listener);
  }
  /** @hidden */
  public forceUpdate() {
    this.setState(cloneDeep(this.state));
  }
  /** @hidden */
  public getState(): S {
    return this.state;
  }
}
