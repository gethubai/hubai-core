export const ID_APP = 'molecule';
export const ID_ACTIVITY_BAR = 'activityBar';
export const ID_MENU_BAR = 'menuBar';
export const ID_SIDE_BAR = 'sidebar';
export const ID_EXPLORER = 'explorer';
export const ID_STATUS_BAR = 'statusBar';
export const ID_FOLDER_TREE = 'folderTree';
export const ID_EDITOR_TREE = 'editorTree';

// NodeJS doesn't have the crypto.randomUUID() so we do it manually
function manualUUID(): string {
  let d = new Date().getTime();
  let d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });
}

export function generateUniqueId(): string {
  return typeof crypto === 'undefined' ? manualUUID() : crypto.randomUUID();
}
