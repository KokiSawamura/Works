import * as React from 'react';

export default function Labels(props) {
  const text = props.text ? props.text : '';
  const subtext = props.subtext ? props.subtext : '';
  const type = props.type ? ` ${props.type}` : '';
  const subtype = props.subtype ? ` ${props.subtype}` : '';
  const size = props.size ? ` ${props.size}` : '';

  const isCircular = props.type === 'circular';

  const offText = (
    <div className="label-text">
      <div className="large">{text}</div>
      {subtext}
    </div>);

  const circularText = props.subtype === 'off' ? offText : <div className="label-text">{text}</div>;

  return (
    <div className={`label${type + subtype + size}`}>
      {isCircular ? circularText : text}
    </div>
  );
}
