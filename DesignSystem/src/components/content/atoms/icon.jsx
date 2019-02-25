import * as React from 'react';

export function Icon(props) {
  const type = props.type;
  const name = props.name;
  const small = props.small;

  let thickness = null;
  let toSmall = null;

  switch (type) {
    case 'fill':
        thickness = '-f';
      break;
    case 'line':
        thickness = '-l';
      break;
    default:
        thickness = '';
      break;
  }

  if (small == true) {
    toSmall = ' sm';
  } else {
    toSmall = '';
  }

  const classNames = `rex-icon ${name}${thickness}${toSmall}`;
  
  return <i className={classNames}></i>;
}
