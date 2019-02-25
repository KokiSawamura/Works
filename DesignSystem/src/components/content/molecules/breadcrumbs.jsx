import * as React from 'react';

export default function Breadcrumnbs(props) {
  const text = props.text;
  return (
    <ul className="breadcrumbs">
      {text.map((t, index) => <li className={index === (text.length - 1) ? 'active' : null} key={index.toString()}><a>{t}</a></li>)}
    </ul>
  );
}
