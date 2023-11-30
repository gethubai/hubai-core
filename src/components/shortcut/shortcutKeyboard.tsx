import React, { Component } from 'react';
import Keyboard, { KeyboardOptions } from 'react-simple-keyboard';

export type StateType = {
  layoutName: string;
  input: string;
  keys: string[];
};

export const keysOverride: { [index: string]: string } = {
  '{arrowup}': 'Up',
  '{arrowleft}': 'Left',
  '{arrowdown}': 'Down',
  '{arrowright}': 'Right',
  '{escape}': 'Esc',
  '{backspace}': 'Backspace',
  '{space}': 'Space',
  '{enter}': 'Enter',
  '{tab}': 'Tab',
  '{capslock}': 'CapsLock',
  '{delete}': 'Delete',
  '{controlleft}': 'Control',
  '{controlright}': 'Control',
  '{altleft}': 'Alt',
  '{altright}': 'Alt',
  '{metaleft}': 'Command',
  '{metaright}': 'Command',
  '{shiftleft}': 'Shift',
  '{shiftright}': 'Shift',
  '{numpadenter}': 'Enter',
  '{numpaddivide}': 'numdiv',
  '{numpadmultiply}': 'nummult',
  '{numpadsubtract}': 'numsub',
  '{numpadadd}': 'numadd',
  '{numpaddecimal}': 'numdec',
  '{insert}': 'Insert',
  '{home}': 'Home',
  '{pageup}': 'PageUp',
  '{pagedown}': 'PageDown',
  '{end}': 'End',
  '{prtscr}': 'PrintScreen',
  '{scrolllock}': 'ScrollLock',
  '{pause}': 'Pause',
  '{numlock}': 'NumLock',
  '+': 'Plus',
};

// add F1-F12
[...Array(12)].map((_, i) => {
  keysOverride[`{f${i + 1}}`] = `F${i + 1}`;
});

// add numpad 0-9
[...Array(10)].map((_, i) => {
  keysOverride[`{numpad${i}}`] = `num${i}`;
});

export const acceleratorToKeys = (value: string): KeyboardKey[] => {
  if (!value || value === '') return [];
  return value
    .split('+')
    .map((m) => m.trim())
    .map((m) => {
      const button = Object.keys(keysOverride).find(
        (k) => keysOverride[k] === m
      );
      return {
        button: button ?? m,
        accelerator: m,
      };
    });
};

export type KeyboardKey = {
  button: string;
  accelerator: string;
  customButtonOverride?: string;
};

export type Props = {
  selectedKeys: string[];
  onKeyPress: (key: KeyboardKey) => void;
  physicalKeyboardHighlight?: boolean;
  customKeysOverride?: { [index: string]: string };
};

class ShortcutKeyboard extends Component<Props, StateType> {
  state: StateType = {
    layoutName: 'default',
    input: '',
    keys: [],
  };
  keyboard: any;

  commonKeyboardOptions = {
    onKeyPress: (button: string) => this.onKeyPress(button),
    theme: 'simple-keyboard hg-theme-default hg-layout-default darkTheme',
    physicalKeyboardHighlight:
      this.props.physicalKeyboardHighlight === undefined
        ? true
        : this.props.physicalKeyboardHighlight,
    syncInstanceInputs: true,
    mergeDisplay: true,
    debug: false,
  };

  keyboardOptions = {
    ...this.commonKeyboardOptions,
    /**
     * Layout by:
     * Sterling Butters (https://github.com/SterlingButters)
     */
    layout: {
      default: [
        '{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}',
        '` 1 2 3 4 5 6 7 8 9 0 - = {backspace}',
        '{tab} q w e r t y u i o p [ ] \\',
        "{capslock} a s d f g h j k l ; ' {enter}",
        '{shiftleft} z x c v b n m , . / {shiftright}',
        '{controlleft} {altleft} {metaleft} {space} {metaright} {altright}',
      ],
      shift: [
        '{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}',
        '~ ! @ # $ % ^ & * ( ) _ + {backspace}',
        '{tab} Q W E R T Y U I O P { } |',
        '{capslock} A S D F G H J K L : " {enter}',
        '{shiftleft} Z X C V B N M < > ? {shiftright}',
        '{controlleft} {altleft} {metaleft} {space} {metaright} {altright}',
      ],
    },
    display: {
      '{escape}': 'esc ⎋',
      '{tab}': 'tab ⇥',
      '{backspace}': 'backspace ⌫',
      '{enter}': 'enter ↵',
      '{capslock}': 'caps lock ⇪',
      '{shiftleft}': 'shift ⇧',
      '{shiftright}': 'shift ⇧',
      '{controlleft}': 'ctrl ⌃',
      '{controlright}': 'ctrl ⌃',
      '{altleft}': 'alt ⌥',
      '{altright}': 'alt ⌥',
      '{metaleft}': 'cmd ⌘',
      '{metaright}': 'cmd ⌘',
    },
  };

  keyboardControlPadOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: [
        '{prtscr} {scrolllock} {pause}',
        '{insert} {home} {pageup}',
        '{delete} {end} {pagedown}',
      ],
    },
  };

  keyboardArrowsOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: ['{arrowup}', '{arrowleft} {arrowdown} {arrowright}'],
    },
  };

  keyboardNumPadOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: [
        '{numlock} {numpaddivide} {numpadmultiply}',
        '{numpad7} {numpad8} {numpad9}',
        '{numpad4} {numpad5} {numpad6}',
        '{numpad1} {numpad2} {numpad3}',
        '{numpad0} {numpaddecimal}',
      ],
    },
  };

  keyboardNumPadEndOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: ['{numpadsubtract}', '{numpadadd}', '{numpadenter}'],
    },
  };

  onKeyPress = (button: string) => {
    this.props.onKeyPress?.({
      button,
      accelerator: keysOverride[button] ?? button,
      customButtonOverride: this.props.customKeysOverride?.[button],
    });
  };

  mergeOptions = (options: KeyboardOptions) => {
    const optionsToMerge: any = {};
    const buttonsToHighlight = this.props.selectedKeys?.join(' ') ?? '';

    optionsToMerge['buttonTheme'] = buttonsToHighlight.length
      ? [
          {
            class: 'hg-selected',
            buttons: buttonsToHighlight,
          },
        ]
      : [];

    return {
      ...options,
      ...optionsToMerge,
    };
  };

  render() {
    return (
      <div className="keyboard__root">
        <div className={'keyboardContainer'}>
          <Keyboard
            baseClass={'simple-keyboard-main'}
            keyboardRef={(r) => (this.keyboard = r)}
            layoutName={this.state.layoutName}
            {...this.mergeOptions(this.keyboardOptions)}
          />

          <div className="controlArrows">
            <Keyboard
              baseClass={'simple-keyboard-control'}
              {...this.mergeOptions(this.keyboardControlPadOptions)}
            />
            <Keyboard
              baseClass={'simple-keyboard-arrows'}
              {...this.mergeOptions(this.keyboardArrowsOptions)}
            />
          </div>

          <div className="numPad">
            <Keyboard
              baseClass={'simple-keyboard-numpad'}
              {...this.mergeOptions(this.keyboardNumPadOptions)}
            />
            <Keyboard
              baseClass={'simple-keyboard-numpadEnd'}
              {...this.mergeOptions(this.keyboardNumPadEndOptions)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShortcutKeyboard;
