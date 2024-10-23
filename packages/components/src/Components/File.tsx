import * as React from 'react';
import { useMemo } from 'react';
import { formatFileSize } from '@deskpro/js-utils/dist/numbers';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import DeleteIcon from '../tsx-assets/Delete';
import type { DpBlob } from "../types/blob";
import type { I18nType } from "../types/i18n";

interface IProps {
  inputName: string;
  onRemove: (file: DpBlob) => void;
  i18n: I18nType;
  file: DpBlob;
}

const I18N = {
  remove: 'remove'
};

export const renderSize = (file: DpBlob) => {
  if (typeof file.size === 'string') {
    return `(${file.size})`;
  } else if (typeof file.size === 'number') {
    return `(${formatFileSize(file.size)})`;
  }
  return null;
};

const File = ({
  inputName,
  onRemove,
  i18n,
  file
}: IProps) => {
  const mergedI18n = useMemo(() => {
    return deepMerge(I18N, i18n);
  }, [i18n]);

  const onHandleKeyDown = (ev) => {
    if (ev.ctrlKey && ev.altKey && ev.keyCode === 68) {
      onRemove(file);
    }
  };

  const formName = `${inputName}[${file.id}][blob_auth]`;

  return (
    <li>
      {file.filename} {renderSize(file)}
      <span className="dp-pc_file-upload_remove-file" onClick={() => onRemove(file)} onKeyDown={onHandleKeyDown}>
        <DeleteIcon /> {mergedI18n.remove}
      </span>
      <input type="hidden" name={formName} value={file.authcode} />
    </li>
  );
}

export default File;
