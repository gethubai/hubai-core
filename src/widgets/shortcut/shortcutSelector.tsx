import { generateUniqueId } from '@/common/id';
import { ISelectOptionProps, Modal, Select, Option, Icon } from '@/components';
import HubaiContext from '@/contexts/hubaiContext';
import { IUserShortcut } from '@/services/userShortcutService';
import React, { useState, useCallback, useContext } from 'react';
import ShortcutEditor from './shortcutEditor';

export type ShortcutSelectorProps = {
  label?: string;
  selectedShortcutId?: string;
  onChange: (shortcut: IUserShortcut) => void;
  defaultShortcutForCreation?: IUserShortcut;
  hideCreateNewOption?: boolean;
  hideEditShortcutButton?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

function ShortcutSelector({
  selectedShortcutId,
  onChange,
  defaultShortcutForCreation,
  label,
  hideCreateNewOption,
  hideEditShortcutButton,
  style,
  className,
}: ShortcutSelectorProps) {
  const [showCreateShortcutModal, setShowCreateShortcutModal] =
    useState<boolean>(false);

  const [shortcutWindowItem, setShortcutWindowItem] = useState<IUserShortcut>();

  const {
    services: { userShortcut },
  } = useContext(HubaiContext);

  const shortcuts = userShortcut.getShortcuts();

  const onSelectShortcut = useCallback(
    (e: React.MouseEvent, option: ISelectOptionProps) => {
      if (option.value === 'create') {
        setShortcutWindowItem(
          defaultShortcutForCreation ?? {
            id: generateUniqueId(),
            accelerator: '',
            name: 'New Shortcut',
          }
        );
        setShowCreateShortcutModal(true);
      } else {
        const selectedShortcut = shortcuts.find(
          (s) => s.id === option.value
        ) as IUserShortcut;
        setShortcutWindowItem(selectedShortcut);
        onChange(selectedShortcut);
      }
    },
    [shortcuts, defaultShortcutForCreation, onChange]
  );

  const onSaveNewShortcut = useCallback(
    (shortcut: IUserShortcut) => {
      onChange(shortcut);
      setShowCreateShortcutModal(false);
    },
    [onChange]
  );

  const onEditShortcut = useCallback(() => {
    setShowCreateShortcutModal(true);
  }, []);

  return (
    <div className={`shortcut-selector__root ${className ?? ''}`} style={style}>
      <label>{label}</label>
      {!hideCreateNewOption && (
        <Modal
          visible={showCreateShortcutModal}
          footer={null}
          onCancel={() => setShowCreateShortcutModal(false)}
        >
          <div className="create-shortcut-modal-content">
            {showCreateShortcutModal && !!shortcutWindowItem && (
              <ShortcutEditor
                key={shortcutWindowItem.id}
                item={shortcutWindowItem}
                onSave={onSaveNewShortcut}
              />
            )}
          </div>
        </Modal>
      )}
      <div className="select-container">
        <Select value={selectedShortcutId} onSelect={onSelectShortcut}>
          {shortcuts.map((s) => (
            <Option
              key={`shortcut-option-${s.id}`}
              value={s.id}
              description={s.accelerator}
            >
              {s.name}
            </Option>
          ))}

          {!hideCreateNewOption && (
            <Option
              key="shortcut-option-create"
              value="create"
              description="Create a new shortcut"
            >
              New
            </Option>
          )}
        </Select>

        {!hideEditShortcutButton && (
          <Icon
            type="edit"
            className="edit-shortcut-button"
            onClick={onEditShortcut}
          />
        )}
      </div>
    </div>
  );
}

export default ShortcutSelector;
