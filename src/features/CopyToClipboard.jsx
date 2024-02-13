import React, { useState } from 'react';
import ClipboardCopy from 'clipboard-copy';

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    ClipboardCopy(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button onClick={handleCopyClick}>
      {copied ? 'Скопировано!' : 'Скопировать в буфер обмена'}
    </button>
  );
};

export default CopyToClipboard;
