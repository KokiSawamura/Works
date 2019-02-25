import * as React from 'react';
import { getContentSource } from '../contentSource';

export default function Container(props) {
  const {
    info: { data },
    lang,
    className,
    currentColor,
  } = props;
  const content = getContentSource(data, lang, currentColor);

  return (
    <div className={className}>
      {content}
    </div>
  );
}
