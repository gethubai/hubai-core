import React, { useState, useCallback } from 'react';
import './dragAndDropZone.scss';
import { Icon } from '../icon';

export type DragDropZoneHookProps = {
  onDrop: (files: FileList) => void;
};

export function useDragDropZone({ onDrop }: DragDropZoneHookProps) {
  const [dragOver, setDragOver] = useState(false);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOver(false);

      // Get the files from the event
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        onDrop(files);
      }
    },
    [onDrop]
  );

  return {
    getDragProps: () => ({
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
    }),
    isDragging: dragOver,
  };
}

export type DragDropZoneProps = {
  children?: React.ReactNode;
  onHoverContent?: React.ReactNode;
  onNotHoverContent?: React.ReactNode;
  dragOver: boolean;
};

export function DragDropZone({
  children,
  onHoverContent,
  onNotHoverContent,
  dragOver,
}: DragDropZoneProps) {
  const HoverComponent = () => {
    if (onHoverContent) {
      return <>{onHoverContent}</>;
    }
    return (
      <div className="over-container">
        <Icon type="file-symlink-file" className="file-icon" />
        <p>Drag file here</p>
      </div>
    );
  };

  const NotHoverComponent = () => {
    if (onNotHoverContent) {
      return <>{onNotHoverContent}</>;
    }
    return <></>;
  };

  return (
    <div className={`drag-drop-zone ${dragOver ? 'drag-drop-over' : ''}`}>
      {dragOver ? <HoverComponent /> : <NotHoverComponent />}

      {children}
    </div>
  );
}
