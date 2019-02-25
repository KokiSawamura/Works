import * as React from 'react';
import { getContentSource } from '../contentSource';

export default function SquareFrame(props) {

  const data = props.info.data;
	const lang = props.lang;
	const tabTarget = props.tabTarget;
  const content = getContentSource(data, lang);
  
  return (
    <div className="square-frame">
      {content}
    </div>
  );
}