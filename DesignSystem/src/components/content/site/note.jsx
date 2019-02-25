import * as React from 'react';

export default function Note(props) {
  const text = props.text;
  const lang = props.lang;
  let note = null;

  switch (lang) {
    case 'jp':
        note = '注';
      break;
  
    default:
        note = 'Note';
      break;
  }

  return (
    <p>
      <strong>{note}: </strong> {text}
    </p>
  );
}
