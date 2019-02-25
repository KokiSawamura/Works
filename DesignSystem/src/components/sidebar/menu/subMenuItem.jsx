import * as React from 'react';

export function SubMenuItem(props) {
  const isSelected = props.data.isSelected;
  const textObj = props.data.text;
  const link = props.data.link;
  const localization = props.localization;
  const currentLang = localization.currentLang;
  let text = null;
  let options = {};

  if( isSelected === true) {
    options = {
      'className': 'text-primary'
    }
  }

  switch (currentLang) {
    case '日本語':
        text = textObj.jp;
      break;  
    default:
        text = textObj.en;
      break;
  }

  return (
    <li>
      <a href={link}>
        <span {...options}>
        {text}
        </span>
      </a>
    </li>
  );
}
