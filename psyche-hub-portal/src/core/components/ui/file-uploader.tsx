import React from "react";
import { Image } from "lucide-react";

interface FileUploaderProps {
  id: string;
  name: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop?: (files: FileList) => void;
  children?: React.ReactNode;
  render?: (props: {
    isDragOver: boolean;
    handleDragOver: (e: React.DragEvent) => void;
    handleDragLeave: (e: React.DragEvent) => void;
    handleDrop: (e: React.DragEvent) => void;
    inputRef: React.RefObject<HTMLInputElement>;
  }) => React.ReactNode;
  className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  id,
  name,
  accept,
  multiple = false,
  disabled = false,
  onChange,
  onDrop,
  children,
  render,
  className = "",
}) => {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      if (disabled) return;

      const files = e.dataTransfer.files;
      if (files.length > 0 && onDrop) {
        onDrop(files);
      }
    },
    [disabled, onDrop]
  );

  const handleClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };

  const defaultChildren = (
    <div className="border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors">
      <Image size={24} className="text-muted-foreground mb-2" />
      <p className="text-sm text-muted-foreground">Upload file</p>
      <p className="text-xs text-muted-foreground mt-1">
        Click to upload or drag and drop
      </p>
    </div>
  );

  const renderProps = {
    isDragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    inputRef,
  };

  return (
    <div
      className={className}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={onChange}
        className="hidden"
      />
      {render ? render(renderProps) : children || defaultChildren}
    </div>
  );
};

export default FileUploader;
