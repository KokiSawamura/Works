import * as React from 'react';

export default function RadioButton(props) {
  const radioClass = props.status ? props.status : '';
  const name = props.name ? props.name : null;
  let radioId;

  if (props.id) {
    radioId = props.id;
  } else if (props.status) {
    radioId = `rex-radio-${props.status}`;
  } else {
    radioId = 'rex-radio';
  }

  const items = props.text.map(text => {
    return (
      <div className={`radio-area ${radioClass}`} key={radioId}>
        <input type="radio" id={radioId} name={name} />
        <label htmlFor={radioId} className="radio-label">{text}</label>
      </div>
    );
  });

  const label = props.label ? (<p>{props.label}</p>) : null;
  return props.text.length > 1 ? (
    <div className="radio-form">
      {label}
      {items}
    </div>
  ) : items;
}
