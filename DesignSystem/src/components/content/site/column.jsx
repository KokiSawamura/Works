import * as React from 'react';
import { getContentSource } from '../contentSource';

export default function Column(props) {
  const data = props.info.data;
  const { lang, currentColor, cols } = props;
  const content = getContentSource(data, lang, currentColor);
  const className = props.className !== 'undefined' ? props.className : '';

  return (
    <div className={`col-md-${cols} ${className}`}>
      {content}
    </div>
  );
}
