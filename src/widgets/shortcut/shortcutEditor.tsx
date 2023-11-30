import React, { useCallback, useContext, useRef, useState } from 'react';

import ShortcutKeyboard, {
  KeyboardKey,
  acceleratorToKeys,
} from '@/components/shortcut/shortcutKeyboard';
import HubaiContext from '@/contexts/hubaiContext';
import { IUserShortcut } from '@/services/userShortcutService';
import { FormItem } from '@/components/form';
import { Button, Input } from '@/components';

export type ShortcutEditorProps = {
  item: IUserShortcut;
  onSave?: (item: IUserShortcut) => void;
};

function ShortcutEditor({ item, onSave }: ShortcutEditorProps) {
  const {
    services: { toast, userShortcut },
  } = useContext(HubaiContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>(item.name);
  const [selectedKeys, setSelectedKeys] = useState<KeyboardKey[]>(
    acceleratorToKeys(item.accelerator)
  );

  const saveSettings = useCallback(
    async (itemToSave: IUserShortcut) => {
      const exists = userShortcut
        .getShortcuts()
        .find((s) => s.id === itemToSave.id);

      let result = exists
        ? await userShortcut.update(itemToSave)
        : await userShortcut.register(itemToSave);

      if (result) {
        toast.success('Shortcut saved');
        onSave?.(itemToSave);
      } else {
        toast.error(
          `Could not save shortcut. The shortcut is either already registered, in use by another application or not valid.`
        );
      }
    },
    [selectedKeys, userShortcut, toast]
  );

  const onSubmit = useCallback(
    (form: React.FormEvent) => {
      form.preventDefault();
      const accelerator = selectedKeys.map((m) => m.accelerator).join('+');

      const itemSave = {
        id: item.id,
        name: name ?? accelerator,
        accelerator: accelerator,
      };

      saveSettings(itemSave);
    },
    [item, selectedKeys, saveSettings, name]
  );

  const onKeyPress = useCallback(
    (key: KeyboardKey) => {
      setSelectedKeys((keys) => {
        const index = keys.findIndex((k) => k.button === key.button);

        if (index > -1) {
          keys.splice(index, 1);
        } else {
          if (keys.length <= 3) keys.push(key);
          else {
            toast.error('You can only add up to 3 keys');
          }
        }

        return [...keys];
      });
    },
    [selectedKeys]
  );

  return (
    <div className="shortcutEditor__root">
      <div className="content-container">
        <h1>Shortcut</h1>

        <form ref={formRef} onSubmit={onSubmit}>
          <FormItem label="Shortcut name" name="name">
            <Input
              name="name"
              maxLength={40}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormItem>
          <FormItem label="KeyCodes">
            <div className="categories-container">
              {selectedKeys?.map((category, i) => (
                <span
                  className="category-badge"
                  key={`category-badge-${category.accelerator}`}
                >
                  {category.accelerator}
                </span>
              ))}
              {!selectedKeys.length && (
                <span className="category-badge">
                  Click on the keyboard to select a key
                </span>
              )}
            </div>
          </FormItem>
          <ShortcutKeyboard
            selectedKeys={selectedKeys.map((m) => m.button)}
            onKeyPress={onKeyPress}
          />
          <FormItem className="buttons-container">
            <Button style={{ marginLeft: 0, width: '50%' }} onClick={onSubmit}>
              Save
            </Button>
          </FormItem>
        </form>
      </div>
    </div>
  );
}

export default ShortcutEditor;
