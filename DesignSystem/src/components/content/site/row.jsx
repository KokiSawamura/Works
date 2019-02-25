import * as React from 'react';
import { getContentSource } from '../contentSource';

export default function Row(props) {
  const data = props.info.data;
  const { lang, currentColor, row } = props;
  const content = getContentSource(data, lang, currentColor);
  const className = props.className ? props.className : '';

  return (
    <div className={`row ${className}`}>
      {content}
    </div>
  );
}
