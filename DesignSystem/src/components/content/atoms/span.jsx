import * as React from 'react';

export default function Span(props) {
  const text = props.text;
  const type = props.type;

  return <span>{text}</span>;
}
