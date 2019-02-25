import * as React from 'react';

export default function Tooltips(props) {
  const text = props.text ? props.text : '';
  const size = props.size ? props.size : '';

  return (
    <div className={`tooltip ${size}`} style={props.styles}>
      { text }
    </div>
  );
}
