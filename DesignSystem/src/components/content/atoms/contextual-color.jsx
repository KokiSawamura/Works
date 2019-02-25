import * as React from 'react';

export function ContextualText(props) {

  const text = props.text;
  const context = props.context;

  return(
    <p className={`text-${context}`}>{text}</p>
  );
}

export function ContextualBackground(props) {

  const text = props.text;
  const context = props.context;

  return(
    <div className={`bg-${context}`}>
      {text}
    </div>
  );
}
