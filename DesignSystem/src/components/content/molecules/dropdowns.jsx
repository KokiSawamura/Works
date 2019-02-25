import * as React from 'react';

export function splitButton(type, text) {
  return (
    <div className={`btn-group dropdown${type}`}>
      <div className="btn btn-default">
        {text}
      </div>
      <div className="btn-split" />
    </div>
  );
}

export function dropdown(type, text) {
  return (
    <div className={`btn btn-default dropdown${type}`}>
      {text}
    </div>
  );
}

export default function Dropdowns(props) {
  const text = props.text ? props.text : '';
  const type = props.type ? ` ${props.type}` : '';

  return props.splitButton ? splitButton(type, text) : dropdown(type, text);
}
