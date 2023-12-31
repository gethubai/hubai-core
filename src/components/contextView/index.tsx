import React, { useEffect, useState } from 'react';
import { render as renderUtils, unmout } from '@/react/render';
import { classNames } from '@/common/className';
import {
  getRelativePosition,
  select,
  HTMLElementType,
  IPosition,
} from '@/common/dom';
import { EventEmitter } from '@/common/event';
import { Utils } from '@dtinsight/dt-utils';

import {
  contextViewClass,
  contentClassName,
  blockClassName,
  shadowClassName,
} from './base';

export interface IContextViewProps {
  /**
   * Default true
   */

  shadowOutline?: boolean;
  render?: () => React.ReactNode;
}

export interface IContextView {
  view: HTMLElementType;
  show(anchorPos: IPosition, render?: () => React.ReactNode): void;
  hide(): void;
  onHide(callback?: Function): void;
  dispose(): void;
}

enum ContextViewEvent {
  onHide = 'onHide',
}

const Emitter = new EventEmitter();

/**
 * It's a hook used in functional component
 */
export function useContextViewEle(props?: IContextViewProps) {
  const [contextView, setContextView] = useState<IContextView>();

  useEffect(() => {
    // The useContextView can't be called at initial of useState
    // Because this function has rendered an element
    setContextView(useContextView(props));
  }, []);

  return contextView;
}

/**
 * TODO: It's not a hook, don't begin with use
 */
export function useContextView(props: IContextViewProps = {}): IContextView {
  const { shadowOutline = true } = props;
  const claName = classNames(contextViewClass, 'fade-in');
  let contextView: HTMLElementType = select(`.${contextViewClass}`); // Singleton contextView dom

  const show = (anchorPos: IPosition, render?: () => React.ReactNode) => {
    const content = select<HTMLElement>(`.${contentClassName}`);
    const renderContent = render || props?.render;
    if (!renderContent)
      throw new Error(
        'ContextView show Error: the render parameter is required!'
      );
    renderUtils(
      <div
        ref={() => {
          // Notice: if want to get the computed offsetHeight of contextView,
          // must display contextView ahead.
          if (contextView) {
            const position = getRelativePosition(contextView, anchorPos);
            contextView.style.cssText = `
                    visibility: visible;
                    top: ${position.y}px;
                    left: ${position.x}px;
                `;
          }
        }}
      >
        {renderContent()}
      </div>,
      content!
    );
  };

  const hide = () => {
    if (contextView) {
      const contentContainer = select<HTMLElement>(`.${contentClassName}`);
      if (contentContainer) {
        unmout(contentContainer);
      }
      contextView.style.visibility = 'hidden';
      Emitter.emit(ContextViewEvent.onHide);
    }
  };

  const onHide = (callback: Function) => {
    Emitter.subscribe(ContextViewEvent.onHide, callback);
  };

  const onMaskClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    hide();
  };

  const dispose = () => {
    Emitter.unsubscribe(ContextViewEvent.onHide);
    hide();
  };

  if (!contextView) {
    contextView = document.createElement('div');
    contextView.className = classNames(claName, Utils.isMacOs() ? 'mac' : '')!;
    contextView.style.visibility = 'hidden';
    const root = document.getElementById('molecule');
    if (!root) {
      document.body.appendChild(contextView);
    } else {
      root.appendChild(contextView);
    }
    const shadowClass = shadowOutline === false ? '' : shadowClassName;

    renderUtils(
      <>
        <div
          className={blockClassName}
          onClick={onMaskClick}
          onContextMenu={onMaskClick}
        />
        <div className={classNames(contentClassName, shadowClass)} />
      </>,
      contextView
    );
  }

  return { view: contextView, show, hide, onHide, dispose };
}
