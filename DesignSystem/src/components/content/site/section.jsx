import * as React from 'react';
import { getContentSource } from '../contentSource';

export default function Section(props) {
  const data = props.info.data;
  const lang = props.lang;
  const className = props.className;
  const currentColor = props.currentColor;
  const content = getContentSource(data, lang, currentColor);
  let options = {};

  if (className) {
    options.className = `rex-motion fadeIn ${className}`;
  }


  return (
    <section {...options}>
      <div className="centered-content">
        {content}
      </div>
    </section>
  );
}
