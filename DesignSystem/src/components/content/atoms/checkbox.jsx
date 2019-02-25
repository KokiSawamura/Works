import * as React from 'react';

export default function Checkbox(props) {
  const checkboxClass = props.type || '';
  let id;

  if (props.id) {
    id = props.id;
  } else if (props.type) {
    id = `rex-checkbox-${props.type}`;
  } else {
    id = 'rex-checkbox';
  }

  return (
    <div className={`checkbox-area ${checkboxClass}`}>
      <input id={id} type="checkbox" />
      <label htmlFor={id} className="checkbox-label">{props.text}</label>
    </div>
  );
}
