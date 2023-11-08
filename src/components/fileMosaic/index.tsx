import React from 'react';
import { Icon } from '../icon';

export type FileMosaicItemProps = {
  image: string;
  title: string;
  description?: string;
  onRemove?: () => void;
};

export function FileMosaicItem({
  image,
  title,
  description,
  onRemove,
}: FileMosaicItemProps) {
  return (
    <div className="file-mosaic-item ellipsis">
      <Icon type="close" className="remove-button" onClick={onRemove} />
      <img src={image} alt={title} />
      <span className="file-name">{title}</span>
      {!!description && <span className="file-size">{description}</span>}
    </div>
  );
}

export type TFileMosaicItem = FileMosaicItemProps & {
  id: string;
};

export type FileMosaicProps = {
  files: TFileMosaicItem[];
  onRemove?: (file: TFileMosaicItem) => void;
};

function FileMosaic({ files, onRemove }: FileMosaicProps) {
  return (
    <div className="file-mosaic-container">
      {!!files?.length &&
        files.map((file) => (
          <FileMosaicItem
            key={file.id}
            {...file}
            onRemove={() => onRemove?.(file)}
          />
        ))}
    </div>
  );
}

export default FileMosaic;
